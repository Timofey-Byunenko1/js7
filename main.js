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
     const nums = massiv.filter(item => typeof item === 'number');

     const sum = nums.reduce((acc, n) => acc + n, 0);

  return sum / 2;
}

console.log(Allnumbers([2,1,3,"a"]));
