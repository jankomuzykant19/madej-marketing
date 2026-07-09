/**
 * Madej Marketing — lead webhook for Google Sheets + email notification.
 *
 * Setup:
 * 1. Create a sheet with headers in row 1 (see SHEET_HEADERS below).
 * 2. Paste NOTIFY_EMAIL and SECRET_TOKEN.
 * 3. Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web App URL into LEAD_WEBHOOK_URL (.env.local).
 * 5. Use the same SECRET_TOKEN in LEAD_WEBHOOK_SECRET (.env.local).
 */

const NOTIFY_EMAIL = "TWOJ@EMAIL.pl";
const SECRET_TOKEN = "WYGENERUJ_LOSOWY_CIAZ_ZNAKOW";

const SHEET_HEADERS = [
  "Data",
  "Imię i nazwisko",
  "Firma",
  "E-mail",
  "Telefon",
  "Zakres",
  "Budżet",
  "Termin",
  "Wiadomość",
];

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);

    if (payload.token !== SECRET_TOKEN) {
      return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
    }

    const name = String(payload.name || "").trim();
    const email = String(payload.email || "").trim();

    if (!name || !email) {
      return jsonResponse({ ok: false, error: "Missing required fields" }, 400);
    }

    const sheet = getLeadSheet_();
    sheet.appendRow([
      new Date(),
      name,
      String(payload.company || ""),
      email,
      String(payload.phone || ""),
      Array.isArray(payload.services) ? payload.services.join(", ") : "",
      String(payload.budget || ""),
      String(payload.timeline || ""),
      String(payload.message || ""),
    ]);

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: "Nowe zgłoszenie od " + name,
      body: formatEmailBody_(payload),
    });

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) }, 500);
  }
}

function getLeadSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheets()[0];
  const firstRow = sheet.getRange(1, 1, 1, SHEET_HEADERS.length).getValues()[0];

  if (firstRow.join("").trim() === "") {
    sheet.getRange(1, 1, 1, SHEET_HEADERS.length).setValues([SHEET_HEADERS]);
  }

  return sheet;
}

function formatEmailBody_(payload) {
  const services = Array.isArray(payload.services)
    ? payload.services.join(", ")
    : "";

  return [
    "Nowe zgłoszenie ze strony Madej Marketing",
    "",
    "Imię i nazwisko: " + (payload.name || ""),
    "Firma: " + (payload.company || "—"),
    "E-mail: " + (payload.email || ""),
    "Telefon: " + (payload.phone || "—"),
    "Zakres: " + (services || "—"),
    "Budżet: " + (payload.budget || "—"),
    "Termin: " + (payload.timeline || "—"),
    "",
    "Wiadomość:",
    payload.message || "—",
  ].join("\n");
}

function jsonResponse(body, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );

  // Apps Script Web App cannot set HTTP status codes directly.
  void statusCode;
  return output;
}
