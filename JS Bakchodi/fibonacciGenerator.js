function fibonacciGenerator(n) {
    let fibArr=[];
    for (let i = 0; i < n; i++) {
        if (i<2)
        {
            fibArr[i] = i;
        }
        else {
            fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
        }
    }
    return fibArr;
}

fibonacciGenerator(5);
