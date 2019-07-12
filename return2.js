function randomNumber(){
    let decimal = Math.random();
    let times10 =  decimal *10;
    let number = Math.round(times10);
    return number;
}

console.log('I am ' + randomNumber() + ' years old!');