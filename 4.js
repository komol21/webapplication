var f = parseInt(prompt("Enter first: "));
var l = parseInt(prompt("Enter last: "));


var s=0;

for(i=f;i<=l;i++){
    if(i%2==0){
        s+=i;
    }
}

console.log("Sum of all even numbers in that range: "+s);