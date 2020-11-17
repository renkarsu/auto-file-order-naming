document.getElementById("FileStorage").onchange = function () {

	// 要素を取得
	let e = document.getElementById('layoutCanvas');
	// none に設定して非表示
	e.style.display = "none";

	objectUrls = [];

	var fileList = this.files;

	for (var i = 0, l = fileList.length; l > i; i++) {

		if (!fileList[i].type.match('image.*')) {
			var fileName = fileList[i].name;
			appendHTML('<div class="column" draggable="true"><div>' + fileName + '<img src=" images/fileImage.png "  width="100%"></div></div>');
			objectUrls.push(objectUrl);
		} else {
			var objectUrl = URL.createObjectURL(fileList[i]);
			var fileName = fileList[i].name;
			appendHTML('<div class="column" draggable="true"><div>' + fileName + '<img src="' + objectUrl + '" width="100%"></div></div>');
			objectUrls.push(objectUrl);
		}
	}
}

function appendHTML(html) {
	document.getElementById("layout-tile").innerHTML += html;
}

var objectUrls = [];