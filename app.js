let deposit = Number(localStorage.getItem("deposit")) || 431200;
let buy = Number(localStorage.getItem("buy")) || 288500;
let sale = Number(localStorage.getItem("sale")) || 140850;
let withdrawal = Number(localStorage.getItem("withdrawal")) || 261741.35;

function format(value){
    return "₹" + value.toLocaleString("en-IN", {
        maximumFractionDigits:2
    });
}

function updateScreen(){

    document.getElementById("deposit").textContent = format(deposit);
    document.getElementById("buyTotal").textContent = format(buy);
    document.getElementById("saleTotal").textContent = format(sale);
    document.getElementById("withdraw").textContent = format(withdrawal);

    let loss = (deposit + buy - sale) - withdrawal;

    document.getElementById("loss").textContent = format(loss);

    localStorage.setItem("deposit", deposit);
    localStorage.setItem("buy", buy);
    localStorage.setItem("sale", sale);
    localStorage.setItem("withdrawal", withdrawal);
}

function addBuy(){

    let amount = Number(document.getElementById("buyInput").value);

    if(amount <= 0 || isNaN(amount)){
        alert("Enter a valid Buy amount");
        return;
    }

    buy += amount;
    deposit += amount;

    document.getElementById("buyInput").value = "";

    updateScreen();
}

function addSell(){

    let amount = Number(document.getElementById("sellInput").value);

    if(amount <= 0 || isNaN(amount)){
        alert("Enter a valid Sell amount");
        return;
    }

    sale += amount;
    withdrawal += amount;

    document.getElementById("sellInput").value = "";

    updateScreen();
}

updateScreen();
