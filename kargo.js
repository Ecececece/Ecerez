const currentKargoNos = localStorage.getItem("kargoNos") ?? "[]";
const kargoNos = JSON.parse(currentKargoNos);

const kargoButton = document.getElementById("kargokontrol");
const kargoNo = document.getElementById("kargono");

kargoButton.addEventListener("click", function(){
    kargoNos.forEach(kargoData => {
        kargoUrunGorunum(kargoData);
    });
})

function kargoUrunGorunum(kargoData){
    if(kargoData.kargono === kargoNo.value){
        console.log("deneme");
    }
    else if(kargoData.kargono != kargoNo.value){
        alert("Lütfen Kargo Nonuzun Doğru Olduğundan Emin Olun.");
    }
}