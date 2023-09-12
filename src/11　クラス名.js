function className() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('フォームの回答');

  let row = sheet.getLastRow();
  let classNameRange = sheet.getRange(2,13,row,1);

  classNameRange.setFormula('=CONCATENATE(C2:D2)')

}
