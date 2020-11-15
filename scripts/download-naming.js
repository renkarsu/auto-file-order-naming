function download() {

    var fileList = document.getElementById("FileStorage").files;

    if (fileList.length == 0) {
		alert('ファイルを選択してください');
		return false;
    }
    
    var number = document.getElementById("fileNumber").value;
    if(number < 0){
        alert('番号は0以上の数字を入力してください');
        return false;
    }

    for (var i = 0, l = fileList.length; l > i; i++) {

        var img = URL.createObjectURL(fileList[i]);
        var currentNumber = parseInt(number, 10) + parseInt(i, 10);
        var fileName = fileList[i].name;

        var ret
        var fileTypes = fileName.split(".");
        var len = fileTypes.length;
        if(len === 0){
            ret = "";
        }
        ret = fileTypes[len - 1];

        var element = document.createElement('a');
        element.setAttribute('href', img)
        element.setAttribute('download', document.getElementById("fileName").value + '_' + currentNumber + '.' + ret);

        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

    }
}