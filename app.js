var initialPrice = document.querySelector("#initial-price")
var qty = document.querySelector("#qty")
var currentPrice = document.querySelector("#current-price")
var btn = document.querySelector("#tell-me")
var output = document.querySelector("#output")


btn.addEventListener("click", sumbmitHandler)

function sumbmitHandler() {
    var ip = Number(initialPrice.value);
    var cp = Number(currentPrice.value);
    var quantity = Number(qty.value);
    calculateProfitOrLoss(ip, cp, quantity);
}

function calculateProfitOrLoss(ip, cp, quantity) {
    if (cp > ip) {
        var profit = (cp-ip)*quantity;
        var profitPercentage = ((profit/ip)*100).toFixed(2);
        console.log(profit);
        output.style.backgroundColor = "white"
        output.style.color = "#7C9EB2"
        output.innerText = `Your profit is ${profit} and profit percentage is ${profitPercentage} %`;
    }
    else if (ip > cp){
        var loss = (ip-cp)*quantity;
        var lossPercentage = ((loss/ip)*100).toFixed(2);
        output.innerText = `Your loss is ${loss} and loss percentage is ${lossPercentage} %`;
    }
}
