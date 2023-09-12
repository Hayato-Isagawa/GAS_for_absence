function fontAndSizeChange() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();

  //それぞれのシートの文字にサイズ10のArialを設定
  sheets.forEach(function(sheet){
    var rows = sheet.getLastRow();
    var columns = sheet.getLastColumn();
    var ranges = sheet.getRange(1,1,rows,columns);
  ranges.setFontFamily("Arial").setFontSize(10);
  });
}
