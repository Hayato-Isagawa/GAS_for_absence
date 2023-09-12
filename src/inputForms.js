function inputForms() {
  // Googleフォームのhtmlを取得
  const html =
    '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScqqGvyAO9UgiF2pf0ZBsiw1WHpxDHdF0UClsuSeMUEmAIPAQ/viewform?embedded=true" width="640" height="2262" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>';

  // 取得したhtmlを安全な形に変換
  const htmlOutput = HtmlService.createHtmlOutput(html)
    .setHeight(700)
    .setWidth(650);

  // 埋め込みたいスプレッドシートのUIを取得
  const ui = SpreadsheetApp.getUi();

  // スプレッドシートに3パターンのいずれかで表示
  // １　埋め込んだフォームのみ操作可能
  // ui.showModalDialog(htmlOutput, '欠席・遅刻連絡');
  // ２　フォームとスプレッドシートを同時に操作可能
  ui.showModelessDialog(htmlOutput, '欠席・遅刻連絡');
  // ３　フォームをサイドバーとして表示
  // ui.showSidebar(htmlOutput);
}
