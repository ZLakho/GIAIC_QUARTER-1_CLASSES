//----------------Q1 : write a function that check whether a number is even or odd
// function EvenOdd(n:number){
//     if (n%2==0){
//         console.log("Number is Even")
//     }
//     else{
//         console.log("Number is odd")
//     }
// }

// EvenOdd(7)
// EvenOdd(6)

//-----------Q2
// function ArrayOperations(){
//     let arr = [1,2,3,4,5,6,7,8,9,10]
//     console.log("real array: "+arr)
//     arr.push(11)
//     console.log("array after adding a new number " +arr)
//     arr.shift()
//     console.log("After removing the number " + arr)
//     arr = arr.splice(4,1,88)
//     console.log("removing the number " + arr)

// }
// ArrayOperations()

//-----------Q3: an function that multiply array by 2 and returns modified array
// function multiply(a: number[]){
//     for(let i = 0 ; i < a.length ; i++){
//         a[i] = a[i]*2
//     }
//     return a
// }
// console.log(multiply([1,2,3,4,5]))

//-----------Q4: 
// function largestArray(n:number[]){
//     let largest = n[0]
//     for(let i = 0 ; i < n.length ; i++){
//         if(n[i]>largest){
//             largest = n[i]
//         }
//     }
//     return largest
// }

// console.log(largestArray([2,3,44,56,32,654,32,99]))

//-----------Q5:
// function reverseString(s:string){
//     let reverse = ""
//     for(let i = s.length-1 ; i >= 0 ; i--){
//         reverse = reverse + s[i]
//     }
//     return reverse
// }
// console.log(reverseString("Zainab Lakho"))

