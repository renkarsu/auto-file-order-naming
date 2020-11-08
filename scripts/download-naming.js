function download() {

    alert("true");

    var fileList = document.getElementById("FileStorage").files;
    for (var i = 0, l = fileList.length; l > i; i++) {

        var fileList = this.files;
        var img = URL.createObjectURL(fileList[i]);
        var number = document.getElementById("fileNumber").value;
        var currentNumber = number + i;

        var element = document.createElement('a');
        element.setAttribute('href', img)
        element.setAttribute('download', document.getElementById("fileName").value + '_' +  currentNumber + '.png');

        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

    }
}