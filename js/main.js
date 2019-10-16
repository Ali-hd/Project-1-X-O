let wins = [
    [1,4,7], [2,5,8], [3,6,9], [1,2,3], [4,5,6], [7,8,9], [1,5,9], [3,5,7],[1,3,5,9], [1,3,5,7], [2,4,5,8], [2,5,6,8],
    [1,5,7,9], [1,4,5,9], [1,4,5,7],[1,5,8,9],[2,3,5,7],[3,4,5,7], [2,5,8,9], [1,2,4,7,9], [2,3,5,7,9], [1,3,5,6,7], 
    [1,2,3,4,9],[2,4,5,6], [3,5,7,9], [1,3,5,6,9], [1,5,6,9], [3,4,5,7,9], [1,3,5,8,9], [1,3,4,7,9],[1,3,5,7,9],
    [1,4,6,7,8],[1,3,5,7,8],[2,3,5,8],[1,2,5,9],[2,5,7,8],[1,2,3,5,8],[1,2,3,6,8],[3,4,5,6,8],[2,5,6,8,9],[1,3,4,7],[3,4,5,6]]

let p1win = [];
let p2win = [];
let comwin = [];
let count = 0;
let img = ""
let comp;
let rand = 0;
let again = "";

$(".container").hide()
$(".option").hide()
$("#reset").hide()

$("#2p").click(function(){

    $(".choose").hide()
    $(".option").show()
})
$("#com").click(function(){
    comp = 1;
    $(".choose").hide()
    $(".option").show()
})

$("#X").click(function(){
    let opX = 1;
    $(".option").hide()
    $(".container").show()
    $("#reset").show()
    $("header").hide()
    $("#chose").hide()
})
$("#O").click(function(){
    let opY = 1;
    $(".option").hide()
    $(".container").show()
    $("#reset").show()
    $("#chose").hide()
    $("header").hide()
})

$(".slots").click(function(){
    again = $(this).attr('id')//dont put move on already used slot
    if(p1win.includes(again)==true){
    }else if(p2win.includes(again)==true){
    }else{
if(comp!=1){

            if(count%2 == 0 ){p1win.push($(this).attr('id'))
            img = $(this).attr('id')
            $('#'+img).css("background-image", "url(../X1.png)");
        }else{ p2win.push($(this).attr('id'))
            img = $(this).attr('id')
            $('#'+img).css("background-image", "url(../O1.png)");
                }
        count++
        check(); 
            
}else{
        
        p1win.push($(this).attr('id'))
        comwin.push($(this).attr('id'))
        img = $(this).attr('id')
        $('#'+img).css("background-image", "url(../X.JPG)");
        check();

        console.log("this is the first comwin "+comwin)
        if(count!=8){
        rand = Math.floor(Math.random() * 9) + 1;
        while (comwin.includes(rand)==true){
            console.log("hey")
            rand = Math.floor(Math.random() * 9) + 1;
          }
          while (comwin.includes(rand)==true){
            console.log("hey")
            rand = Math.floor(Math.random() * 9) + 1;
          }
        
        p2win.push(rand)
        comwin.push(rand)
        console.log("This is comwin " +comwin)
        console.log("this is rand " + rand)
        $('#'+rand).css("background-image", "url(../O.JPG)");
            
        count+=2
        check();
        }
        }
    }
});

function check(){
    let gameover = true;
    for (let i = 0; i < wins.length; i++) {
        p1win.sort(function(a, b){return a-b});
        p2win.sort(function(a, b){return a-b});
        if(p1win.toString() == wins[i].toString()){
            swal.fire({title: "Player 1 is the Winner!", text: "Click to restart", type: 
            ""}).then(function(){ 
               location.reload();
               }
            );
            gameover = false
        }
        if(p2win.toString() == wins[i].toString()){
            swal.fire({title: "Player 2 is the Winner!", text: "Click to restart", type: 
            ""}).then(function(){ 
               location.reload();
               }
            );
            gameover = false
        }
        if(count == 9 && gameover == true){
            gameover = false;
            swal.fire({title: "Game is TIE!", text: "Click to restart", type: 
            ""}).then(function(){ 
               location.reload();
               }
            );
        }
    }
    
}



$( "#reset" ).click(function() {
    location.reload();
  });


