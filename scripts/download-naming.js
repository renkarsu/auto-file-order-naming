var img;

var fileList = this.files;

for (var i = 0, l = fileList.length; l > i; i++) {

    function download() {
        var element = document.createElement('a');
        element.setAttribute('href', img)
        element.setAttribute('download', document.getElementById("fileName").value + document.getElementById("fileNumber").value + '.png');

        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}