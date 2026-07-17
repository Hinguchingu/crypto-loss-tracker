// ===== Initial Data =====
let deposit = Number(localStorage.getItem("deposit")) || 431200;
let buy = Number(localStorage.getItem("buy")) || 288500;
let sale = Number(localStorage.getItem("sale")) || 140850;
let withdrawal = Number(localStorage.getItem("withdrawal")) || 261741.35;

// ===== Update Screen =====
function updateScreen() {

document.getElementById("deposit").innerHTML =
"₹"+deposit.toLocaleString();

document.getElementById("buyTotal").innerHTML =
"₹"+buy.toLocaleString();

document.getElementById("saleTotal").innerHTML =
"₹"+sale.toLocaleString();

document.getElementById("withdraw").innerHTML =
"₹"+withdrawal.toLocaleString();

let loss =
(deposit + buy - sale) - withdrawal;

document.getElementById("loss").innerHTML =
"₹"+loss.toLocaleString(undefined,{maximumFractionDigits:2});

// Save
localStorage.setItem("deposit",deposit);
localStorage.setItem("buy",buy);
localStorage.setItem("sale",sale);
localStorage.setItem("withdrawal",withdrawal);

}

// ===== BUY =====

function addBuy(){

let amount =
Number(document.getElementById("buyInput").value);

if(!amount || amount<=0){
alert("Enter Buy Amount");
return;
}

buy += amount;

deposit += amount;

document.getElementById("buyInput").value="";

updateScreen();

}

// ===== SELL =====

function addSell(){

let amount =
Number(document.getElementById("sellInput").value);

if(!amount || amount<=0){
alert("Enter Sell Amount");
return;
}

sale += amount;

withdrawal += amount;

document.getElementById("sellInput").value="";

updateScreen();

}

updateScreen();
