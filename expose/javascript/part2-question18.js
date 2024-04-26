function printCurrTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

function printNums() {
    printCurrTime();
    setInterval(printCurrTime, 1000);
}

printNums();