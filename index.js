// Code your solutions in this file
function writeCards(name){
    let card = [];
    for (let i=0; i < name.length; i++){
        card.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        
    }
    return card;
}
function countDown(y){
    
    while (y > 0){
        console.log(y);
    y--;
}
    console.log(y);
}
