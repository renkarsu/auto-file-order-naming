<?php
    //ファイルの名前を変える

    //50個までの想定
    for($i=0,$i<50,$i++){

        //ファイルが無くなったら終了
        //upname[i]はmain.htmlで書いていたもの　あっているか不明
        if(file_exists("upname[i]")){
            print '全てのファイルを読み込みました';
            break;
        }else{

            //ファイル名を取得
            $fileinfo = "upname[i]";
    
            //ファイル名（拡張子を含まない）を取得 （使わなければ後で消す)
            $filename = pathinfo($pathinfo, PATHINFO_FILENAME);
            //拡張子（ドットを含まない）
            $extension = pathinfo($pathinfo, PATHINFO_EXTENSION);

            //ファイル名を変更する 
            if(rename($fileinfo , $newname $i"."$extension))
            {
                echo "変更できました"
            }
            else{
                echo"失敗しました"
            };
            
            //初期化
            $fileinfo = NULL;
            $filename = NULL;
            $extension = NULL;
        }
    };

    

?>