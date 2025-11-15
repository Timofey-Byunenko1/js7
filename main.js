function Deleter(word, funs) {

return word
.split("")
.filter(num => num !== funs)
.join("")
}


console.log(Deleter("hello", "l"));
 





//2//
 function removeElement(array, item) {

console.log(array.filter(am => am !== item));

}

removeElement([1,3,4,5,6,8], 6)





//не понял//
function Allnumbers(massiv) {
    const nums = massiv.filter( nam = typeof 'number' )
    for (let index = 0; index < nums; index++) {
        console.log(index / 2);     
    }
}

Allnumbers([1,2,3,"a"])