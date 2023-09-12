function sortTime() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('フォームの回答');

  //B列を欠席日順にソート
  // sheet.getRange("B:B").activate();
  sheet.sort(2, false);
}
