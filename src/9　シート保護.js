function sheetsProtection() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  
  //シートに警告を表示し、入力しないよう促す
  for (var i=1; i<=sheets.length-1; i++){
    //シートを直接保護するからRangeは必要ない
    var protections = sheets[i].protect().setDescription("警告");
    protections.setWarningOnly(true);
  };
}