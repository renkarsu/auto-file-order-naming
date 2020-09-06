// * 「* ...」はコードを役割で区切るために用いる

// * h1タグ内のテキストを書き換える
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// * htmlタグ(つまり画面全体)内をクリックしたらalertを実行
var myHTML = document.querySelector('html');
myHTML.onclick = function () {
  alert('痛っ! つつくのはやめて!');
};
/* 上の関数を無名関数で記述量を減らす場合
document.querySelector('html').onclick = function() {
    alert('痛っ! つつくのはやめて!');
}
*/

/*
* サイトにアクセスしてみると、ページがユーザ名を尋ね、パーソナライズされたメッセージを表示します。
好きなときにボタンを押すと名前を変えることができます。おまけに、名前は localStorage 内に格納されているため、
サイトを閉じた後も名前が保持され、次にサイトを開いたときにパーソナライズされたメッセージが保持されます。
*/
// ローカルストレージに名前がなければ設定関数を呼び, 名前が存在すれば表示
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
}

// main.html内の<botton>タグで作成したボタンとWebAPIを結びつける
var myButton = document.querySelector('button');
//var myHeading = document.querySelector('h1');

// ボタンが押された時の処理
myButton.onclick = function () {
  setUserName();
}

// 名前の設定とローカルストレージへの保存と名前を用いた出力
function setUserName() {
  var myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
}
/*上の関数にnullチェックを追加
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}
*/