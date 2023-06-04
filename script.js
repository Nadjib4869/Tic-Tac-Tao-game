 let griditems = document.getElementsByClassName('tile')
 let currturn = 'X'
 let wino = 0
 let winx = 0
 let gamefinished = false

let boardArray = [
    '0' , '1' , '2',
    '3' , '4' , '5',
    '6' , '7' , '8'
]

 for (const item of griditems ) 
 {
    item.addEventListener('click', function(){

        if (gamefinished) {
            return
        }

        let val=item.getAttribute('value');

        let index=val-1;
        if(boardArray[index] =='X' || boardArray[index] =='O') {
            return
        }


        //filling the values visually
        let tilecontent = document.querySelector(`.tile[value="${val}"]`);
        //i spend a whole week to figure out the problem and it was ```
        tilecontent.innerHTML =currturn;


        //filling the values logically
        boardArray[index] = currturn

console.log(boardArray)

        evaluateboard()

        if(currturn =='X') {
            currturn='O'
        }else {
            currturn='X'
        }

        document.getElementById("instruction").textContent = `${currturn} turn`

 })

 function evaluateboard () {
    if (
        //rows
        (boardArray[0] == boardArray[1] && boardArray[1] == boardArray[2]) ||
        (boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5]) ||
        (boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8]) ||
        //columns
        (boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6]) ||
        (boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8]) ||
        (boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7]) ||
        //diagonal
        (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8]) ||
        (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6])

        ){
        var winner = currturn == 'O' ? 'O' : 'X' //? == then : == else
            gamefinished = true 
        
            if (winner == 'O') { wino+=1 } else if (winner == 'X') {winx+=1}

       

        Swal.fire({
        imageUrl: 'images/winner cup.jpg',
        imageHeight: 150,
        text: `${winner} Won!`,
        imageAlt: 'Cup img'
      })
     
      document.getElementById("scoreboard_scorex").innerHTML = winx;
      document.getElementById("scoreboard_scoreo").innerHTML = wino;

      
    }


    var isdraw = true
    for (tile of boardArray){
        if(tile !='X' && tile != 'O') {
            isdraw = false
        }
    }
    if (isdraw) {
        gamefinished = true
        Swal.fire({
            imageUrl: 'images/draw img.png',
            imageHeight: 150,
            text: ``,
            imageAlt: 'draw img'
          })
    }
    
 }
 }

document.getElementById('reset-btn').addEventListener('click', function(){
    reset()
})

function reset(){
    //reseting the visual part
    for(item of griditems){
        let val = item.getAttribute('value')
        let tilecontent = document.querySelector(`.tile[value="${val}"]`);
        tilecontent.innerHTML ='';

        boardArray = [
            '0' , '1' , '2',
            '3' , '4' , '5',
            '6' , '7' , '8'
        ]

    }
    gamefinished = false
    //wino = 0;
    //winx = 0;
    currturn = "X";
    document.getElementById("instruction").textContent = `${currturn} turn`;
    //document.getElementsById("scoreboard_scorex").innerHTML = winx;
    //document.getElementsById("scoreboard_scoreo").innerHTML = wino;

}
