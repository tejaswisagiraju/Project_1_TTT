
$(function() {


  
  function Game() {

    this.playerTurn = "O";
    this.$boxes = $('.box');
    this.$reset = $('#reset');


  
    
  }

 


  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {

    var that = this;
   
     //for (var i=0; i <9; i++) {

      this.$boxes.click(function() {
      var $turn = $(event.target);
      
        if ($turn.html() === "&nbsp;") {
          console.log("hello");
          that.playerTurn = that.switchPlayer(); 
          console.log(that.playerTurn);
          if (that.playerTurn === "X") {
            $turn.html("X");
            console.log("hey");
            if (that.checkWinner(that.playerTurn)) {
               alert(that.playerTurn + " WINS!!!"); }
          
          } else { 
              $turn.html("O");
              if (that.checkWinner(that.playerTurn)) {
                alert(that.playerTurn + " WINS!!!");}
            }


        }

          
        });

        //}


      }


  Game.prototype.switchPlayer = function() {
    if (this.playerTurn === "O") {
      this.playerTurn = "X"
    } else {
      this.playerTurn = "O"
    }
    return this.playerTurn;
  };

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

  
  Game.prototype.eachOption = function(a,b,c,playerT) {
    var foundWinner = false; 
    if (this.eachBox(a) === playerT && this.eachBox(b) === playerT && this.eachBox(c) === playerT) {

        foundWinner = true;
    }

       return foundWinner; 
  }



  Game.prototype.eachBox = function(num) {
       return $("#box" + num).html()
  }




 /* Game.prototype.Reset =function() {

  }*/

  var game = new Game();
  game.init();

});


/*

/*


  Board.prototype.checkRow = function(a, b, c, move) {
    var result = false;
    if (this.getBox(a) === move && this.getBox(b) === move && this.getBox(c) === move) {
      result = true;
    }
    return result;
  }

  Board.prototype.getBox = function(number) {
    return $("#cell" + number).html();
  }

*/

  // A starter Player constructor.


  // A starter Board constructor.
  /*function Board($turn) {

    this.$reset = $('#reset');

    if ($turn.html() === "&nbsp;") {
      if(this.playerTurn === "X") {
         $turn.html("X");
          if (this.checkWinner(this.playerTurn)) {
            alert(this.playerTurn + " WINS!!!");
          
          }

      this.playerTurn = "O";

      } else {
        $turn.html("O");

          if (this.checkWinner(this.playerTurn)) {
            alert(this.playerTurn + " WINS!!!");

          }
      }
      
    }

    if (playerTurn === "X") {
      this.$turn


    }

    //Tracks the cells of the board instance
    //this.$cells = ...

    //Store any other properties that board may have below, such as a reset option
  };

  Board.prototype.Reset() {
/*
reset.addEventListener("click", function(event){
     for (i = 0; i < 9; i++) {
      boxNumber = document.querySelector("#box" + i);
      
        boxNumber.innerHTML = "&nbsp;" //String.fromCharCode(8)
        boxNumber.style.backgroundColor = "white";
     
*/

/* this.$reset.click(function() {
   var $t = $(event.target);
    for(var i = 0;i < 9; i++) {




    }




  } */


/*
  // Start the game!
  var game = new Game();
  game.init();
*/


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








