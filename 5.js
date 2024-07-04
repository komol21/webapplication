var f = parseInt(prompt("first: "));
var l = parseInt(prompt("last: "));

var c =0;


for(i=f;i<=l;i++){
    if(i%4==0){
        c+=1;
    }
    else if(i%400==0 && i%100!=0){
        c+=1;
    }

}

console.log("Count of leap years in that range: "+c);