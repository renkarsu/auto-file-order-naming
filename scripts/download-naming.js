function download() {

    var fileList = document.getElementById("FileStorage").files;
    var l = fileList.length;
    var number = document.getElementById("fileNumber").value;

    if (l == 0) {
        alert('ファイルを選択してください');
        return false;
    }

    if (number < 0) {
        alert('番号は0以上の数字を入力してください');
        return false;
    }

    var LastNumber = parseInt(number, 10) + parseInt(l, 10);
    //var str1 = String(LastNumber).length - 2;

    var str1 = String(LastNumber).length;


    for (var i = 0; l > i; i++) {

        var img = URL.createObjectURL(fileList[i]);
        var currentNumber = parseInt(number, 10) + parseInt(i, 10);
        var fileName = fileList[i].name;

        var str2 = String(currentNumber).length;
        var str = str1 - str2;
        var frontNumber = "";
        if (str > 0) {
            for (var n = 0; str > n; n++) {
                frontNumber += "0";
            }
        }

        var ret
        var fileTypes = fileName.split(".");
        var len = fileTypes.length;
        if (len === 0) {
            ret = "";
        }
        ret = fileTypes[len - 1];

        var element = document.createElement('a');
        element.setAttribute('href', img)
        element.setAttribute('download', document.getElementById("fileName").value + '_' + frontNumber + "" + currentNumber + '.' + ret);

        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

    }

}