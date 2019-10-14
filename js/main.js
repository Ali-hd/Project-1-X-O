let wins = [
    [1,4,7], [2,5,8], [3,6,9], [1,2,3], [4,5,6], [7,8,9], [1,5,9], [3,5,7]]
let p1win = [];
let p2win = [];
let count = 0;

$(".container").hide()

$("#X").click(function(){
    let player1 = "X"
    let player2 = "O"
    $(".option").hide()
    $(".container").show()
})
$("#O").click(function(){
    let player1 = "O"
    let player2 = "X"
    $(".option").hide()
    $(".container").show()
})

$(".slots").click(function(){
    if(count%2 == 0 ){p1win.push($(this).attr('id'))

    }else{ p2win.push($(this).attr('id'))    
            }
    count++
    console.log("This is count > "+count)
    check();
});

function check(){
    let gameover = true;
    for (let i = 0; i < wins.length; i++) {
        p1win.sort(function(a, b){return a-b});
        p2win.sort(function(a, b){return a-b});
        if(p1win.toString() == wins[i].toString()){
            alert("Player 1 is the Winner!")
            gameover = false
        }
        if(p2win.toString() == wins[i].toString()){
            alert("Player 2 is the Winner!")
            gameover = false
        }

        if(count == 9 && gameover == true){
            alert("Game is TIE!")
        }
    }
    
}





