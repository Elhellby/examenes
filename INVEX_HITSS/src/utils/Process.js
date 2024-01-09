const isPrime = numero => {
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return false;
    }
    return true;
}



module.exports = {
    primeNumber: (umpteenth) => {
        let _primeNumber = []
        for (let y = 0; y <= umpteenth; y++) {
            if (isPrime(y))
                _primeNumber.push(y)
        }
        return _primeNumber
    },
    multipleThree: (umpteenth) => {
        let _multipleThree = []
        for (let x = 1; x <= umpteenth; x++) {
            if (x % 3 == 0) {
                _multipleThree.push(x)
            }
        }
        return _multipleThree
    }
}
