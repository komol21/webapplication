var f= parseInt(prompt("enter first number: "));
var l= parseInt(prompt("enter last number: "));

console.log("Average of even numbers in that range: "+EavgNum(f,l));
console.log("Average of odd numbers in that range: "+OavgNum(f,l));

function EavgNum(f,l){
    var s =0;
    var c=0;
    for(i=f;i<=l;i++){
        if(i%2==0){
            s+=i;
            c+=1;
            
        }
    }
    var avg= s/c;
    return avg
}


function OavgNum(f,l){
    var s =0;
    var c=0;
    for(i=f;i<=l;i++){
        if(i%2!=0){
            s+=i;
            c+=1;
            
        }
    }
    var avg= s/c;
    return avg

}