function newConditionalFormatRuleCorona() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();

  //それぞれのシートの最大行・最大範囲を取得
  const row0 = sheets[0].getMaxRows() - 1;
  const range0 = sheets[0].getRange(2, 9, row0, 1);

  // フォームの回答シートで、検温結果の最大行のセルまで、37.5℃以上だったら赤くなる書式を設定
  const rules0 = sheets[0].getConditionalFormatRules();
  const rule0 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=$I2>=37.5')
    .setBackground('#ff0000')
    .setRanges([range0])
    .build();
  rules0.push(rule0);
  sheets[0].setConditionalFormatRules(rules0);

  // それぞれのシートで、検温結果の最大行のセルまで、37.5℃以上だったら赤くなる書式を設定
  for (let i = 1; i <= sheets.length - 1; i++) {
    const row = sheets[i].getMaxRows() - 1;
    const range = sheets[i].getRange(2, 8, row, 1);
    const rules = sheets[i].getConditionalFormatRules();
    const rule1 = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=$H2>=37.5')
      .setBackground('#ff0000')
      .setRanges([range])
      .build();
    rules.push(rule1);
    sheets[i].setConditionalFormatRules(rules);
  }
}
