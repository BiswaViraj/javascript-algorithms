const bubbleSort = arr => {
    let isSwapped;
    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = arr.length; i > 0; i--) {
        isSwapped = false;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return arr;
};

// console.log(bubbleSort([12, 454, 44, 74, 262, 4, 2, 1]));
