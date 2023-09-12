function newSheetsOfGrade() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  // 学年を入力
  var grade = ["1年","2年","3年","4年","5年","6年"]
  // 支援学級を追加
  grade.push("わかば");

  //入力した学年、支援学級を基にそれぞれのシートを作成 
  for(var i=0; i<grade.length; i++){
  var newSheet = ss.insertSheet(grade[i]);
  }
  
  // それぞれのシートにフィルター関数を入力し、学年、支援学級ごとに表示できるようにする　
  var sheets = ss.getSheets();
  for(var i=1; i<=sheets.length-1; i++){
    if(i<sheets.length-1){
    sheets[i].getRange(2,1).setValue(`=FILTER('フォームの回答'!B2:J,'フォームの回答 1'!C2:C="${i}年")`)
    } else {
    sheets[i].getRange(2,1).setValue(`=FILTER('フォームの回答'!B2:J,'フォームの回答 1'!E2:E="わかば")`) 
    }
  }

  // それぞれのシートに質問内容をコピーして、先頭行を作成する
  var questionList = sheets[0].getRange(1,2,1,9).getValues();
  for(var i=1; i<=sheets.length-1; i++){
    sheets[i].getRange(1,1,1,9).setValues(questionList);
  }
}