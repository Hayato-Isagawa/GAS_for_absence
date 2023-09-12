function reName() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("フォームの回答");

// 　
  var row = sheet.getLastRow();
  var name = sheet.getRange(2,7,row,1);
  var sarchName = sheet.getRange(2,14,row,1);

  sarchName.setFormula(`=IFERROR(VLOOKUP(E2,INDIRECT("'"&M2&"'!"&"A:B"),2,FALSE),"")`);
  // let renames =sarchName.getValues();
  // name.setValues(renames);

}
