window.onload = function(){

let tArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares=[];

let impares=[];

for(i=0; i<tArray.length; i++){

    if(tArray[i]%2==0){

        pares.push(tArray[i]);
    } else 

    impares.push(tArray[i]);


}

for(i=0; i<pares.length; i++){

    console.log(pares[i]);
}

for(i=0; i<impares.length; i++){

    console.log(impares[i]);
}

function par(value, index)
{
return value%2==0;

}

console.log(tArray.filter(par));


function impar(value, index)
{
return value%2!==0;

}

console.log(tArray.filter(impar));

}