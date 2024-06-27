// Map is callback function , its opinion  (better than forEach)

// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => num + 10 )    // => {return num + 10} scope open karke bhi likh sakte hai

// console.log(newNums);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// chaining

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers
                .map( (num) => num * 10)
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 )
console.log(newNums);

// Nodelist keliye ForEach use kare

        //  OR

// Nodelist ko array mai convert karke jo loop/function 
// lagana hai woh lagaiye

//+++++++++++++++++++++++++++++++++++++++++++++++++++

// HTML collection ko convert kaise kare ?  ( convert in array)

//Example

Array.from(tempClassList);

const myConvertedArray = Array.from(tempClassList);

myConvertedArray.forEach(function (li) {
    li.style.color = 'orange'
})