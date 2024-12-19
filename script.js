const urunler = [
    {
        urunisim: "Ala Çekirdeği",
        urunidisim: "ala-cekirdegi",
        urunfotograf: "./urunimg/alacekirdegi.jpg",
        gramfiyat: 0.1,
        kategori: "Çekirdek"
    },
    {
        urunisim: "Dakota Çekirdeği",
        urunidisim: "dakota-cekirdegi",
        urunfotograf: "./urunimg/dakotacekirdegi.jpg",
        gramfiyat: 0.1,
        kategori: "Çekirdek"
    },
    {
        urunisim: "Çekirdek İçi",
        urunidisim: "cekirdek-ici",
        urunfotograf: "./urunimg/cekirdekici.jpg",
        gramfiyat: 0.075,
        kategori: "Çekirdek"
    },
    {
        urunisim: "Kabak Çekirdeği",
        urunidisim: "kabak-cekirdegi",
        urunfotograf: "./urunimg/kabakcekirdegi.jpg",
        gramfiyat: 0.225,
        kategori: "Çekirdek"
    },
    {
        urunisim: "Kabak Çekirdeği İçi",
        urunidisim: "kabak-cekirdegi-ici",
        urunfotograf: "./urunimg/kabakcekirdegiici.jpg",
        gramfiyat: 0.3,
        kategori: "Çekirdek"
    },
    {
        urunisim: "Kabuklu Fıstık",
        urunidisim: "kabuklu-fistik",
        urunfotograf: "./urunimg/kabuklufistik.jpg",
        gramfiyat: 0.09,
        kategori: "Fıstık"
    },
    {
        urunisim: "Tuzsuz Fıstık",
        urunidisim: "tuzsuz-fistik",
        urunfotograf: "./urunimg/tuzsuzfistik.jpg",
        gramfiyat: 0.08,
        kategori: "Fıstık"
    },
    {
        urunisim: "Tuzlu Fıstık",
        urunidisim: "tuzlu-fistik",
        urunfotograf: "./urunimg/tuzlufistik.jpg",
        gramfiyat: 0.11,
        kategori: "Fıstık"
    },
    {
        urunisim: "Soslu Fıstık",
        urunidisim: "soslu-fistik",
        urunfotograf: "./urunimg/soslufistik.jpg",
        gramfiyat: 0.135,
        kategori: "Fıstık"
    },
    {
        urunisim: "Cips Fıstık",
        urunidisim: "cips-fistik",
        urunfotograf: "./urunimg/cipsfistik.jpg",
        gramfiyat: 0.1,
        kategori: "Fıstık"
    },
    {
        urunisim: "Ballı Susamlı Fıstık",
        urunidisim: "balli-susamli-fistik",
        urunfotograf: "./urunimg/ballisusamlifistik.jpg",
        gramfiyat: 0.16,
        kategori: "Fıstık"
    },
    {
        urunisim: "Kaju",
        urunidisim: "kaju",
        urunfotograf: "./urunimg/kaju.jpg",
        gramfiyat: 0.23,
        kategori: "Fıstık"
    },
    {
        urunisim: "Antep Fıstığı",
        urunidisim: "antep-fistigi",
        urunfotograf: "./urunimg/antepfistigi.jpg",
        gramfiyat: 0.35,
        kategori: "Fıstık"
    },
    {
        urunisim: "Antep Fıstığı İçi",
        urunidisim: "antep-fistigi-ici",
        urunfotograf: "./urunimg/antepfistigiici.jpg",
        gramfiyat: 0.3,
        kategori: "Fıstık"
    },
    {
        urunisim: "Pirinç Antep Fıstığı",
        urunidisim: "pirinc-antep-fistigi",
        urunfotograf: "./urunimg/pirincantepfistigi.jpg",
        gramfiyat: 0.275,
        kategori: "Fıstık"
    },
    {
        urunisim: "File Antep Fıstığı",
        urunidisim: "file-antep-fistigi",
        urunfotograf: "./urunimg/fileantepfistigi.jpg",
        gramfiyat: 0.285,
        kategori: "Fıstık"
    },
    {
        urunisim: "Kabuklu Fındık",
        urunidisim: "kabuklu-findik",
        urunfotograf: "./urunimg/kabuklufindik.jpg",
        gramfiyat: 0.15,
        kategori: "Fındık"
    },
    {
        urunisim: "Çiğ Fındık",
        urunidisim: "cig-findik",
        urunfotograf: "./urunimg/cigfindik.jpg",
        gramfiyat: 0.23,
        kategori: "Fındık"
    },
    {
        urunisim: "Fındık İçi",
        urunidisim: "findik-ici",
        urunfotograf: "./urunimg/findikici.jpg",
        gramfiyat: 0.2,
        kategori: "Fındık"
    },
    {
        urunisim: "File Fındık",
        urunidisim: "file-findik",
        urunfotograf: "./urunimg/filefindik.jpg",
        gramfiyat: 0.185,
        kategori: "Fındık"
    },
    {
        urunisim: "Çiğ Badem",
        urunidisim: "cig-badem",
        urunfotograf: "./urunimg/cigbadem.jpg",
        gramfiyat: 0.125,
        kategori: "Badem"
    },
    {
        urunisim: "Kavrulmuş Badem",
        urunidisim: "kavrulmus-badem",
        urunfotograf: "./urunimg/kavrulmusbadem.jpg",
        gramfiyat: 0.135,
        kategori: "Badem"
    },
    {
        urunisim: "File Badem",
        urunidisim: "file-badem",
        urunfotograf: "./urunimg/filebadem.jpg",
        gramfiyat: 0.16,
        kategori: "Badem"
    },
    {
        urunisim: "Soslu Mısır",
        urunidisim: "soslu-misir",
        urunfotograf: "./urunimg/soslumisir.jpg",
        gramfiyat: 0.09,
        kategori: "Mısır"
    },
    {
        urunisim: "Patlatmalık Mısır",
        urunidisim: "patlatmalik-misir",
        urunfotograf: "./urunimg/patlatmalikmisir.jpg",
        gramfiyat: 0.04,
        kategori: "Mısır"
    },
    {
        urunisim: "Sarı Leblebi",
        urunidisim: "sari-leblebi",
        urunfotograf: "./urunimg/sarileblebi.jpg",
        gramfiyat: 0.1,
        kategori: "Leblebi"
    },
    {
        urunisim: "Sarı Tuzlu Leblebi",
        urunidisim: "sari-tuzlu-leblebi",
        urunfotograf: "./urunimg/sarituzluleblebi.jpg",
        gramfiyat: 0.13,
        kategori: "Leblebi"
    },
    {
        urunisim: "Beyaz Leblebi",
        urunidisim: "beyaz-leblebi",
        urunfotograf: "./urunimg/beyazleblebi.jpg",
        gramfiyat: 0.2,
        kategori: "Leblebi"
    },
    {
        urunisim: "Çıtır Leblebi",
        urunidisim: "citir-leblebi",
        urunfotograf: "./urunimg/citirleblebi.jpg",
        gramfiyat: 0.11,
        kategori: "Leblebi"
    },
    {
        urunisim: "Şekerli Leblebi",
        urunidisim: "sekerli-leblebi",
        urunfotograf: "./urunimg/sekerlileblebi.jpg",
        gramfiyat: 0.085,
        kategori: "Leblebi"
    },
    {
        urunisim: "Kuru Üzüm",
        urunidisim: "kuru-uzum",
        urunfotograf: "./urunimg/kuruuzum.jpg",
        gramfiyat: 0.14,
        kategori: "Kuru Meyve"
    },
];

