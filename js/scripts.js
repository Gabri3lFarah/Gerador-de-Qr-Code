const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img"); // Corrigido o seletor para incluir #

// Função para gerar o QR code
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
    console.log(qrCodeInputValue);
    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
       container.classList.add("active") 
       qrCodeBtn.innerText = "Código Criado!";
    })
}

// Evento de clique no botão para gerar o QR code
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});
//Evento a partir do botao ENTER
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        generateQrCode()
    }
});

//Limpar area do QR code
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active") 
       qrCodeBtn.innerText = "Gerar QR Code";
    }
}) 

