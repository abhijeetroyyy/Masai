function reverseWords(str){
    let word = str.split(" ");
    let reverseWords = [];
    for (let i = 0; i < word.length; i++) {
        let reverseWord ="";
        for(let j=word[i].length-1;j>=0;j--){
            reverseWord += word[i][j];
        }
        reverseWords.push(reverseWord);
    }
    return reverseWords.join(" ");
}


const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"

