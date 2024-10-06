function countVowelsAndConsonants(str){
    let vovel=str.match(/[aeiou]/gi)?.length||0;
    let consonant=str.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length||0;
    return {vowel:vovel,consonant:consonant};
}
const result = countVowelsAndConsonants("Hello World!");
console.log(result);