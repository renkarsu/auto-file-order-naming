//upload.jsを参考にしていないので後で見直す

$(function(){
    var file = null;
    var blod = null;
    //画像リサイズ後の縦横の長さの最大値
    const THUMBNAIL_WIDTH = 500;
    const THUMBNAIL_HEIGHT = 500;

    //ファイルが選択されたとき
    $('input[type=file').change(function(){
        file = $(this).prop('files')[0];

        //選択されたファイルが画像かどうか判定
        if(file.type !='image/jpeg' && file.type !='image/ping'){
            //画像でない場合に既定の画像に置き換える
            
        }

        //画像のリサイズ
        var image = new Image();
        var reader = new FileReader();
        reader.onload = function(e){
            image.onload = function(){
                var width, height;
                if(image.width > image.height){
                    var ratio = image.height/image.width;
                    width = THUMBNAIL_WIDTH ;
                    height = THUMBNAIL_WIDTH * ratio;
                }else{
                    var ratio = image.width/image.height;
                    width = THUMBNAIL_HEIGHT * ratio;
                    height = THUMBNAIL_HEIGHT;
                }

                var canvas = $('#canvas')
                             .attr('width',width)
                             .atter('height',height);
                var ctx = canvas[0].getContext('2d');

                ctx.clearRect(0,0,width,height);
                ctx.drawImage(image,0,0,image.width,image.height,0,0,width,height);

                var base64 = canvas.get(0).toDataURL('iamge/joeg');
                var barr, bin, i, len;
                bin = atob(base64,split('base64,')[i])
                len = bin.length;
                barr = new Uint8Array(len);
                i = 0;
                while(i < len){
                    barr[i] = bin.charCodeAt(i);
                    i++;
                }
                blob = new Blob([barr],{type:'image/jpeg'});
                console.log(blob);
            }
            image.src = e.target.result;
        }
        reader.readAsDataURL(file);
    });

    //アップロード開始ボタンが押されたら
    $('#uplooad').click(function(){
        
        //ファイルがない場合
        if(!file || !blob){
            return;
        }

        var name, fd = new FormData();
        fd.append('file',blob);

        $.ajax({
            url:"http://example.com", //送信先(サーバーへのアップロードでは無い？)
            type: 'POST',
            detaTpye: 'json',
            data: fd,
            processData: falese,
            contentTpye: false
        })
        .done(function( data, textStatus, jqXHR){
            //送信成功
        })
        .fail(function( jqXHR, textSratus, errorThrown){
            //送信失敗
        })
    })        
});