const urunlerDiv = document.getElementById("urunler");
var satinAl;

var secilikategori = "";
const kategorilerDiv = document.getElementById("kategoriler");
const TumKategoriler = new Set(urunler.map(urun => urun.kategori));
const KategorilerList = new Array("Tümü", ...TumKategoriler);

const urungramMin = 10;
const urungramMax = 1000000;
var gramInput  = "";

var urunIsım;
var urunidIsım;
var urunFiyat;
var urunnetfiyat;

urunler.forEach(urunData => {
    urunlerFunc(urunData);
});

var deneme = 0;

KategorilerList.forEach(kategori => {
    const kategoriButton = document.createElement("div");
    kategoriButton.className = "just-center align-center urun-kategori-button";
    kategoriButton.textContent = kategori;
    kategorilerDiv.appendChild(kategoriButton);
    
    kategoriButton.addEventListener("click", function() {
        urunlerDiv.innerHTML = '';
        document.body.scrollTop = 0;

        urunler.forEach(urunData => {
            if(urunData.kategori == kategori){
                urunlerFunc(urunData);
            }else if(kategori == "Tümü"){
                urunlerFunc(urunData);
            }
        })
    });
});

function urunlerFunc(urunData) {
    const urunDiv = document.createElement("div");
    urunDiv.className = "align-center urun";
    urunlerDiv.appendChild(urunDiv);

    const urunImg = document.createElement("img");
    urunImg.src = urunData.urunfotograf;
    urunImg.className = "urun-image";
    urunDiv.appendChild(urunImg);

    const urunIcerik = document.createElement("div");
    urunIcerik.style.width = "100%";
    urunIcerik.style.display = "flex";
    urunIcerik.style.flexDirection = "column";
    urunDiv.appendChild(urunIcerik);

    const urunText = document.createElement("div");
    urunText.className = "just-center align-center urun-isim";
    urunText.append(urunData.urunisim);
    urunIcerik.appendChild(urunText);

    const urunGramaj = document.createElement("div");
    urunGramaj.className = "just-center";
    urunGramaj.style.width = "100%";
    urunGramaj.style.flexDirection = "row";
    urunGramaj.style.marginTop = "20px";
    urunIcerik.appendChild(urunGramaj);

    const urunGram = document.createElement("input");
    urunGram.className = "urun-gram-input";
    urunGram.id = urunData.urunidisim;
    urunGram.type = "number";
    urunGram.min = urungramMin;
    urunGram.max = urungramMax;
    urunGram.addEventListener("input", degerkontrol);
    urunGramaj.appendChild(urunGram);

    const urunGramText = document.createElement("div");
    urunGramText.className = "just-center align-center";
    urunGramText.style.fontSize = "24pt";
    urunGramText.append("Gram");
    urunGramaj.appendChild(urunGramText);

    const urunButtonIcerik = document.createElement("div");
    urunButtonIcerik.className = "just-center";
    urunButtonIcerik.style.width = "100%";
    urunButtonIcerik.style.marginTop = "10px";
    urunIcerik.appendChild(urunButtonIcerik);

    satinAl = document.createElement("div");
    satinAl.className = "just-center";
    satinAl.style.width = "100%";
    satinAl.style.flexDirection = "row"
    urunIcerik.appendChild(satinAl);

    const urunFiyat = document.createElement("div");
    urunFiyat.className = "just-center align-center";
    urunFiyat.style.marginRight = "10px";
    urunFiyat.style.fontSize = "24pt";
    urunFiyat.id = urunData.urunidisim + "-fiyat";
    urunFiyat.append("0 TL");
    satinAl.appendChild(urunFiyat);

    const urunButton = document.createElement("div");
    urunButton.className = "urun-button";
    urunButton.id = urunData.urunidisim + "-sepet";
    urunButton.append("Sepete Ekle");
    satinAl.appendChild(urunButton)
    
    urunButton.addEventListener("click", sepetekle)
}

