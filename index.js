function writeCards(names, eventNAme){
    let newArr = [];
    for (let i = 0; i < names.length; i++) {
        
        newArr.push(`Thank you ${names[i]}, for the wonderful ${eventNAme} gift!`)
        
    }
    console.log(newArr);
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(num){
    while(0 <= num){
        console.log(num--);
    }
}

countDown(10);