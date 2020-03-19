const linearSearch = (arr, elem) => {
    let foundIndices = [];
    for (let i = 0; i < arr.length; i++) {
        if (elem == arr[i]) {
            foundIndices.push(i);
        }
    }
    return foundIndices;
};

console.log(linearSearch([1, 2, 3, 4, 5, 4], 4));
