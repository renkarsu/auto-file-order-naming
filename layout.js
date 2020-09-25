// <input type="file" name="upfile[]" multiple class="InputAddOn-field" id="FileStorage">にchangeイベントを設定

//TEST用
/*var FileStorage = $('#test-btn');
FileStorage.click(function(){
	alert("test");
});*/


//ファイル名の表示のみ可能。複数個は不可
$('#FileStorage').change(function() {

	$('.layoutCanvas').hide();
	
	// 個数分の画像を表示する
	var fileList = $(this).get(0).files.length;
	for( var i=0,l=fileList; l>i; i++ ) {
		var file = $(this).prop('files')[i];

		$('#layout-tile').innerHTML += '<dev>' + file.name + '</div>' ;

    	//$('#layout-tile').html('ファイル名:' + file.name);

		// Blob URLの作成
		/*var blobUrl = window.URL.createObjectURL( fileList[i] ) ;

		// HTMLに書き出し (src属性にblob URLを指定)
		$('#layout-tile').innerHTML += '<a href="' + blobUrl + '" FileStorage="_blank"><img src="' + blobUrl + '"></a>' ;*/
	}
	
	$('.layoutCanvas').hide();
});