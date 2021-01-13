const test = (k, arr) =>{
  return arr.some((item, indice) => arr.slice(indice + 1).includes(k - item))
}
let arr = [10, 15, 3, 7];
console.log(test(17, arr));


const check = (k, arr) => {
  for (let i = 0, {length} = arr; i < length; i++) {
    for (let j = i + 1, {length} = arr; j < length; j++ ) {
      if (arr[i] + arr[j] === k) return true;
    }
  }
  return false;
}
console.log(check(13, [10, 15, 3, 7]));


const addition_level3 = (k, arr) => {
  let comparisonArray = [];
  for (let i = 0; i< arr.length; i++) {
      if (comparisonArray.includes(arr[i])) {
        return true;
      }
      comparisonArray.push(k-arr[i])
  }
  return false;
}
console.log(addition_level3(17, [10, 15, 3, 7]))


// EXERCICE 2

let array = [3, 7, 8, 3, 6, 1];

//Sujet 2, niveau de difficulté 1
const sunset_level1 = (arr, k) => {
    let count = 0;
    for (let i = 0; i< arr.length; i++) {
        count += 1
        for (let j = i+1; j< arr.length; j++) {
            if (arr[j] >= arr[i]) {
                count -= 1
                break
                }
            }
        }
    return count
    }

    console.log(sunset_level1(arr))


  //   [3, 7, 8, 3, 6, 1]   résultat = 3
//Sujet 2, niveau de difficulté 2 
const sunset_level2 = (arr) => {
    let count = 0;
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] > Math.max( ...arr.slice(i+1))) {
            count += 1
        }
        }
        return count
}


console.log(sunset_level2(arr))

// [3, 7, 8, 3, 6, 1] Sujet 2, niveau de difficulté 3
const sunset_level3 = (arr) => {
    let count = 0;
    let max = 0;
    for (let i = (arr.length-1); i>=0; i--) {
        if (arr[i] > max) {
            max = arr[i]
            count += 1
        }
    }
    return count
}

console.log(sunset_level3(arr))
