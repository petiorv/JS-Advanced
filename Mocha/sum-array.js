function sum(arr) {
    let sum = 0;
    for (let x of arr){
        sum+=Number(x);
    }
    return sum;
}

//console.log(sum([2,5]));

module.exports = {sum};