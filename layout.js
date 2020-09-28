// <input type="file" name="upfile[]" multiple class="InputAddOn-field" id="FileStorage">にchangeイベントを設定

var THUMBNAIL_WIDTH = $('#layout-tile').Width / 5;
var THUMBNAIL_HEIGHT = $('#layout-tile').height / 2;

//ファイル名の表示のみ可能。複数個は不可
$('#FileStorage').change(function() {

	$('.layoutCanvas').hide() ;
	
	// 個数分の画像を表示する
	var fileList = $(this).get(0).files.length ;
	for( var i=0,l=fileList; l>i; i++ ) {
		var file = $(this).prop('files')[i] ;

		//リサイズand画像表示
		//なんかエラーでてる?
		if (! file.type.match('image.*')) {
			var img_src = "iamge.jpg";
			$('#layout-tile').html(img_src);
		}else{
			var width, height;
        	if(file.width > file.height){
        		var ratio = file.height/file.width;
            	width = THUMBNAIL_WIDTH;
				height = THUMBNAIL_WIDTH * ratio;
				file.width(width);
				file.height(height);
        	}else if(file.height > file.width){
            	var ratio = file.width/file.height;
            	height = THUMBNAIL_HEIGHT;
				width = THUMBNAIL_HEIGHT * ratio;
				file.width(width);
				file.height(height);
			}
			$('#layout-tile').append('<img src="' + file + '"></img>');
		}

		var fileName = file.name
		$('#layout-tile').append('<dev>' + fileName + '</div>') ;
	}
	
});