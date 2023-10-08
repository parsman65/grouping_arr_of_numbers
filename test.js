let arr = [7, 8, 9, 12, 13, 17, 18, 19, 20, 22];
let newArr = [];

for (let i = 0; i <= arr.length; i++) {
    let tempArr = [];
    let first = arr.shift();
    tempArr.push(first);
    let next = arr.shift();
    while (next - first == 1) {
        tempArr.push(next);
        first++;
        next = arr.shift();
    }
    newArr.push(tempArr);
}
console.log(newArr);