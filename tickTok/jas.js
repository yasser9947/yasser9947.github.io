
var win = {
    1: [0, 1, 2],
    2: [0, 3, 6],
    3: [0, 4, 8],
    4: [1, 4, 7],
    5: [2, 5, 8],
    6: [6, 7, 8],
    7: [2, 4, 6],
    8: [3, 4, 5]
}
var arraiOfbox = ["#a", "#b", "#c", "#d", "#e", "#f", "#g", "#h", "#i"];
var z = 0;
var pLr1 = 0;
var pLr2 = 0;
var player1 = [];
var player2 = [];
function Xbox(x) {
    var array = ["url('X.png')", "url('O.jpeg')"]

    $(x).on("click", function () {

        if (z == 0) {

            if ($(x).hasClass("checked")) {

                $(x).css("background-image", array[z])
                    .css("background-size", "138px 102px")

                z = 1;
                player1.push(arraiOfbox.indexOf(x))
                $(x).removeClass("checked")
                console.log(player1);


                for (i = 1; i < 9; i++) {
                    if (player1.includes(win[i][0]) && player1.includes(win[i][1]) && player1.includes(win[i][2])) {
                        console.log("player1 win");
                        $('.win').text("player1 is win")

                        pLr1 += 1;
                        $('#pLr1').text(pLr1);

                        for (i = 0; i < 9; i++) {
                            $(arraiOfbox[i]).removeClass("checked")
                        }
                    }
                }
            }
        }
        else {



            if ($(x).hasClass("checked")) {

                $(x).css("background-image", array[z])
                    .css("background-size", "138px 102px")
                z = 0;
                player2.push(arraiOfbox.indexOf(x))
                $(x).removeClass("checked")
                for (i = 1; i < 9; i++) {
                    if (player2.includes(win[i][0]) && player2.includes(win[i][1]) && player2.includes(win[i][2])) {
                        console.log("player2 win");
                        $('.win').text("player2 is win")


                        pLr2 += 1;
                        $('#pLr2').text(pLr2);


                        for (i = 0; i < 9; i++) {
                            $(arraiOfbox[i]).removeClass("checked")
                        }
                    }
                }

            }
        }
    })

}
Xbox(arraiOfbox[0])
Xbox(arraiOfbox[1])
Xbox(arraiOfbox[2])
Xbox(arraiOfbox[3])
Xbox(arraiOfbox[4])
Xbox(arraiOfbox[5])
Xbox(arraiOfbox[6])
Xbox(arraiOfbox[7])
Xbox(arraiOfbox[8])
$("button").on("click", function () {

    $(".big_table div").addClass("checked")
        .css("background", "#fcfcfb")
    $('.win').text("")
    player1 = [];
    player2 = [];
})

