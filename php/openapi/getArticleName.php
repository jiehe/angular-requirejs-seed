<?php
$dir = "../../app/tpl/article/";  //要获取的目录
// "********** 获取目录下所有文件和文件夹 ***********<hr/>";
//先判断指定的路径是不是一个文件夹
if (is_dir($dir)){
    if ($dh = opendir($dir)){
        while (($file = readdir($dh))!= false){
            //文件名的全路径 包含文件名
            $filePath = $dir.$file;
            $content = file_get_contents($filePath); //读取文件中的内容
            echo $content;
            //获取文件修改时间
            $fmt = filemtime($filePath);
            echo "<span style='color:#666'>(".date("Y-m-d H:i:s",$fmt).")</span> ".$filePath."<br/>";
        }
        closedir($dh);
    }
}