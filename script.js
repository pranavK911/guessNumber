let secretNumber =Math.trunc(Math.random() * 20) + 1;
 console.log(secretNumber)
let score=20;

// let score=Number(document.querySelector('.score').value);
// console.log(score);
let guess=document.querySelector('.guess');
let highScore=document.querySelector('.highscore');
let scr=document.querySelector('.score');

document.querySelector('.Check').addEventListener('click',function(){
    let guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent='plese enter a number'
    }
    // console.log(guess)
    else if(secretNumber===guess){
        
        document.querySelector('body').style.background='green'
        document.querySelector('.message').textContent='you guess right'
        document.querySelector('.number').innerHTML=guess;
        highScore.textContent=score;

    }
    else if(secretNumber>guess){
        if(score>1){
            document.querySelector('.message').textContent='your number is low'
            score--;
            scr.textContent=score;

        }else{
            document.querySelector('.message').textContent='you lost the game'
            document.querySelector('body').style.background='red' 
        }
        
    }
    else if(secretNumber<guess){
        if(score>1){
            document.querySelector('.message').textContent='your number is high'
            score--;
            scr.textContent=score;
        }else{
            document.querySelector('.message').textContent='you lost the game'
            document.querySelector('body').style.background='red'
        }
    }
})

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.background='#222';
    document.querySelector('.number').innerHTML='?';
    document.querySelector('.guess').value=' ';
    document.querySelector('.message').textContent='Start guessing...'
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    src.textContent =20;

      console.log(secretNumber)
})
// document.querySelector('p').addEventListener('click',function(){
//     document.querySelector('p').style.background='red';
// })