const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const digitCount = num => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const maxDigit = arr => {
    let max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        max = Math.max(max, digitCount(arr[i]));
    }

    return max;
};

const radixSort = arr => {
    let max = maxDigit(arr);
    for (let i = 0; i < max; i++) {
        let bucket = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            bucket[digit].push(arr[j]);
        }

        arr = [].concat(...bucket);
    }

    return arr;
};

// console.log(radixSort([45, 454, 12, 76, 66, 41, 454, 66, 12, 789, 332, 11, 2]));
