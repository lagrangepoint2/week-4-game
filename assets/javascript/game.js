$(document).ready(function(){
//Variable Section***********
var bpress;
var wins = 0;
var losses = 0;
var rnum;

var cry, cry1, cry2, cry3;

var totalGuess;

var cryArray = [];

//Game code

$('.crybutton').on('click', function() {
	    bpress = this.value;
        console.log('bpress: ', bpress);
        // $('#guess-total').html(bpress);

        if (bpress === 'c1') {
          totalGuess = totalGuess + cryArray[0];
          console.log('totalGuess: ', totalGuess);
          // $('#guess-total').html(totalGuess);
          display();
        }

        if (bpress === 'c2') {
          totalGuess = totalGuess + cryArray[1];
          console.log('totalGuess: ', totalGuess);
          // $('#guess-total').html(totalGuess);
          display();
        }

        if (bpress === 'c3') {
          totalGuess = totalGuess + cryArray[2];
          console.log('totalGuess: ', totalGuess);
          // $('#guess-total').html(totalGuess);
          display();
        }

        if (bpress === 'c4') {
          totalGuess = totalGuess + cryArray[3];
          console.log('totalGuess: ', totalGuess);
          // $('#guess-total').html(totalGuess);
          display();
        }

        //win check
        if (totalGuess === rnum) {
        	wins++;
        	display();
        	reset();
        } else {
        	if (totalGuess > rnum) {
        		losses++;
        		display();
        		reset();
        	}
        }
});//end of crybutton

reset();

function display() {
	$('#ran-crystal-num').html(rnum);
	$('#guess-total').html(totalGuess);
	$('#win-total').html(wins);
	$('#loss-total').html(losses);
}

function reset(){
		totalGuess = 0;
		//Generate random number
			rnum = Math.floor((Math.random() * (120-19)) + 19);
			console.log('rnum: ', rnum);

			for (var i = 0; i < 4; i++){
				cryArray[i] = Math.floor((Math.random() * 12) + 1);
			}
			console.log('cryArray[0]: ', cryArray[0]);
	        console.log('cryArray[1]: ', cryArray[1]);
	        console.log('cryArray[2]: ', cryArray[2]);
	        console.log('cryArray[3]: ', cryArray[3]);

		display();
}

});//end of document.ready function


//*********************************
// Pcode

// Generate random number to be guessed 19-120

// generate four random numbers for each crystal 1-12

// take button clicks for each crystal button value

// check to see if it equals guessed number if so add to win

// if not add to losses
