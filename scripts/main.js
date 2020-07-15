const operations = {
    "+": (a,b) => {
        return a + b;
    },
    "x": (a,b) => {
        return a * b;
    },
    "/": (a,b) => {
        return Math.floor(a / b);
    },
    "-": (a,b) => {
        return a - b;
    }
}
const format = (exp) => {
    let arr = exp.split(" ");
    arr[0] = Number(arr[0]);
    arr[2] = Number(arr[2]);
    return arr;
}
const evaluate = (arr) => {
    let answer = operations[arr[1]](arr[0],arr[2])
    return answer;
}