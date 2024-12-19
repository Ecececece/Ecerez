const currentSepet = localStorage.getItem("sepet") ?? "[]";
const sepet = JSON.parse(currentSepet);

const sepeturunlerDiv = document.getElementById("sepet-urunler");
const sepetDiv = document.getElementById("sepet");

const kargosecimInput = document.getElementById("kargo-firma");
var kargofiyat = 0;

const urunfiyatlarDiv = document.getElementById("urunlerin-fiyat");
var urunfiyatlar = 0;

const kdvDiv = document.getElementById("kdv");
var kdv = 0;

const toplamfiyatDiv = document.getElementById("toplam-fiyat");
var toplamfiyat = 0;

const kontrolButton = document.getElementById("kontrolet");
const toplamfiyatText = document.getElementById("toplam-fiyat");

const sepetonay = document.getElementById("sepetonay")
var secilenkargoisim = "";

if(sepet.length === 0){
    kargosecimInput.disabled = true;
    sepetonay.disabled = true;

    sepetDiv.className = "just-center align-center sepet"
    const sepetBos = document.createElement("div");
    sepetBos.className = "just-center align-center sepet-bos";
    sepetBos.append("Sepetiniz Boş.");
    sepetDiv.appendChild(sepetBos);
}
else{
    sepet.forEach(sepetData => {
        sepetUrun(sepetData);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    fiyathesap();
});

sepetonay.addEventListener("click", function(){
    sepetonaylama();
})

function sepetUrun(sepetData){
    const sepetUrun = document.createElement("div");
    sepetUrun.id = sepetData.urunidisim;
    sepetUrun.className = "sepet-urun align-center";
    sepeturunlerDiv.appendChild(sepetUrun);

    const imgUrl = "./urunimg/" + sepetData.urunidisim.replace(/-/g, '') + ".jpg";
    const sepetUrunImg = document.createElement("img");
    sepetUrunImg.src = imgUrl;
    sepetUrunImg.className = "sepet-urun-image";
    sepetUrun.appendChild(sepetUrunImg);

    const sepetUrunIcerik = document.createElement("div");
    sepetUrunIcerik.style.width = "100%";
    sepetUrunIcerik.style.display = "flex";
    sepetUrunIcerik.style.flexDirection = "column";
    sepetUrun.appendChild(sepetUrunIcerik);
    
    const sepetUrunIsim = document.createElement("div");
    sepetUrunIsim.className = "sepet-urun-isim";
    sepetUrunIsim.append(sepetData.urunisim);
    sepetUrunIcerik.appendChild(sepetUrunIsim);

    const sepetUrunGramaj = document.createElement("div");
    sepetUrunGramaj.className = "just-center sepet-urun-gramaj";
    sepetUrunIcerik.appendChild(sepetUrunGramaj);

    const sepetUrunGram = document.createElement("div");
    sepetUrunGram.className = "sepet-urun-gram";
    sepetUrunGram.append(sepetData.urungram);
    sepetUrunGramaj.appendChild(sepetUrunGram);

    const gramYazi = document.createElement ("div");
    gramYazi.append("Gram");
    sepetUrunGramaj.appendChild(gramYazi);

    const sepetUrunFiyatSil = document.createElement("div");
    sepetUrunFiyatSil.className = "just-center";
    sepetUrunFiyatSil.style.width = "100%";
    sepetUrunFiyatSil.style.flexDirection = "row";
    sepetUrunFiyatSil.style.justifyContent = "space-between";
    sepetUrunFiyatSil.style.marginLeft = 
    sepetUrunIcerik.appendChild(sepetUrunFiyatSil);

    const sepetUrunFiyat = document.createElement("div");
    sepetUrunFiyat.className = "sepet-urun-fiyat";
    sepetUrunFiyat.append(sepetData.urunfiyat + " TL");
    sepetUrunFiyatSil.appendChild(sepetUrunFiyat);

    const sepetUrunSil = document.createElement("div");
    sepetUrunSil.className = "delete-icon";
    sepetUrunFiyatSil.appendChild(sepetUrunSil);

    const silSvg = document.createElement("object");
    silSvg.data = "./svg/delete.svg";
    silSvg.style.pointerEvents = "none";
    sepetUrunSil.appendChild(silSvg);

    sepetUrunSil.addEventListener("click", function() {
        urunsil(sepetData, sepeturunlerDiv);
    })

    kargosecimInput.addEventListener("change", function(){
        kargofiyat = 0;
        if(kargosecimInput.value == "ucretsiz"){kargofiyat = 0;}
        else if(kargosecimInput.value == "mng"){kargofiyat = 15;}
        else if(kargosecimInput.value == "yurtici"){kargofiyat = 22;}
        else if(kargosecimInput.value == "ptt"){kargofiyat = 35;}
        fiyathesap();
    });
}

function urunsil(sepetData, sepeturunlerDiv) {
    const currentSepet = localStorage.getItem("sepet") ?? "[]";
    const sepet = JSON.parse(currentSepet);
    const urunindex = sepet.findIndex(urun => urun.urunidisim === sepetData.urunidisim);
    sepet.splice(urunindex, 1);
    const sonSepet = JSON.stringify(sepet);
    localStorage.setItem("sepet", sonSepet);

    sepeturunlerDiv.innerHTML = '';
    sepet.forEach(sepetData => {
        sepetUrun(sepetData);
    });

    fiyathesap();
    location.reload();
}

function fiyathesap() {
    urunfiyatlar = 0;
    sepet.forEach(sepetData => {
        urunfiyatlar += parseFloat(sepetData.urunfiyat);
    });

    urunfiyatlarDiv.innerText = "Sepet Fiyatı : " + urunfiyatlar + " TL + " + kargofiyat + " TL";

    kdv = urunfiyatlar * 0.01;
    kdv = parseInt(kdv);
    kdvDiv.innerText = "KDV(%1) : " + kdv + " TL";

    toplamfiyat = urunfiyatlar + kdv + kargofiyat;

    toplamfiyatText.innerText = toplamfiyat + " TL";
}

function sepetonaylama() {
    localStorage.clear("kargoNos")
    localStorage.setItem("sepet", "[]");
    sepeturunlerDiv.innerHTML = '';
    fiyathesap();

    var no = Math.floor(Math.random() * 10000);
    var kargono = true;
    while(kargono){
        if(no.length != 5) no = "0" + no;
        else{
            const currentKargoNo = localStorage.getItem("kargoNos") ?? "[]";
            const kargoNos = JSON.parse(currentKargoNo);
            kargoNos.push({"kargono": no});
            localStorage.setItem("kargoNos", JSON.stringify(kargoNos));

            sepet.forEach(sepetData => {
                kargoNos.push(sepetData);
            });
            localStorage.setItem("kargoNos", JSON.stringify(kargoNos));

            kargono = false;
        }
    }
    alert("Sepetiniz Başarıyla Onaylandı! Kargo Nonuz : Ecerez" + no);

    location.reload();
}
