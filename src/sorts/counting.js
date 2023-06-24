const countingSort = (arSize, divSizes, divs, div_update) => {

    var n = arSize;
    var key = 0;
    var output = new Array(n);
    var k = 0;
    k = findBiggestValue(n, k, divSizes);
    var count = new Array(k+1).fill(0);

    for (let i = 0; i < n-1; i++) {
        var j = key(divSizes[i]);
        count[j] = count[j] + 1;
    }

    for(let i = 1; i < k; i++) {
        count[i] = count[i] + count[i-1];
    }

    for(let i = n-1; i>0; i--) {
        j = key[divSizes[i]];
        count[j] = count[j] - 1;
        output[count[j]] = divSizes[i]; // treba ubacit div_update i zamijenit ovaj output nekako
    }

    
};

const findBiggestValue = (n, k, divSizes) => {

    for(let i = 0; i < n-1; i++) {
        if(divSizes[i] > k) {
            k = divSizes[i];
        }
    }

    return k;
};
  
export default countingSort;