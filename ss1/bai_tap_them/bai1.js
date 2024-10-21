const isPrime = num =>{
    if(num <= 1){
        return false;
    }
    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
const number = 17;
console.log(isPrime(number));
const array = [1,9,7,8,17,23,5,6]
const primeNumber = array => array.filter(isPrime);
let result = primeNumber(array);
console.log(result);
