function explain_callback(name, age, task) {
    console.log("Hello", name);
    console.log("Your age", age);
    task();
}

explain_callback("sogir", 17, washHand);
explain_callback("Kobir", 13, takeShower);

function washHand() {
    console.log('wash your hand');
}

function takeShower() {
    console.log('take shower');
}