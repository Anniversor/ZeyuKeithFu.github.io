// Setting up game object
var game = {

    // Setting up game parameters, UI elements
    squares : document.getElementsByClassName("square"),
    header : document.querySelector("#header"),
    message : document.querySelector("#message"),
    playButton : document.querySelector("#play"),
    easyButton : document.querySelector("#easy"),
    hardButton : document.querySelector("#hard"),
    right : 0,
    num : 6,
    end : false,
    hardMode : true,

    // Set up init function
    init : function() {
        game.newColors(game.num);
        game.setupBar();
        for (var i = 0; i < game.num; i++) {
            game.squares[i].addEventListener("click", function () {
                if (this.style.backgroundColor == game.squares[game.right].style.backgroundColor) {
                    game.message.textContent = "Correct!";
                    for (var j = 0; j < game.num; j++) {
                        game.squares[j].style.backgroundColor = game.squares[game.right].style.backgroundColor;
                        game.header.style.backgroundColor = game.squares[game.right].style.backgroundColor;
                    }
                    game.playButton.textContent = "Play Again!";
                    game.end = true;
                } else {
                    if (this.style.backgroundColor != "transparent") {
                        this.style.backgroundColor = "transparent";
                        game.message.textContent = "Try Again!";
                    }
                }
            });
        }
    },

    // Set up function bar
    setupBar : function() {
        // Set re-play
        game.playButton.addEventListener("click", function () {
            game.newColors(game.num);
        });

        // Set play mode
        game.easyButton.addEventListener("click", function () {
            game.easyButton.classList.add("selected");
            game.hardButton.classList.remove("selected");
            game.num = 3;
            if (game.hardMode) {
                game.newColors(game.num);
                game.hardMode = !game.hardMode;
            }
        });

        game.hardButton.addEventListener("click", function () {
            game.easyButton.classList.remove("selected");
            game.hardButton.classList.add("selected");
            game.num = 6;
            if (!game.hardMode) {
                game.newColors(game.num);
                game.hardMode = !game.hardMode;
            }
        });
    },

    // Function to set colors
    newColors : function(num) {
        for (var i = 0; i < num; i++) {
            var oneRGB = "rgb(" + Math.floor((Math.random() * 256)).toString() + ", " +
                Math.floor((Math.random() * 256)).toString() + ", " +
                Math.floor((Math.random() * 256)).toString() + ")";
            game.squares[i].style.backgroundColor = oneRGB;
        }
        for (var j = num; j < game.squares.length; j++) {
            game.squares[j].style.backgroundColor = "transparent";
        }
        game.right = Math.floor((Math.random() * num));
        document.querySelector("#rgb").textContent = game.squares[game.right].style.backgroundColor;
        game.header.style.backgroundColor = "steelblue";
        game.message.textContent = "";
        game.playButton.textContent = "New Colors";
        game.message.textContent = "";
        game.end = false;
    },
};

// Initialize game
game.init();