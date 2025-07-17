let gameseq=[];
let userseq=[];
let hs=0;

let started =false;
let level =0;

let btns=["pink","orange","cyan","blue"];
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let body=document.querySelector("body");

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;
    levelUp();
    }
});


function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomidx= Math.floor(Math.random()*4);
    let randombtn=document.querySelector(`.${btns[randomidx]}`);
    gameseq.push(`${btns[randomidx]}`);
    
    gameflash(randombtn);
}

function reset(){
    started =false;
    gameseq=[];
    userseq=[];
    level=0;
}   

function checkans(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }

    else{
        h2.innerText=(` Game Over!   Yourscore :${level}
             PRESS ANY KEY TO RESTART`);
       body.classList.add("gameover");
        setTimeout(function(){
       body.classList.remove("gameover");
       },250);
       if(level>hs){
            hs=level;
            h3.innerText=` HIGH SCORE :${hs}`;

       }
       reset();
    }
}


function btnpress(){
    userflash(this);
    let usercolor=this.id;
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
        btn.addEventListener("click",btnpress);
    }

