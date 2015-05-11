
$(function() {

  //Game
  function Game() {

    this.playerTurn = "X";
    this.$boxes = $('.box');
    this.$reset = $('#reset');
    this.reset();
    
  }

 

//this method initilaizes the game and calls various other methods like
//switchPlayer() and checckWinner() inorder to execute the game
  Game.prototype.init = function() {
      
      var that = this;
      
      this.$boxes.click(function() {   //click event
        var $boxClicked = $(event.target);
        
        that.reset();
        //condition to cenk if box is empty / the play value is X
        if ($boxClicked.html() === "&nbsp;" && that.playerTurn === "X" ) {
           
            $boxClicked.html("X"); //setting html value of the box to X
            $boxClicked.css("background-color", "#F0F8FF"); //setting color for box
              
              //calling checkWinner and sending X as a value 
              if (that.checkWinner(that.playerTurn)) {
                  alert(that.playerTurn + " WINS!!!");
              }

              that.playerTurn = that.switchPlayer(); /*calling switchPlayer inorder to 
                                                      alternate between playerX and playerO
                                                    */
           //now checking conditions for playerO
        } else if($boxClicked.html() === "&nbsp;" && that.playerTurn === "O") {
              
              $boxClicked.html("O");
              $boxClicked.css("background-color", "#FFFACD");
                  if (that.checkWinner(that.playerTurn)) {
                      alert(that.playerTurn + " WINS!!!");
                  

                  }
                  that.playerTurn = that.switchPlayer(); 
        }
   });

}

  //this method switched the players when called
  Game.prototype.switchPlayer = function() {
      if (this.playerTurn === "O") {
        this.playerTurn = "X"
      } else {
        this.playerTurn = "O"
      }
        return this.playerTurn;
  };


 //this method call other methds to check for winner
  Game.prototype.checkWinner = function(playerT) {
    var winnerResult = false;
    if(this.eachOption(1,2,3,playerT) || this.eachOption(4,5,6,playerT) ||
       this.eachOption(7,8,9,playerT) || this.eachOption(1,4,7,playerT) ||
       this.eachOption(2,5,8,playerT) || this.eachOption(3,6,9,playerT) ||
       this.eachOption(1,5,9,playerT) || this.eachOption(3,5,7,playerT)) {

         winnerResult = true;
     }
      return winnerResult;
  }


  //this method checks each condition 
  Game.prototype.eachOption = function(num1,num2,num3,playerT) {
    var foundWinner = false; 
    if (this.eachBox(num1) === playerT && this.eachBox(num2) === playerT && this.eachBox(num3) === playerT) {
        foundWinner = true;
    }
        return foundWinner; 
}



 //this method gets the value of the div elemnt we are looking at
  Game.prototype.eachBox = function(num) {
       return $("#box" + num).html();
  }



 //this method resets the board when the reset button is clicked
  Game.prototype.reset =function() {
  
     this.$reset.click(function(event) {
      location.reload();
    });

  }

  
//the game startes here
  var game = new Game();
  game.init();

});

/*




  function checkForWinner(object) {

   var winnerCombinations = [[1,2,3],[4,5,6],[7,8,9], //row wins
                             [1,4,7],[2,5,8],[3,6,9], //column wins
                             [1,5,9],[3,5,7]]; //diagonal wins

  for (var i =0; i< winnerCombinations.length - 1; i++) {
    for (var j = 0; j < winnerCombinations.length -2, j++) {
        
        if (object[winnerCombinations[i][j]]) === object[winnerCombinations[[i][j+1]]) {
            

        } 
    }

  }
  }
*/








