//random kart generator by https://github.com/EvilKit
var c=0;
var kx=0;
var ky=0;
var newDiv;
document.getElementById="player1";
//random
function Random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function elem(){

    newDiv=document.createElement('div');
    newDiv.className="karta";
    newDiv.id='karta'+c;
    
    //помещаю каждый новый див в масив

    newDiv.style="background-image:url(\"img/a"+c+".jpg\")"
    newDiv.style.left=kx+"px";
     kx=kx+50;
    c++;
    pole.appendChild(newDiv);
}
while(c<31){
    elem();
}
var elem=document.getElementsByClassName('karta');

var randomKart1=Random(0,30);
var randomKart2=Random(0,30);
var randomKart3=Random(0,30);
var randomKart4=Random(0,30);
var randomKart5=Random(0,30);


if(randomKart1==randomKart2){randomKart2=Random(0,30)}
if(randomKart2==randomKart3){randomKart3=Random(0,30)}
if(randomKart3==randomKart4){randomKart4=Random(0,30)}
if(randomKart4==randomKart5){randomKart5=Random(0,30)}
//цикл который не дает выпадать одинаковым картам

function choose(){
	//рандом для карты 1
elem[randomKart1].style="position:absolute;left:0px;top:110px;width:150px;height:250px;background-image:url(\"img/a"+randomKart1+".jpg\")";
//рандом для карты 2
elem[randomKart2].style="position:absolute;left:150px;top:110px;width:150px;height:250px;background-image:url(\"img/a"+randomKart2+".jpg\")";      
//рандом для карты 3
    elem[randomKart3].style="position:absolute;left:300px;top:110px;width:150px;height:250px;background-image:url(\"img/a"+randomKart3+".jpg\")";   //рандом для карты 4
    elem[randomKart4].style="position:absolute;left:450px;top:110px;width:150px;height:250px;background-image:url(\"img/a"+randomKart4+".jpg\")";   //рандом для карты 5
    elem[randomKart5].style="position:absolute;left:600px;top:110px;width:150px;height:250px;background-image:url(\"img/a"+randomKart5+".jpg\")";   
}
