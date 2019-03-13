// id for each hex (added to array)
var arayHex = ["#a", "#b", "#c", "#d", "#e", "#f", "#g", "#h", "#i", "#j", "#k", "#l", "#m", "#n"
    , "#o", "#p", "#q", "#r", "#s", "#t", "#u", "#v", "#w", "#x", "#y"]
// araay for red player win
var playerRedWin = {
    1: [0, 1, 2, 3, 4],
    2: [5, 6, 7, 8, 9],
    3: [10, 11, 12, 13, 14],
    4: [15, 16, 17, 18, 19],
    5: [20, 21, 22, 23, 24]
}
// array for red player and green player 
var redPlayer = [];
var greenPlayer = [];

var changePlayer = 1;
// finale result to Checkpoint for connent the between each hex

var FainleResult = 0;
// function for  connect red player 
function chechForNabors(player, row, win) {

    for (var i = 0; i <= 5; i++) {
        x = win[row]
        // console.log(x)

        var chick = player.includes(x[i]);
        // console.log(chick)

        if ((row % 2) != 0) {
            if (chick) {
                console.log("odd ")
                if (row == 3) {
                    chick = x[i];
                    var chick2 = player.includes(chick + 4) + player.includes(chick + 5);
                    var chick3 = player.includes(chick - 5) + player.includes(chick - 6)
                    if (chick2 >= 1 && chick3 >= 1) {

                        return true
                    }

                }
                else {
                    chick = x[i];
                    var chick2 = player.includes(chick + 4) + player.includes(chick + 5);
                    // var chick3 = player.includes(chick + 10) + player.includes(chick + 11) ,;
                    if (chick2 >= 1) {

                        console.log("you did it ")
                        return true
                    }
                }
            }

        }


        else {
            if (chick) {
                console.log("even ")

                chick = x[i];
                var chick3 = player.includes(chick - 5) + player.includes(chick - 4)

                var chick2 = player.includes(chick + 6) + player.includes(chick + 5);
                if (chick2 >= 1 && chick3 >= 1) {

                    console.log("you did it  god")
                    return true

                }

            }
        }
    }
}


// array for green player won
var playergreenWin = {
    1: [0, 5, 10, 15, 20],
    2: [1, 6, 11, 16, 21],
    3: [2, 7, 12, 17, 22],
    4: [3, 8, 13, 18, 23],
    5: [4, 9, 14, 19, 24]


}
// function for  connect green player 


function chechForNaborsGreen(player, row, win) {





    for (var i = 0; i < 5; i++) {
        x = win[row]

        var chick = player.includes(x[i]);

        if ((row % 2) != 0) {
            if (chick) {

                chick = x[i];
                console.log(chick)
                if (chick % 2 == 0) {

                    var chick2 = player.includes(chick + 1);
                    if (row == 3) {
                        var chick3 = player.includes(chick - 1) + player.includes(chick + 4) + player.includes(chick - 6);
                        // console.log("chick3 " + chick3)
                        if (chick2 >= 1 && chick3 >= 1) {
                            // console.log("5 or 10" + chick3)

                            return true
                        }

                    }
                    else {
                        if (chick2 >= 1) {

                            return true
                        }
                    }
                }
                else {
                    var chick2 = player.includes(chick + 1) + player.includes(chick + 6) + player.includes(chick - 4);
                    if (row == 3) {
                        var chick3 = player.includes(chick - 1);

                        if (chick2 >= 1 && chick3 >= 1) {

                            return true
                        }


                        if (chick2 >= 1) {

                            return true
                        }
                    }

                }

            }
        }





        else {
            if (chick) {
                // console.log("even ")
                chick = x[i];
                if (chick % 2 != 0) {

                    var chick2 = player.includes(chick + 1);
                    if (chick2 >= 1) {

                        return true
                    }
                }
                else {
                    var chick2 = player.includes(chick + 1) + player.includes(chick + 6) + player.includes(chick - 4);
                    if (chick2 >= 1) {

                        return true
                    }
                }

            }
        }
    }
}


// function to play 
function chose(x) {

    $(x).on("click", function () {

        if (changePlayer == 0) {

            if ($(x).hasClass("checke")) {

                $(x).removeClass("hexagon").addClass("red");


                changePlayer = 1;
                redPlayer.push(arayHex.indexOf(x))

                $("#P1").addClass("P1").removeClass("red");
                $("#P2").removeClass("P1").addClass("green");

                $(x).removeClass("checke")

                FainleResult = 0;
                for (i = 2; i < 5; i++) {
                    var chick = chechForNabors(redPlayer, i, playerRedWin)
                    // console.log(chick);

                    if (chick) { FainleResult += chick }
                }
                console.log(FainleResult);
                if (FainleResult >= 3) {
                    // console.log("player1 win");
                    swal({
                        title: "NICE !",
                        text: "RED PLAYER WON !!!!",
                        icon: "success",
                        button: "Aww yiss!",
                    });


                }
            }
        }

        else {



            if ($(x).hasClass("checke")) {

                $(x).removeClass("hexagon").addClass("green");
                $("#P2").removeClass("green").addClass("P1")
                $("#P1").removeClass("P1").addClass("red");

                changePlayer = 0;
                greenPlayer.push(arayHex.indexOf(x))
                $(x).removeClass("checke")
                FainleResult = 0;
                console.log(greenPlayer);
                for (i = 2; i <= 4; i++) {
                    var chick = chechForNaborsGreen(greenPlayer, i, playergreenWin)
                    // console.log(chick);

                    if (chick) { FainleResult += chick }
                }
                console.log(FainleResult);
                if (FainleResult >= 3) {
                    console.log("player2 win");

                    swal({
                        title: "NICE !",
                        text: "GREEN PLAYER WON !!!!",
                        icon: "success",
                        button: "Aww yiss!",
                    });


                }
            }
        }
    })
}
// for ( to none stop the game )
for (i = 0; i < arayHex.length; i++) {
    chose(arayHex[i]);
}
// to reset the game 
$("#button").on("click", function () {
    for (i = 0; i < arayHex.length; i++) {
        $((arayHex[i])).removeClass("green").removeClass("red").addClass("hexagon").addClass("checke");
        redPlayer = [];
        greenPlayer = [];
    }
})