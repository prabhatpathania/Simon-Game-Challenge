var master_seq = [];
var game_seq = [];
const colors = ['red', 'yellow', 'blue', 'green'];
var current_level = 1;

/**
 * Start with generating a color
 */
generateNextColor();



/**
 * On button press, match the color series, 
 * If all colors of the series are matched = Next level! Add a new color to the color series
 */
$('.btn').on('click', function (event) {
    $("." + this.id).addClass('pressed');
    playSound(this.id);
    setTimeout(() => {
        $("." + this.id).removeClass('pressed');
        if (game_seq.length == 0){
            // level up
            generateNextColor()
        }
    }, 100);
})

/**
 * 
 * @param {*} buttonText 
 * Play sound for each colour
 */
function playSound(buttonText) {
    var right_color = game_seq.shift()
        if (buttonText === right_color) {
            switch (buttonText) {
                case 'blue':
                    var blue_sound = new Audio('sounds/blue.mp3');
                    blue_sound.play();
                    break;
                case 'green':
                    var green_sound = new Audio('sounds/green.mp3');
                    green_sound.play();
                    break;
                case 'red':
                    var red_sound = new Audio('sounds/red.mp3');
                    red_sound.play();
                    break;
                case 'yellow':
                    var yellow_sound = new Audio('sounds/yellow.mp3');
                    yellow_sound.play();
                    break;
                default:
                    break;
            }
        } else {
            var error_sound = new Audio('sounds/wrong.mp3');
            error_sound.play();
            $('body').addClass('game-over');
            $('h1').text('Game over');
        }
}

/**
 * Generate next color for the series
 */
function generateNextColor() {
    setTimeout(() => {
        let i = Math.floor(Math.random() * colors.length);
        master_seq.push(colors[i]);
        game_seq = master_seq.slice();
        $("." + colors[i]).addClass('pressed');
        setTimeout(() => {
            $("." + colors[i]).removeClass('pressed');
        }, 300);
        console.log(game_seq);
    }, 500);
}