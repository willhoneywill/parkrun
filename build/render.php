<?php

$will = "https://www.parkrun.org.uk/parkrunner/896578/all/";
$secil = "https://www.parkrun.org.uk/parkrunner/7133832/all/";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $will);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');
$html = curl_exec($ch);
curl_close($ch); 


$start = stripos($html, '<table');
$end = stripos($html, '#comments', $offset = $start);
$length = $end - $start;

$htmlSection = substr($html, $start, $length);


$tables = explode("</table>", $htmlSection);

$allResults = $tables[2];

$allResults = str_replace('<div>', '', $allResults);
$allResults = str_replace('</div>', '', $allResults);
$allResults = str_replace('<br/>', '', $allResults);
$allResults .= "</table>";



 ?>

<div id="weberino-parkrun"></div>

<div id="parkrun-results">
    <?php
        echo $allResults;   
    ?>
</div>
    
   

