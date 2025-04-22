const addFunc = (a, b, c) => {
    return a + b + c;
}

const isDivisibleBy5 = (num1) => {
    if (num1 % 5 == 0){
        return true;
    } else {
        return false;
    }
}

const sum = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        return null;
    }
    return a + b;
};

module.exports = {
    addFunc,
    isDivisibleBy5,
    sum,
}