// <input type="file" name="upfile[]" multiple class="InputAddOn-field" id="FileStorage">にchangeイベントを設定

var THUMBNAIL_WIDTH = $(window).width() * (3 / 20);
var THUMBNAIL_HEIGHT = $(window).height() / 5;

//ファイル名の表示のみ可能。複数個は不可
$('#FileStorage').change(function() {

	$('.layoutCanvas').hide() ;
	
	// 個数分の画像を表示する
	var fileList = $(this).get(0).files.length ;
	for( var i=0,l=fileList; l>i; i++ ) {
		var file = $(this).prop('files')[i] ;

		//画像表示
		if (! file.type.match('image.*')) {
			var img_src = "iamge.jpg";
			$('#layout-tile').append('<img src="' + img_src + '"></img>');
		}else{

			var reader = new FileReader();
    		reader.onload = function() {
				var img_src = $('<img>').attr('src', reader.result);
				$('#layout-tile').html(img_src);
				$('#layout-tile img').addClass('Thumbnail');
			}
			reader.readAsDataURL(file);
		}

		//リサイズ
		//できてない
		var width, height;
		var Thumbnail = $('.Thumbnail');
        if(Thumbnail.width > Thumbnail.height){
    		var ratio = Thumbnail.height / Thumbnail.width;
    		width = THUMBNAIL_WIDTH;
			height = THUMBNAIL_WIDTH * ratio;
			Thumbnail.width(width);
			Thumbnail.height(height);
			alert("iketa");
     	}else if(Thumbnail.height > Thumbnail.width){
        	var ratio = Thumbnail.width / Thumbnail.height;
        	height = THUMBNAIL_HEIGHT;
			width = THUMBNAIL_HEIGHT * ratio;
			Thumbnail.width(width);
			Thumbnail.height(height);
			alert("iketa");
		}

		var fileName = file.name
		$('#layout-tile').append('<dev>' + fileName + '</div>') ;
	}
	
});