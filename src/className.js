function className() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('フォームの回答');

  const row = sheet.getLastRow();
  const classNameRange = sheet.getRange(2, 13, row, 1);

  classNameRange.setFormula('=CONCATENATE(C2:D2)');
}
