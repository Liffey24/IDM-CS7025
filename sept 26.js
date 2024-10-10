let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(weekDays[3]);

function greet(theDay) {
    let greeting;
    if (theDay < 6) {
        greeting = "Have a good day at work!";
    }
    else if (theDay >= 6) {
        greeting = "Enjoy your weekend!";
    }
    return greeting;
};
console.log(greet(7));
