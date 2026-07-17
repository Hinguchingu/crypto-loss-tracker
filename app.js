let deposit = Number(localStorage.getItem("deposit")) || 431200;
let buy = Number(localStorage.getItem("buy")) || 288500;
let sale = Number(localStorage.getItem("sale")) || 140850;
let withdrawal = Number(localStorage.getItem("withdrawal")) || 261741.35;

let history = JSON.parse(localStorage.getItem("history")) || [];

function format(value){
    return "₹" + value.toLocaleString("en-IN", {
        maximumFractionDigits:2
    });
}

function saveData(){
    localStorage.setItem("deposit", deposit);
    localStorage.setItem("buy", buy);
    localStorage.setItem("sale", sale);
    localStorage.setItem("withdrawal", withdrawal);
    localStorage.setItem("history", JSON.stringify(history));
}

function renderHistory(){

    const box = document.getElementById("history");

    if(history.length===0){
        box.innerHTML='<p class="empty">No Transactions Yet</p>';
        return;
    }

    box.innerHTML="";

    history.slice().reverse().forEach(item=>{

        box.innerHTML += `
        <div class="item">
            <div class="left">
                <span class="title">${item.type}</span>
                <span class="time">${item.time}</span>
            </div>

            <div class="amount">
                ${format(item.amount)}
            </div>
        </div>
        `;
    });

}

function updateScreen(){

    document.getElementById("deposit").textContent=format(deposit);
    document.getElementById("buyTotal").textContent=format(buy);
    document.getElementById("saleTotal").textContent=format(sale);
    document.getElementById("withdraw").textContent=format(withdrawal);

    let loss=(deposit+buy-sale)-withdrawal;

    document.getElementById("loss").textContent=format(loss);

    renderHistory();

    saveData();

}

function addBuy(){

    let amount=Number(document.getElementById("buyInput").value);

    if(amount<=0 || isNaN(amount)){
        alert("Enter Buy Amount");
        return;
    }

    buy+=amount;
    deposit+=amount;

    history.push({
        type:"BUY",
        amount:amount,
        time:new Date().toLocaleString()
    });

    document.getElementById("buyInput").value="";

    updateScreen();

}

function addSell(){

    let amount=Number(document.getElementById("sellInput").value);

    if(amount<=0 || isNaN(amount)){
        alert("Enter Sell Amount");
        return;
    }

    sale+=amount;
    withdrawal+=amount;

    history.push({
        type:"SELL",
        amount:amount,
        time:new Date().toLocaleString()
    });

    document.getElementById("sellInput").value="";

    updateScreen();

}

updateScreen();
