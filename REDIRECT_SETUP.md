# ASIN Yönlendirme Sistemi Kurulum Rehberi

Bu klasörde 4 farklı yönlendirme çözümü bulunmaktadır. Sunucu tipinize göre uygun olanı seçin.

## ⚙️ Hangi Yöntemi Kullanmalıyım?

### 1. Apache Sunucu (.htaccess) ✅ EN KOLAY
**Dosya:** `.htaccess`

**Ne zaman kullanılır:**
- Shared hosting kullanıyorsanız (cPanel, Plesk vb.)
- WordPress hosting
- Apache web sunucusu

**Kurulum:**
1. `.htaccess` dosyası zaten hazır
2. **ÖNEMLİ:** İçindeki `autopartshub2-20` kısmını kendi Amazon affiliate tag'iniz ile değiştirin
3. Dosyayı web sitenizin root klasörüne yükleyin
4. Test edin: `https://ornek.com/asin/B0F36VDVG1`

**Avantajları:**
- Kod yazmadan çalışır
- Ekstra kurulum gerektirmez
- Çok hızlı

---

### 2. Nginx Sunucu
**Dosya:** `nginx.conf`

**Ne zaman kullanılır:**
- VPS veya dedicated sunucu kullanıyorsanız
- Nginx web sunucusu çalıştırıyorsanız

**Kurulum:**
1. `nginx.conf` dosyasındaki konfigürasyonu kopyalayın
2. **ÖNEMLİ:** `autopartshub2-20` kısmını kendi tag'iniz ile değiştirin
3. Konfigürasyonu nginx config dosyanıza ekleyin (genellikle `/etc/nginx/sites-available/`)
4. Nginx'i yeniden başlatın: `sudo systemctl reload nginx`
5. Test edin: `https://ornek.com/asin/B0F36VDVG1`

---

### 3. PHP Script
**Dosya:** `redirect.php`

**Ne zaman kullanılır:**
- Apache'niz .htaccess desteklemiyorsa
- PHP desteği olan herhangi bir sunucu

**Kurulum:**

#### Seçenek A: .htaccess ile birlikte (Önerilen)
1. `.htaccess` dosyanızı aşağıdaki içerik ile güncelleyin:
```apache
RewriteEngine On
RewriteRule ^asin/([A-Z0-9]+)$ /redirect.php [L,QSA]
```

2. `redirect.php` dosyasında `autopartshub2-20` kısmını değiştirin
3. Her iki dosyayı da sunucuya yükleyin

#### Seçenek B: Doğrudan kullanım
- URL şu şekilde olur: `https://ornek.com/redirect.php?asin=B0F36VDVG1`

---

### 4. Node.js/Express Sunucu
**Dosyalar:** `server.js`, `package.json`

**Ne zaman kullanılır:**
- Kendi VPS/cloud sunucunuz var
- Node.js çalıştırabiliyorsanız
- Modern hosting (Vercel, Heroku, Railway vb.)

**Kurulum:**

1. **ÖNEMLİ:** `server.js` dosyasında `autopartshub2-20` kısmını değiştirin

2. Terminalde şu komutları çalıştırın:
```bash
npm install
npm start
```

3. Sunucu çalışır duruma gelir (varsayılan: port 3000)

4. Production için PM2 kullanın:
```bash
npm install -g pm2
pm2 start server.js
pm2 save
pm2 startup
```

5. Nginx ile reverse proxy kurabilirsiniz

---

## 🧪 Test Etme

Kurulumdan sonra tarayıcınızda test edin:

```
https://ornek.com/asin/B0F36VDVG1
```

Başarılı olursa şu adrese yönlendirilmelisiniz:
```
https://www.amazon.com/dp/B0F36VDVG1?tag=autopartshub2-20
```

---

## ⚠️ ÖNEMLİ HATIRLATMALAR

1. **autopartshub2-20** yazan TÜM yerleri kendi Amazon Associates TAG'inizle değiştirin
2. Domain'inizin (ornek.com) DNS ayarlarının doğru yapılandırıldığından emin olun
3. HTTPS kullanıyorsanız SSL sertifikanızın geçerli olduğundan emin olun

---

## 📝 Örnek Kullanım Senaryoları

Blog yazınızda:
```html
<a href="https://ornek.com/asin/B0F36VDVG1">Bu harika ürüne göz atın</a>
```

Sosyal medyada:
```
Bu otomobil parçasını tavsiye ediyorum: https://ornek.com/asin/B0F36VDVG1
```

---

## 🔧 Sorun Giderme

**404 Hatası:** .htaccess veya sunucu konfigürasyonunuz çalışmıyor olabilir
- Apache'de mod_rewrite modülünün aktif olduğundan emin olun
- .htaccess dosyasının izinlerini kontrol edin (644)

**Yönlendirme Çalışmıyor:**
- Tarayıcı cache'ini temizleyin
- Sunucu loglarını kontrol edin
- ASIN formatının doğru olduğundan emin olun (büyük harf ve rakamlar)

**503 Service Unavailable:**
- Node.js sunucunuz çalışmıyor olabilir
- PM2 ile sunucu durumunu kontrol edin: `pm2 status`
