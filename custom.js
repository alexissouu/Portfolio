//bouton back to top//
var toggleHeight = $(window).outerHeight() * 2;

$(window).scroll(function() {
	if ($(window).scrollTop() > toggleHeight) {
		//Adds active class to make button visible
		$(".m-backtotop").addClass("active");
		
		//Just some cool text changes
		$('h1 span').text('TA-DA! Now hover it and hit dat!')
		
	} else {
		//Removes active class to make button visible
		$(".m-backtotop").removeClass("active");
		
		//Just some cool text changes
		$('h1 span').text('(start scrolling)')
	}
});


$(".m-backtotop").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});
//Fin bouton back to top//





//mouvement première carte//
"use strict";
window.addEventListener("DOMContentLoaded", (event) => {
  /* MENU */
  const LeMenu = document.getElementById("LeMenu");
  const CmdMenu = document.getElementById("CmdMenu");
  CmdMenu.addEventListener('click',function(){
    LeMenu.style.display = (LeMenu.style.display == 'none')? '':'none';
  });
  // au chargement de la page
  window.onload = function(){
    // on teste la largeur de la fenêtre
    var ww = window.innerWidth; // en pixels
    LeMenu.style.display = ( ww > 768 )? '':'none';
    CmdMenu.style.display = ( ww > 768 )? 'none':'';
  };
  // au redimensionnement de la fenêtre
  window.onresize = function(){
    // on teste la largeur de la fenêtre
    var ww = window.innerWidth; // en pixels
    LeMenu.style.display = ( ww > 768 )? '':'none';
    CmdMenu.style.display = ( ww > 768 )? 'none':'';
  };

});
//Fin mouvement première carte//


//snake//
let game = document.getElementById("game");
    let scoreElem = document.getElementById("score");
    let snake = [{ x: 250, y: 250 }];
    let food = { x: Math.floor(Math.random() * 490), y: Math.floor(Math.random() * 490) };
    let dx = 10, dy = 0;
    let score = 0;

    function update() {
      // Move the snake
      let head = snake[0];
      let newHead = { x: head.x + dx, y: head.y + dy };
      snake.unshift(newHead);

      // Check for collision with food
      if (newHead.x === food.x && newHead.y === food.y) {
        food = { x: Math.floor(Math.random() * 490), y: Math.floor(Math.random() * 490) };
        score++;
        scoreElem.innerHTML = "Score: " + score;
      } else {
        snake.pop();
      }

      // Check for collision with the walls
      if (newHead.x > 490 || newHead.x < 0 || newHead.y > 490 || newHead.y < 0) {
        alert("Game Over");
        clearInterval(intervalId);
      }

      // Check for collision with itself
      for (let i = 1; i < snake.length; i++) {
        if (newHead.x === snake[i].x && newHead.y === snake[i].y) {
          alert("Game Over");
          clearInterval(intervalId);
        }
      }

      // Clear the game board
      game.innerHTML = "";

      // Draw the snake
      for (let i = 0; i < snake.length; i++) {
        let segment = document.createElement("div");
        segment.classList.add("snake-segment");
        segment.style.left = snake[i].x + "px";
        segment.style.style.top = snake[i].y + "px";
        game.appendChild(segment);
      }

      // Draw the food
      let foodElem = document.createElement("div");
      foodElem.id = "food";
      foodElem.style.left = food.x + "px";
      foodElem.style.top = food.y + "px";
      game.appendChild(foodElem);
    }

    document.onkeydown = function(event) {
      switch (event.keyCode) {
        case 37: // left
          dx = -10;
          dy = 0;
          break;
        case 38: // up
          dx = 0;
          dy = -10;
          break;
        case 39: // right
          dx = 10;
          dy = 0;
          break;
        case 40: // down
          dx = 0;
          dy = 10;
          break;
      }
    };

    let intervalId = setInterval(update, 100);