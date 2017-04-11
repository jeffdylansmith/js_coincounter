function calculate (cash) {  
  var coinpurse = {
      quarters : 0,
      dimes : 0,
      nickels : 0,
      pennies : 0,
  }
while(cash > 0) {
    if (cash >= .25){
    coinpurse.quarters++;
    cash -= .25;
    } else if (cash >= .1){
    coinpurse.dimes++;
    cash -= .1;
    } else if (cash >= .05){
    coinpurse.nickels++;
    cash -= .05;
    } else (cash >= .01)
    coinpurse.pennies++;
    cash -= .01;
    }
  console.log(coinpurse);
}  
var button = document.getElementById("run");
button.addEventListener("click", function(){
        var amount = document.getElementById("amount").value;
        calculate(amount);
});

//  while (cash > 0) {
//  if (cash >= .01 && coinpurse.pennies < 4){
//    coinpurse.pennies++;
//    cash -= .01;
//  } else if (cash >= .05 && coinpurse.nickels < 1) {
//    coinpurse.nickels++;
//    cash -= .05
//  } else if (cash >= .1 && coinpurse.dimes < 2){
//    coinpurse.dimes ++;
//    cash -= .1;
//  } else (cash >= .25)
//    coinpurse.quarters++;
//    cash -= .25;
//}             


