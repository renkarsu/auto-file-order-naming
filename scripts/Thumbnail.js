document.getElementById( "FileStorage" ).onchange = function () {
	$('.layoutCanvas').hide() ;
	objectUrls = [] ;

	var fileList = this.files ;

	for( var i=0,l=fileList.length; l>i; i++ ) {
		var objectUrl = URL.createObjectURL( fileList[i] ) ;
		var fileName = fileList[i].name;

		appendHTML( '<div><div>' + fileName + '<img src="' + objectUrl + '" width="100%"></div></div>' ) ;

		objectUrls.push( objectUrl ) ;
	}
}

function appendHTML ( html ) {
	document.getElementById( "layout-tile" ).innerHTML += html ;
}

var objectUrls = [] ;

$('#test-btn').click(function(){
	alart('true');
})
