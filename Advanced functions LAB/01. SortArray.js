function solve(inputArr, sortMethod) {
    let ascendingComparator = function (a, b) {
        return a-b;
    };
    let descendingComparator = function (a, b) {
        return b - a;
    };
    let sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };
    return inputArr.sort(sortingStrategies[sortMethod]);

    // console.log(sorted)
}

//solve([14, 7, 17, 6, 8], 'desc');