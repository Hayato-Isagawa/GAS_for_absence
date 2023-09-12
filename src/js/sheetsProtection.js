function sheetsProtection() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();

  //シートに警告を表示し、入力しないよう促す
  for (let i = 1; i <= sheets.length - 1; i++) {
    //シートを直接保護するからRangeは必要ない
    const protections = sheets[i].protect().setDescription('警告');
    protections.setWarningOnly(true);
  }
}
