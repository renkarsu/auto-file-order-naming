// <input type="file" name="upfile[]" multiple class="InputAddOn-field" id="FileStorage">にchangeイベントを設定
$('#FileStorage').change(function() {

	$('.layoutCanvas').hide() ;
	
	// 個数分の画像を表示する
	var fileList = $(this).get(0).files.length ;
	for( var i=0,l=fileList; l>i; i++ ) {
		var file = $(this).prop('files')[i] ;
		var fileName = file.name;

		//画像表示
		if (! file.type.match('image.*')) {
			var img_src = "image/fileImage.png";
			//$('#layout-tile').append('<img src="' + img_src + '"></img>');
			$('#layout-tile').append('<div><img src="' + img_src + '"><dev>' + fileName + '</div></div>');
		}else{
			var reader = new FileReader();
    		reader.onload = function() {
				var img_src = reader.result;
				console.log(img_src);
				$('#layout-tile').append('<div><img src="' + img_src + '" width = "100%"><dev>' + fileName + '</div></div>');
			}
			reader.readAsDataURL(file);
		}
	}
	$('#layout-tile img').addClass('Thumbnail');
});