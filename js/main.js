let wins = [
    [1,4,7], [2,5,8], [3,6,9], [1,2,3], [4,5,6], [7,8,9], [1,5,9], [3,5,7]]

$(".container").hide()

$("#X").click(function(){
    if($(this).attr('id')== X){
        // let play = X
    }else{
        // let play = O;
    }
    $(".option").hide()
    $(".container").show()
})
$("#O").click(function(){
    if($(this).attr('id')== O){
        // let play = O
    }else{
        // let play = X;
    }
    $(".option").hide()
    $(".container").show()
})

let points = [7,4,1]

points.sort(function(a, b){return a-b});

for (let i = 0; i < wins.length; i++) {
    if(points.toString() == wins[i].toString()){
        alert("We have a Winner!")
    }
}

$(".slots").click(function(){

    console.log($(this).attr('id'))

});

