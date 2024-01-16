
var x = Math.floor(Math.random() * 6)+1;
var setimage= "dice"+ x +".png";
var red= "images/" + setimage;
var me = document.querySelectorAll("img")[0];
me.setAttribute("src", red);
var b = Math.floor(Math.random()* 6)+1;
var image= "dice"+ b +".png";
var ed= "images/" + image;
var men = document.querySelectorAll("img")[1];
men.setAttribute("src", ed);
    if(x > b){
    document.querySelector("h1").innerHTML="Player1 wins";
    }else if(x < b){
    document.querySelector("h1").innerHTML="player2 wins";
    }else{
        document.querySelector("h1").innerHTML="try again"; 
    }