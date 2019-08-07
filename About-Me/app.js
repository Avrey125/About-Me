"use strict"; 
var name = prompt("Welcome to my page! Im Avrey, whats your name?")

if(name === name){alert("Hi " + name );}


var color = prompt("Is Orange my favorite color? (y/n)").toLowerCase()

if(color === "y" || color === "yes" ){alert("You're Correct!!!!");}
else{
    alert("Try again!");
}



var shoe = prompt("do i wear a size 11 (y/n)").toLowerCase()

if( shoe === "y" || shoe === "yes"){alert(name + ",do you steal my shoes or something???");}
else{alert("Guess again!")};



var bro = prompt("is my brothers name austin(y/n)?").toLowerCase()

if(bro === "y" || bro === "yes"){alert(name + ", your gettin kinda creepy");}
else{"I mean, how would you know right????"};

var sis = prompt("is my sisters name victoria(y/n)?").toLowerCase()

if(sis === "y" || sis === "yes"){alert(name + ", do you stalk her to???")}
else{"good, at least you dont know that" + name};

var jess = prompt("is my aunts name jessica (y/n)?").toLowerCase()

if(jess === "y" || jess === "yes"){alert(name + ", im calling the police!")}
else{"howd you know the other stuff but not that?"};



if (color === 'y' || color === 'yes'){
    console.log( name + 'knows my favorite color!')
}else{console.log('isnt my favorite color kinda obvious...')};

if( shoe === "y" || shoe === "yes"){console.log(name + "knows my shoe size is 11!");}
else{console.log( name + "couldnt figure it out")}

if( bro === "y" || bro === "yes"){console.log(name + "knows my brothers name is austin");}
else{console.log( name + "struck out")}

if( sis === "y" || sis === "yes"){console.log(name + "knows my sisters name is victoria");}
else{console.log( name + "ultimatley failed")}

if( jess === "y" || jess === "yes"){console.log(name + "knows my aunts name is jessica");}
else{console.log( name + "is a really bad guesser")}