function sepetekle(){
    var sepetID = this.id;
    var gramInputID = sepetID.substring(0, sepetID.indexOf("-sepet"));

    if (gramInput == "")alert("Gram Alanı Boş Bırakılamaz!");
    else{
        alert("Ürün Sepetinize Başarıyla Eklendi!");
        const eklenenurun = {
            "urunisim": urunIsım,
            "urunidisim": urunidIsım,
            "urungram": gramInput, 
            "urunfiyat": urunnetfiyat
        }

        const currentSepet = localStorage.getItem("sepet") ?? "[]";
        const sepet = JSON.parse(currentSepet);

        sepet.push(eklenenurun);
        const sonSepet = JSON.stringify(sepet);
        localStorage.setItem("sepet", sonSepet);

        document.getElementById(gramInputID).value = "";
        urunFiyat.innerText = "0 TL";
    }
}

function degerkontrol() {
    const urunId = this.id;
    gramInput = this.value;

    urunler.forEach(urunData => {
        if(urunData.urunidisim == urunId){
            urunIsım = urunData.urunisim;
            urunidIsım = urunData.urunidisim;
            urunnetfiyat = gramInput * urunData.gramfiyat;
            urunnetfiyat = parseInt(urunnetfiyat);
            
            urunFiyat = document.getElementById(urunData.urunidisim + "-fiyat");
            urunFiyat.innerText = urunnetfiyat + " TL";
        }
    });
}