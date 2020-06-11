/*
Exercise 12.8: 
Modify your solution to Exercise 12.7 to determine when the game is over, 
then prompt the user to determine whether to play again. 
If so, scramble the numbers using the Math.random method.
*/


var cells;
var swapped;
const N = 5;

function setup()
{
   // create a 2d array of all the cells
   
	 // xxx re-write the following with 2-level for-loop
	// xxx  hints: see the previous examples
	
	//I DON'T UNDERSTAND WHY THE 2-LEVEL LOOP IS NEEDED.
	//THE FILE WORKS WITHOUT IT.
	
   cells = [
      [ document.getElementById( "cell00" ),
       document.getElementById( "cell01" ),
       document.getElementById( "cell02" ),
       document.getElementById( "cell03" ),
       document.getElementById( "cell04" )],
      [ document.getElementById( "cell10" ),
       document.getElementById( "cell11" ),
       document.getElementById( "cell12" ), 
       document.getElementById( "cell13" ),
       document.getElementById( "cell14" )],
      [ document.getElementById( "cell20" ),
       document.getElementById( "cell21" ),
       document.getElementById( "cell22" ),
       document.getElementById( "cell23" ),
       document.getElementById( "cell24" )],
      [ document.getElementById( "cell30" ),
       document.getElementById( "cell31" ),
       document.getElementById( "cell32" ),
       document.getElementById( "cell33" ),
       document.getElementById( "cell34" )],
      [ document.getElementById( "cell40" ),
       document.getElementById( "cell41" ),
       document.getElementById( "cell42" ),
       document.getElementById( "cell43" ),
       document.getElementById( "cell44" )]];

   // create a 2d array of all the cells
	 // xxx re-write the following with 2-level for-loop
   cells[ 0 ][ 0 ].addEventListener( "click", 
      function(){ doClick( 0, 0 ); }, false );
   cells[ 0 ][ 1 ].addEventListener( "click", 
      function(){ doClick( 0, 1 ); }, false );
   cells[ 0 ][ 2 ].addEventListener( "click", 
      function(){ doClick( 0, 2 ); }, false );
   cells[ 0 ][ 3 ].addEventListener( "click", 
      function(){ doClick( 0, 3 ); }, false );
   cells[ 0 ][ 4 ].addEventListener( "click", 
      function(){ doClick( 0, 4 ); }, false );

   cells[ 1 ][ 0 ].addEventListener( "click", 
      function(){ doClick( 1, 0 ); }, false );
   cells[ 1 ][ 1 ].addEventListener( "click", 
      function(){ doClick( 1, 1 ); }, false );
   cells[ 1 ][ 2 ].addEventListener( "click", 
      function(){ doClick( 1, 2 ); }, false );
   cells[ 1 ][ 3 ].addEventListener( "click", 
      function(){ doClick( 1, 3 ); }, false );
   cells[ 1 ][ 4 ].addEventListener( "click", 
      function(){ doClick( 1, 4 ); }, false );

   cells[ 2 ][ 0 ].addEventListener( "click", 
      function(){ doClick( 2, 0 ); }, false );
   cells[ 2 ][ 1 ].addEventListener( "click", 
      function(){ doClick( 2, 1 ); }, false );
   cells[ 2 ][ 2 ].addEventListener( "click", 
      function(){ doClick( 2, 2 ); }, false );
   cells[ 2 ][ 3 ].addEventListener( "click", 
      function(){ doClick( 2, 3 ); }, false );
   cells[ 2 ][ 4 ].addEventListener( "click", 
      function(){ doClick( 2, 4 ); }, false );

   cells[ 3 ][ 0 ].addEventListener( "click", 
      function(){ doClick( 3, 0 ); }, false );
   cells[ 3 ][ 1 ].addEventListener( "click", 
      function(){ doClick( 3, 1 ); }, false );
   cells[ 3 ][ 2 ].addEventListener( "click", 
      function(){ doClick( 3, 2 ); }, false );
   cells[ 3 ][ 3 ].addEventListener( "click", 
      function(){ doClick( 3, 3 ); }, false );
   cells[ 3 ][ 4 ].addEventListener( "click", 
      function(){ doClick( 3, 4 ); }, false );

   cells[ 4 ][ 0 ].addEventListener( "click", 
      function(){ doClick( 4, 0 ); }, false );
   cells[ 4 ][ 1 ].addEventListener( "click", 
      function(){ doClick( 4, 1 ); }, false );
   cells[ 4 ][ 2 ].addEventListener( "click", 
      function(){ doClick( 4, 2 ); }, false );
   cells[ 4 ][ 3 ].addEventListener( "click", 
      function(){ doClick( 4, 3 ); }, false );
   cells[ 4 ][ 4 ].addEventListener( "click", 
      function(){ doClick( 4, 4 ); }, false );
      
   placeNumbers();
}

function placeNumbers()
{
   var numbers = [];
   var randomLoc;
   var temp;

   for ( var i = 0; i < N*N ; i++ )
      numbers[ i ] = i;
   
   for ( i = 0; i < N*N ; i++ ) {
      randomLoc = Math.floor( Math.random() * N*N );
      temp = numbers[ i ];
      numbers[ i ] = numbers[ randomLoc ];
      numbers[ randomLoc ] = temp;
   }

   i = 0;

   for ( var row = 0; row < cells.length; ++row )
      for ( var col = 0; col < cells[row].length; ++col )
      {
         if (numbers[ i ] != 0 )
            cells[ row ][ col ].innerHTML = numbers[ i ];
         else
            cells[ row ][ col ].innerHTML = "";
        
         ++i;
      }
}

function doClick( row, col )
{
   var top = row - 1;
   var bottom = row + 1;
   var left = col - 1;
   var right = col + 1;

   swapped = false;

   if ( top != -1 && cells[ top ][ col ].innerHTML == "")
      swap( cells[ row ][ col ], cells[ top ][ col ] );
   else if ( right != N &&
      cells[ row ][ right ].innerHTML == "")
      swap( cells[ row ][ col ], cells[ row ][ right ] );
   else if ( bottom != N && 
      cells[ bottom ][ col ].innerHTML == "")
      swap( cells[ row ][ col ], cells[ bottom ][ col ] );
   else if ( left != -1 &&
      cells[ row ][ left ].innerHTML == "")
      swap( cells[ row ][ col ], cells[ row ][ left ] );
   else
      alert( "Illegal move." );

   checkWin();
}

function swap( firstCell, secondCell )
{
   swapped = true;
   secondCell.innerHTML = firstCell.innerHTML;
   firstCell.innerHTML = "";
}

function checkWin() {
   var win = true;

   for ( var i = 0; i < N; i++ )
      for ( var j = 0; j < N; j++ )
   	  if ( !( cells[ i ][ j ].innerHTML == i*N + j + 1 ) )
         if ( !( i == N-1 && j == N-1 ) )
            win = false;

   if ( win )
      if ( window.prompt( "Play again?", "yes" ) )
         placeNumbers();
}

window.addEventListener( "load", setup, false );
