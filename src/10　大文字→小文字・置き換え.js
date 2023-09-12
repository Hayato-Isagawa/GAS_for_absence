function convertionLetters() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("フォームの回答");

// 　検温結果の最大行の範囲、変換するためのK行の最大行の範囲を取得
  var row = sheet.getLastRow();
  var feverRange = sheet.getRange(2,9,row,1)
  var feverValues = feverRange.getValues();
  var feverRange1 = sheet.getRange(2,12,row,1)

  // 関数を使って大文字を小文字にし、エラーを出す記号等を取り除く
  feverRange1.setFormula('=SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(ASC(I2),"度","."),"℃",""),"･","."),"・","."),"､",".")');
  var feverValues1 = feverRange1.getValues();
  feverRange.setValues(feverValues1);
}
