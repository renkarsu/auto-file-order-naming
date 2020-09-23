//upload.jsを参考にしていないので後で見直す

$(function(){
    let file = null;
    let blod = null;
    //画像リサイズ後の縦横の長さの最大値
    //canvas領域の大きさによって決める。分割数は適当
    const THUMBNAIL_WIDTH = $('#layoutCanvas').Width / 5;
    const THUMBNAIL_HEIGHT = $('#layoutCanvas').height / 2;

    $('.tile').display(none);
    $('#layoutCanvas').display(block);

    //ファイルが選択されたとき
    $('#FileStorage').change(function(){
        file = $(this).prop('files')[0];

        let image = new Image();
        let reader = new FileReader();

        //選択されたファイルが画像かどうか判定
        if(file.type !='image/jpeg' && file.type !='image/ping'){
            //画像でない場合に既定の画像に置き換える
            image.src = "example.jpg";
        }

        //画像のリサイズ
        reader.onload = function(e){
            image.onload = function(){
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

                var canvas = $('#layoutCanvas')
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
    $('#InputAddOn-upload').click(function(){
        
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
            $('#layoutCanvas').display(none);
            $('.tile').display(grid);
        })
    })        
});



