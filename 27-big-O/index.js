

const reverse = string => {

    // "matt" => "ttam"
    // n = 4, 1 + 4 + 1
    // "loves" => "sevol"
    // n = 5, 1 + 5 + 1
    // “vaporwave” => “evawropav”
    // O(n)

    let result = ""

    for (let i = 0 ; i < string.length ; i++) {
        result = string[i] + result
    }

    return result

}



const isPalindrome = string => {

    // "vaporwave" => false
    // "civic" => true

    let result = true

    const requiredLength = Math.floor( string.length / 2 )

    for (let i = 0 ; i < requiredLength ; i++) {

        console.log(i, string[i])
        console.log(string.length - 1 - i, string[string.length - 1 - i])

        if (string[i] !== string[string.length - 1 - i]) {
            console.log("Counterexample")
            result = false
        }

    }

    return result

}

const findChar = (string, target) => {

    // ("vaporwave", "o") => 3
    // ("vaporwave", "s") => null

    let result = null
    let i = 0

    while (!result && i < string.length) {

        console.log(i)

        if (string[i] === target) {
            result = string[i]
        }


        i++
    }

    return result

}






const linearSearch = (arr, target) => {


    for (let i = 0; i < arr.length; i++) {
      console.log(`Remaining elements to search: ${arr.length - i}`);
  
      const elem = arr[i];
      if (elem === target) {
        return target;
      }
    }
    return false;
  };


const binarySearch = (arr, target) => {

    // Assumes that arr is ordered


    console.log(`Remaining elements to search: ${arr.length}`);
  
    const midpoint = Math.floor(arr.length / 2);
    const middle = arr[midpoint];
  
    if (arr.length <= 1) {
      return middle === target ? target : false;
    }
  
    if (middle === target) {
      // we found the thing
      return target
    } else if (middle >= target) {
      // let's look in the first half
      return binarySearch(arr.slice(0, midpoint), target);
    } else if (middle < target){
      // let's look in the second half
      return binarySearch(arr.slice(midpoint), target);
    }
  };






  const repeatsLetters = string => {

    // "vaporwave" => true
    // "grape" => false

    let result = false

    for (let i = 0 ; i < string.length ; i++) {

        const firstLetter = string[i]

        for (let j = i + 1 ; j < string.length ; j++) {

            const secondLetter = string[j]

            console.log(i, j)

            if (firstLetter === secondLetter) {
                result = true
            }
        }
    }

    return result


  } 



  const repeatsLettersQuickly = string => {

    let result = false

    const hash = {}

    for (let i = 0 ; i < string.length ; i++) {

        const char = string[i]

        console.log(char)
        console.log(hash)
        

        if (hash[char]) {
            result = true
        }

        console.log(result)

        hash[char] = true

    }

    return result


  }