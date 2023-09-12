function fontAndSizeChange() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();

  //それぞれのシートの文字にサイズ10のArialを設定
  sheets.forEach(sheet => {
    const rows = sheet.getLastRow();
    const columns = sheet.getLastColumn();
    const ranges = sheet.getRange(1, 1, rows, columns);
    ranges.setFontFamily('Arial').setFontSize(10);
  });
}
