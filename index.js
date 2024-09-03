        
        let scores=JSON.parse(localStorage.getItem('score'))||{
                Wins:0,
                Losses:0,
                Ties:0
            };

        updateScore();
        function reset(){
            scores.Wins=0;
            scores.Losses=0;
            scores.Ties=0;
             localStorage.removeItem('score');
             updateScore();
        }
      
        let intervalId;

        document.querySelector('.rock-btn').addEventListener('click',()=>{
            gamePlay('rock');
        });
        document.querySelector('.paper-btn').addEventListener('click',()=>{
            gamePlay('paper');
        });
        document.querySelector('.scissors-btn').addEventListener('click',()=>{
            gamePlay('scissors');
        });

        document.body.addEventListener('keydown',(event)=>{
           if(event.key==='r' || event.key==='R')
           gamePlay('rock');
           else if(event.key==='p' || event.key==='P')
           gamePlay('paper');
           else if(event.key==='s' || event.key==='S')
           gamePlay('scissors');
        });


        function gamePlay(Playermove){
            let result='0';
            if(Playermove==='scissors'){
                comove=fn();
               
                if(comove==='rock')
                result='You Lost!';
                else if(comove==='paper')
                result='You Win!';
                else if(comove==='scissors')
                result='Tie';
                
            }
            if(Playermove==='paper'){
                comove=fn();
                if(comove==='rock')
                result='You Win!';
                else if(comove==='paper')
                result='Tie';
                else if(comove==='scissors')
                result='You Lost!';
               
            }
            if(Playermove==='rock'){
                comove=fn();
                if(comove==='rock')
                result='Tie';
                else if(comove==='paper')
                result='You Lost!';
                else if(comove==='scissors')
                result='You Win!';
               
            }
           if(result==="You Win!")
           scores.Wins+=1;
           else if(result==="You Lost!")
           scores.Losses+=1;
           else if(result==="Tie")
           scores.Ties+=1;
           
           localStorage.setItem('score',JSON.stringify(scores));
           
           updateScore();
      
            document.querySelector('.js-gameResult').innerHTML=result;
            document.querySelector('.js-moves').innerHTML=`You <img src="images/Rock Paper Scissors_files/${Playermove}-emoji.png"class="move-img">  
            <img src="images/Rock Paper Scissors_files/${comove}-emoji.png"  class="move-img"> computer`;

   }
        function updateScore(){
            document.querySelector('.js-score').innerHTML=`Wins:${scores.Wins}  Losses:${scores.Losses}  Ties:${scores.Ties}`;
        }
        
        function fn(){
            let comove='';
            const random1=Math.random();
            if(random1>=0 && random1<1/3) comove='rock';
            else if(random1>=1/3 && random1<2/3)  comove='paper';
            else if(random1>=2/3 && random1<1)  comove='scissors';
        return comove}
