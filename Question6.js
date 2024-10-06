const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
function rearrangeFruits(fruits){
    let removedFruits=fruits.splice(-4);
    fruits.unshift(...removedFruits);
    return fruits;
}
console.log(rearrangeFruits(fruits));

