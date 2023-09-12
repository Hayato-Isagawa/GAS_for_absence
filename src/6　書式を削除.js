function sheetConditionalFormatRulesclear() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  
  //設定されている書式を削除 
  sheets.forEach(function(sheet){
    sheet.clearConditionalFormatRules();
  })
}