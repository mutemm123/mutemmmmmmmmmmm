// *** ÖNEMLİ KISIM: Ayarları Buradan Yapın! ***
// 1. DOĞRU ADI BURAYA YAZIN
const DOGRU_AD = "MUTEBER KARAASLAN SÜLÜK"; 

// 2. TÜM HTML ELEMENTLERİNİ SEÇ
const sakınTıklamaButonu = document.getElementById('sakın-tıklama-butonu');
const isimFormu = document.getElementById('isim-formu');
const sevgiliAdiInput = document.getElementById('sevgiliAdi');
const girisButonu = document.getElementById('girisButonu');
const hataMesaji = document.getElementById('hataMesaji');
const girisEkraniContainer = document.getElementById('giris-ekrani-container');
const paragrafEkrani = document.getElementById('paragraf-ekrani');


// --- AŞAMA I: SAKIN TIKLAMA BUTONU ---
sakınTıklamaButonu.addEventListener('click', function() {
    // Butonu gizle ve formu yavaşça göster
    sakınTıklamaButonu.classList.add('hidden');
    isimFormu.classList.remove('hidden');
});

// --- AŞAMA I.5: İSİM KONTROLÜ ---
girisButonu.addEventListener('click', function() {
    // Girişi büyük harfe çevirerek karşılaştır (Küçük/büyük harf duyarlılığını kaldırır)
    const girilenAd = sevgiliAdiInput.value.trim().toUpperCase();
    const dogruAdBuyuk = DOGRU_AD.trim().toUpperCase();

    if (girilenAd === dogruAdBuyuk) {
        // Ad doğruysa, Aşama II'ye geçiş animasyonu başlat
        girisEkraniContainer.style.opacity = '0';
        
        setTimeout(() => {
            girisEkraniContainer.classList.add('hidden'); // Girişi gizle

            // Paragraf ekranını göster
            paragrafEkrani.classList.remove('hidden'); 
            
            // Paragraf ekranını yavaşça görünür yap
            setTimeout(() => {
                paragrafEkrani.classList.add('visible'); 
            }, 50); 
            
        }, 500); 
        
    } else {
        // Hata mesajı göster
        hataMesaji.textContent = `Bu mesaj sadece ${DOGRU_AD.split(' ')[0]} için ayrılmıştır.`;
        hataMesaji.classList.remove('hidden');
    }
});
