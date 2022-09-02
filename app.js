var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
 
    calculateProfitAndLoss(ip,qty,curr);  

}




function calculateProfitAndLoss(initial , quantity , current) {
    if(initial > current) {
    var loss = (initial - current) * quantity ; 
    var lossPercentage = (loss / initial) * 100 ;

    showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}% `);
     
}else if(current > initial){
    //Profit logic here
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100 ;
   

    showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}% `);
    
}else{
    //the rest logic here
    showOutput(`no pain no gain and no gain no pain`);
 
}

}

function showOutput(message){
   
    outputBox .innerHTML = message;

}


submitBtn.addEventListener('click',submitHandler);


