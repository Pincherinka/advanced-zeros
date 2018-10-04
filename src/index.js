module.exports = function getZerosCount(number, base) {

  let result = 0;    
  let primes = getPrimes(base);
  for (let key in primes){        
    if (primes[key] != 0){
      let resultCandidate = Math.trunc((getCount(number,key)/primes[key]));
      if (result != 0){
        result = Math.min(result, resultCandidate)
      } else result = resultCandidate;      
    }
  }
  return result;
}

function getPrimes(num) {

  let primes = {};
  let numTemp = num; 
  for (let i = 2; i <= numTemp; i++){
    if (num % i === 0) { 
      let k = 0;             
      while (numTemp % i === 0){
        k++;       
        numTemp/=i;        
      }
       primes[i] = k;        
    }  
  } 
  return primes;
}

function getCount(number, prime){
  
  let i = prime;
  let count = 0;
  while (number/i >= 1){    
    count += Math.floor(number/(i));
    i *= prime;
  }
  return count;
}

