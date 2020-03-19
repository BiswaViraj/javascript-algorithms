const binarySearch = (arr, elem) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (start <= end) {
        if (arr[middle] == elem) {
            return middle;
        }

        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
};

console.log(binarySearch([10, 12, 14, 16, 18, 20], 18));
