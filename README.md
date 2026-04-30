# OTURK Budama Testereleri — Kurumsal Web Sitesi

Bursa Osmangazi'de CK75 Alman çeliğinden budama testeresi üreten **OTURK** firmasının kurumsal web sitesi. Statik HTML + CSS + bir parça vanilla JavaScript ile hazırlandı.

## İçerik

- **`index.html`** — Anasayfa: hero, ürün özellikleri (Orta / Kalın / İnce Diş), teknoloji, neden OTURK, model karşılaştırma, hakkımızda, iletişim
- **`katalog.html`** — Detaylı ürün kataloğu: 6 SKU (3 diş tipi × saplı/sapsız varyantları), teknik özellikler, sipariş bilgileri
- **`styles.css`** — Ana stil dosyası (Apple Inter tipografi, kurumsal `#134286` mavi)
- **`katalog.css`** — Katalog sayfasına özel stiller
- **`script.js`** — Mobil menü, sticky header scroll state
- **`images/`** — Ürün fotoğrafları, logo varyantları (mavi / siyah / beyaz)

## Yerel önizleme

```bash
# Repo kökünde
python3 -m http.server 8000
# Tarayıcıda: http://localhost:8000
```

Veya VS Code Live Server eklentisi ile.

## Deployment

Site tamamen statik. Aşağıdaki seçeneklerden herhangi biriyle yayınlanabilir:

### GitHub Pages
1. Repo'yu GitHub'a push et
2. Settings → Pages → Source: `main` branch, root klasör
3. `https://<kullanıcı>.github.io/<repo>/` adresinde yayında

### Netlify (önerilen)
1. [netlify.com](https://netlify.com) hesabı aç
2. "Add new site" → "Import from Git" → repo'yu seç
3. Build command boş bırak, publish directory: `.`
4. Dakikalar içinde canlı

### Vercel
1. [vercel.com](https://vercel.com) → "New Project" → repo seç
2. Framework: Other (statik)
3. Build command yok

### Manuel hosting
`.html`, `.css`, `.js` ve `images/` klasörünü FTP ile sunucuya yükle.

## Kurumsal kimlik

- **Marka rengi:** `#134286` (royal mavi — kartvizit ve logodan alındı)
- **Tipografi:** Inter (Google Fonts)
- **Logo:** `images/logo/` klasöründe mavi, beyaz ve siyah varyantları

## İletişim & Güncelleme

- Sipariş Hattı: `0546 836 07 16`
- Şirket Hattı: `0224 253 43 30`
- Adres: Gülbahçe Mah. 1. Bekirdede Sk. No: 7, Osmangazi / Bursa
- Instagram: [@oturktestere](https://www.instagram.com/oturktestere/)
- Facebook: [OTurk Budama Testereleri](https://www.facebook.com/p/OTurk-Budama-Testereleri-61565151733691/)

---

© OTURK Budama Testereleri. Tüm hakları saklıdır.
