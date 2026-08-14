// let arr=[1,2,3,4,5,6]

// 1) factorial using reduce

// const fact=(a,b)=>{
//     return a*b
// }
// console.log(arr.reduce(fact))



//2) factorial using for loop

// let num=6
// let fact=1

// for (let i = 1; i <= 6; i++) {
//     fact=fact*i
//     // console.log(i)
   
// }
//  console.log(fact)



// 1) factorial using reduce

 let a=7
function factorial(number){
   let arr = Array.from(Array(number+1).keys())  //arr start from 1 to 6
   let c = arr.slice(1,).reduce((a, b)=>{ 
    return a*b 
})
   return c
}


//2) factorial using for loop


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))



