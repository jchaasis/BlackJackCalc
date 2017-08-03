/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// possible [2,3,4,5,6,7,8,9,10,J,Q,K,A];

// let hand= ["2", "2", "8"];
function handValue (hand) {
    let sum = 0;
    let cardValue = [];
    let aces = 0;
  //convert strings to numbers

    for (let i=0; i<hand.length; i++){
      if (hand[i] == "K" || hand[i] == "Q" || hand[i]== "J"){
        hand[i] = 10;
        cardValue.push(hand[i]);
      }
  //seperate the Aces
      else if (hand[i] == ["A"]){
        aces = aces + 1;
      }

      else{
          cardValue.push(parseInt(hand[i], 10));
        }
      }

  //sum the value of the hand

      for (let s=0; s<cardValue.length; s++){

        sum += cardValue[s];
        }
//sum for hands with Aces
      for ( let a=0; a<aces; a++){
        if ((aces > 0) && (sum > 11)) {
          let ace = 1;
          sum = ace + sum;
        }

        else if ((aces > 0) && (sum < 11)){
           ace = 11;
          sum = ace + sum;
          }
        }

//console.logged these items below to help me visualize and solve issues
      console.log(cardValue);
      console.log(sum);
      console.log(aces);
      return sum;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
