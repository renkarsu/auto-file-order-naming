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

		if (! file.type.match('image.*')) {
			reader.onload = function() {
				var width, height;
        		if(image.width > image.height){
        			var ratio = image.height/image.width;
            		width = THUMBNAIL_WIDTH;
            		height = THUMBNAIL_WIDTH * ratio;
        		}else if(image.height > image.width){
            		var ratio = image.width/image.height;
            		height = THUMBNAIL_HEIGHT;
            		width = THUMBNAIL_HEIGHT * ratio;
        		}
				var img_src = "iamge.jpg";
				$('#layout-tile').html(img_src);
		  	}
		}else{
		  	// 画像表示
		  	var reader = new FileReader();
		  	reader.onload = function() {
				var width, height;
				if(image.width > image.height){
					var ratio = image.height/image.width;
					width = THUMBNAIL_WIDTH;
					height = THUMBNAIL_WIDTH * ratio;
				}else if(image.height > image.width){
					var ratio = image.width/image.height;
					height = THUMBNAIL_HEIGHT;
					width = THUMBNAIL_HEIGHT * ratio;
				}
				var img_src = $('<img>').attr('src', reader.result);
				$('#layout-tile').html(img_src);
		  	}
			reader.readAsDataURL(file);
		}

		var fileName = file.name
		$('#layout-tile').append('<dev>' + fileName + '</div>') ;
	}
	
});