module.exports = function reverse (n) {
    n= Math.abs(n)
    arr = n.toString().split('').reverse().join('')
    
    console.log(arr)
    let res = Number(arr)
return res    
}


/*function reverse(n){

console.log(n)
n= Math.abs(n)
let res 
let arr2 = []
arr3 = []
console.log(n)
arr = n.toString().split('').reverse().join('')
console.log(arr)

res = Number(arr2)
}



reverse(170)*/