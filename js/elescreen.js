window.onload = init;
function init(){
    document.querySelector(".emergente .menor").addEventListener("click", informe);
    document.querySelector(".emergente .mayor").addEventListener("click", qrcode);

    function informe(){
        window.open("./informe.html");
    }

    function qrcode(){
        window.open("./qrcode.html");
    }
    
        
    
        
    
}