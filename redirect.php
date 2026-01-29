<?php
// PHP ile ASIN yönlendirme
// Bu dosyayı sunucunuzda kullanmak için:
// 1. .htaccess ile tüm /asin/* isteklerini bu dosyaya yönlendirin
// 2. Veya doğrudan /asin/redirect.php?asin=B0F36VDVG1 şeklinde kullanın

// URL'den ASIN'i al
$requestUri = $_SERVER['REQUEST_URI'];

// /asin/ASIN formatını kontrol et
if (preg_match('#^/asin/([A-Z0-9]+)#', $requestUri, $matches)) {
    $asin = $matches[1];
    $amazonUrl = "https://www.amazon.com/dp/" . $asin . "?tag=MYTAG-20";
    
    // 302 yönlendirme yap
    header("Location: " . $amazonUrl, true, 302);
    exit();
}

// ASIN bulunamadıysa ana sayfaya yönlendir
header("Location: /", true, 302);
exit();
?>
