function newConditionalFormatRule() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  
  //それぞれのシートの最大行・最大範囲を取得 
  for(var i=1; i<=sheets.length-1; i++){
    var row = sheets[i].getMaxRows()-1;
    var range = sheets[i].getRange(2,1,row,9);

    // それそれのシートの最大行・最大範囲まで学級カラーの書式を設定、カラーは16進数のカラーコードで入力
    // 1組は赤
    var rules = sheets[i].getConditionalFormatRules();
    var rule1 = SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=$C2="1組"').setBackground("#f4c7c3").setRanges([range]).build();
    rules.push(rule1);
    sheets[i].setConditionalFormatRules(rules);
    // 2組は青
    var rule2 = SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=$C2="2組"').setBackground("#b7d9e1").setRanges([range]).build();
    rules.push(rule2);
    sheets[i].setConditionalFormatRules(rules);
  // 3組は黄色
    var rule3 = SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=$C2="3組"').setBackground("#fce8b2").setRanges([range]).build();
    rules.push(rule3);
    sheets[i].setConditionalFormatRules(rules);
  // 4組は緑
    var rule4 = SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=$C2="4組"').setBackground("#b7e1cd").setRanges([range]).build();
    rules.push(rule4);
    sheets[i].setConditionalFormatRules(rules);
  }
}