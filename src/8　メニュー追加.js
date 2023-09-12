function onOpen(e) {
  // スプレッドシートのUIを取得
  var ui = SpreadsheetApp.getUi();

  // ”便利”というタブをメニューに追加
  var menu = ui.createMenu("自分で入力");
  // メニューの内容を追加、表示名と関数を指定
  menu.addItem("自分で入力", "inputForms");
  
  // メニューをUIに表示
  menu.addToUi();
}
