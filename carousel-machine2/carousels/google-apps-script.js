// ==============================================================
// Google Apps Script - הדבק את הקוד הזה ב-Google Apps Script
// ==============================================================
//
// שלבים:
// 1. לך ל: https://script.google.com
// 2. צור פרויקט חדש (New Project)
// 3. מחק את הקוד הקיים והדבק את הקוד הזה
// 4. בשורה 18 - שנה את SPREADSHEET_ID ל-ID של הגיליון שלך
//    (ה-ID נמצא ב-URL של הגיליון: https://docs.google.com/spreadsheets/d/ID_HERE/edit)
// 5. לחץ Deploy > New Deployment
// 6. בחר Type: Web App
// 7. Execute as: Me, Who has access: Anyone
// 8. לחץ Deploy וקבל את ה-URL
// 9. העתק את ה-URL לקובץ quiz-typeform.html בשורת GOOGLE_SCRIPT_URL_HERE
//

const SPREADSHEET_ID = '1LP9nGgXzZx8V_zsfBSPZWkR1q5YilaKQ_ITt9VkpyBM';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName('לידים');

    if (!sheet) {
      sheet = ss.insertSheet('לידים');
      sheet.appendRow([
        'תאריך',
        'שם',
        'טלפון',
        'גיל',
        'צפה בתכנים',
        'ניסיון',
        'תחושה כלכלית',
        'מוכנות לצעד ראשון',
        'מה חסר',
        'מצב כלכלי',
        'מחוייבות'
      ]);
      sheet.getRange(1, 1, 1, 11).setFontWeight('bold');
    }

    sheet.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.age,
      data.watched_content,
      data.experience,
      data.financial_feeling,
      data.first_step,
      data.whats_missing,
      data.financial_status,
      data.commitment
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Quiz webhook is active')
    .setMimeType(ContentService.MimeType.TEXT);
}
