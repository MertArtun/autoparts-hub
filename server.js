// Node.js/Express ile ASIN yönlendirme sunucusu
// Kullanım: npm install express && node server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Statik dosyalar için public klasörü
app.use(express.static(path.join(__dirname)));

// ASIN yönlendirme route'u
app.get('/asin/:asin', (req, res) => {
    const asin = req.params.asin;
    
    // ASIN formatını kontrol et (opsiyonel)
    if (!/^[A-Z0-9]+$/.test(asin)) {
        return res.status(400).send('Invalid ASIN format');
    }
    
    const amazonUrl = `https://www.amazon.com/dp/${asin}?tag=your-tag-20`;
    
    // 302 redirect
    res.redirect(302, amazonUrl);
});

// Ana sayfa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Local development
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`Test: http://localhost:${PORT}/asin/B0F36VDVG1`);
    });
}

// Export for Vercel
module.exports = app;
