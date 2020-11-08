document.getElementById("FileStorage").onchange = function () {

	// 要素を取得
	let ele = document.getElementById('layoutCanvas');
	// 現在の display プロパティの値を保持
	const displayOriginal = ele.style.display;
	// none に設定して非表示
	ele.style.display = 'none';

	objectUrls = [];

	var fileList = this.files;

	for (var i = 0, l = fileList.length; l > i; i++) {
		var objectUrl = URL.createObjectURL(fileList[i]);
		var fileName = fileList[i].name;

		appendHTML('<div><div>' + fileName + '<img src="' + objectUrl + '" width="100%"></div></div>');

		objectUrls.push(objectUrl);
	}
}

function appendHTML(html) {
	document.getElementById("layout-tile").innerHTML += html;
}

var objectUrls = [];

