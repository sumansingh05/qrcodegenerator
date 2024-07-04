const input = document.querySelector("#input");
const image = document.querySelector("#img");
const btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{

    const inputValue = input.value;
    if(!inputValue){
        alert("please enter a valid URL");
        return;
    }else{
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        image.alt = `QR code for ${inputValue}`;
    }
})
