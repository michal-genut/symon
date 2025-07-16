
const colors=[]
colors[0]=document.getElementById("yellow")
colors[1]=document.getElementById("green")
colors[2]=document.getElementById("red")
colors[3]=document.getElementById("blue")
colors[4]=document.getElementById("pink")
colors[5]=document.getElementById("turkis")
colors[6]=document.getElementById("orang")
colors[7]=document.getElementById("brown")
colors[8]=document.getElementById("purpule")
let curentcolors=[]//מערך שך צבעים של המשחק 
let randomColors=[];//מערך הצבעים שהמחשב מגריל
let curentindex=0;//אינדקס של מערך השחקן
let rundomindex=0;//אינדקס של מערך ההגרללות
let timer; let seconds = 0;
let fortimer=0;
sei=document.getElementById("si")
let se=0
let count
let startButton=document.getElementById("startButton");
startButton.onclick=startGame;
let levelalli=0

function level(levelall)
{
    // resetTimer()
    levelalli=levelall
    
}
function colorClick(event)
{
    let thisdiv=event.target;
     hivhuv2(thisdiv);
    if(randomColors[curentindex]===thisdiv)
    {
      
        

        sei.innerHTML=" points"+se++
        
        

        if(curentindex===rundomindex)
        {
            if(curentindex===count)
            {
                setTimeout(() => {
                    window.location.href = "../html/welldone.html";
                }, 750); 
            }
            curentindex=0;
            curentcolors=[];
            rundomindex++;
            startGame();
            TheBest();
        }
        else
        {
            curentindex++;
        }
    }
    else
    {
        setTimeout(() => {
            window.location.href = "../html/gameover.html";
        }, 750);
    }
    // if(randomColors.length===(curentindex+1))
    //   alert("wow")
  
}
function startGame()
{
 if(fortimer===0&&levelalli!==0 )
 {
    startTimer()
    fortimer=1
    
 }
   

    if(levelalli===0)
    {
    alert("select level please")
    }
    else
    {
     if(levelalli==="level1")
     {
        randomColors.length=5
        count=5
     }
    
     if(levelalli==="level2")
     {
        randomColors.length=7
        count=7

     }
     
     if(levelalli==="level3")
     {
        randomColors.length=15
        count=15
     }
      
      randomColors[rundomindex]=colors[Math.floor(Math.random()*9)]
      
     for(let i=0;i<(rundomindex+1);i++)
     {
        setTimeout(() => {
            hivhuv(randomColors[i])  
        },( i+1 )*500);
     }
     }
}
let totalSeconds = 59;
let timerInterval = null;
let timerElement = document.getElementById('timer');
function countdown() 
{
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  timerElement.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if (totalSeconds <= 0)
   {
    clearInterval(timerInterval);
    setTimeout(() => {
        window.location.href = "../html/gameover.html";
    }, 750);
    
   } 

  else 
  {
    totalSeconds--;
  }
}

function startTimer()
 {
  if (timerInterval) 
  {
    clearInterval(timerInterval);
  }
  totalSeconds =59;
  timerInterval = setInterval(countdown, 1000);
}


function hivhuv(randomColorsplace)
{
    randomColorsplace.classList.toggle("white");//5

        setTimeout(() => {
          
            randomColorsplace.classList.toggle("white"); //5 
        }, 750);

        setTimeout(() => {}, 750);
          
}
function hivhuv2(randomColorsplace)
{
    
      randomColorsplace.classList.toggle("lightskyblue");//5
        setTimeout(() => {
          
            randomColorsplace.classList.toggle("lightskyblue");  //5 
        }, 300);

        setTimeout(() => {
               
        }, 300);
}
        

let max;
let theSi=document.getElementById("theSi")
function TheBest()
 {
    if (localStorage.getItem("maxSi") === undefined) {
        countTrue = 0;
        max = 0;
        localStorage.setItem("maxSi", max);
    }

    if (se >= localStorage.getItem("maxSi")) {
        max = se;
        localStorage.setItem("maxSi", max);
        theSi.innerHTML="השיא שלך הגבוה ביותר מכל מי ששיחק עד כה, קולולולו " + max;
        //  alert("השיא שלך הגבוה ביותר מכל מי ששיחק עד כה, קולולולו " + max);
    }
    else {
        let xx = localStorage.getItem("maxSi") - se;
        theSi.innerHTML=`נשארו לך עוד ${xx} נקודות כדי לעבור את השיא `;
        //  alert(`נשארו לך עוד ${xx} נקודות כדי לעבור את השיא `)
    }
}

