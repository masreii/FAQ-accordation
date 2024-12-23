var countEven = function(num) {
  let result = []
  for(let i = 1; i<=num ; i++){
        if( i %  2== 0 ){
            result.push(i)
        }
    }  

    return result
};

// console.log(countEven(4))
// console.log(countEven(30))

let angka = 9 // (angka % angka mod > angka) = angka 
let m = angka % 11
let n = Math.floor(angka/10)
console.log(m)
console.log(n)



const sumOfDigits = (n) => {
  let sum = 0;
  while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
  }
  return sum;
};

console.log(sumOfDigits(123))
