function sheetConditionalFormatRulesclear() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();

  //設定されている書式を削除
  sheets.forEach(sheet => {
    sheet.clearConditionalFormatRules();
  });
}
