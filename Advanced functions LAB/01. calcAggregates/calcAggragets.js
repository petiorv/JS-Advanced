function reduce(arr, func) {
    let result = arr[0];
    for (let nextElement of arr.slice(1)) {
        result = func(result, nextElement);
    }
    console.log(result)
}
function calcAggregates(arr) {
    console.log('Sum = ' +
    reduce(arr, (a,b) => a+b))
    console.log('Min = '+
    reduce())
}

reduce([5, 10, 20], (a,b) => a+b);