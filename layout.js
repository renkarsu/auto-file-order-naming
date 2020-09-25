// <input type="file" name="upfile[]" multiple class="InputAddOn-field" id="FileStorage">にchangeイベントを設定

//TEST用
/*var FileStorage = $('#test-btn');
FileStorage.click(function(){
	alert("test");
});*/


//ファイル名の表示のみ可能。複数個は不可
$('#FileStorage').change(function() {
	// フォームで選択された全ファイルを取得
	
	var file = $(this).prop('files')[0];
    $('#layout-tile').html('ファイル名:' + file.name);

	// 個数分の画像を表示する
	for( var i=0,l=fileList.length; l>i; i++ ) {
		// Blob URLの作成
		var blobUrl = window.URL.createObjectURL( fileList[i] ) ;

		// HTMLに書き出し (src属性にblob URLを指定)
		$('#layout-tile').innerHTML += '<a href="' + blobUrl + '" FileStorage="_blank"><img src="' + blobUrl + '"></a>' ;
	}
	
	$('.layoutCanvas').hide();
});