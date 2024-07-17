taskOne(function() {
    taskTwo(function() {
        taskThree();
    });
});
function taskOne() {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log("this is task 1");
            resolve();
        }, 500);
    });
}
function taskTwo() {
    return new Promise((resolve) => {
        console.log("this is task 2");
        resolve();
    });
}
function taskThree() {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log("this is task 3");
            resolve();
        }, 1000);
    });
}
taskOne()
    .then(taskTwo)
    .then(taskThree);
