<?php

    //50個までの想定
    for($i=0,$i<50,$i++){

        //ファイルが無くなったら終了
        //upname[i]はmain.htmlで書いていたもの　あっているか不明
        if(file_exists("upname[i]")){
            print '全てのファイルを読み込みました';
            break;
        }else{

            //ファイル名を取得
            $fileinfo[i] = "upname[i]";
    
            //ファイル名（拡張子を含まない）を取得 （使わなければ後で消す)
            $filename[i] = pathinfo($pathinfo[i], PATHINFO_FILENAME);
            //拡張子（ドットを含まない）
            $extension[i] = pathinfo($pathinfo[i], PATHINFO_EXTENSION);

            //ファイル名を変更する 
            rename($fileinfo[i] , $newname $i"."$extension)
            {
                echo "変更できました"
            }
            else{
                echo"失敗しました"
            };
        }
    };

    

?>