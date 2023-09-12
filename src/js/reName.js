function reName() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('フォームの回答');

  //
  const row = sheet.getLastRow();
  const name = sheet.getRange(2, 7, row, 1);
  const sarchName = sheet.getRange(2, 14, row, 1);

  sarchName.setFormula(
    `=IFERROR(VLOOKUP(E2,INDIRECT("'"&M2&"'!"&"A:B"),2,FALSE),"")`
  );
  // let renames =sarchName.getValues();
  // name.setValues(renames);
}
