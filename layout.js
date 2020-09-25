// <input type="file" name="upfile[]" multiple class="InputAddOn-field" id="FileStorage">にchangeイベントを設定


/*var FileStorage = document.getElementById("FileStorage");
FileStorage.addEventListener( "change", function() {
	// フォームで選択された全ファイルを取得
    var fileList = this.files ;
    $('.layoutCanvas').display('none');

	// 個数分の画像を表示する
	for( var i=0,l=fileList.length; l>i; i++ ) {
		// Blob URLの作成
		var blobUrl = window.URL.createObjectURL( fileList[i] ) ;

		// HTMLに書き出し (src属性にblob URLを指定)
		$('#layout-tile').innerHTML += '<a href="' + blobUrl + '" FileStorage="_blank"><img src="' + blobUrl + '"></a>' ;
	}
})*/

$('#test-btn').click(function(){
	alert("読み込みできました");
})
