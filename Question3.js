function isPalindrome(str){
    let cleanstr=str.toLowerCase().replace(/[^a-z0-9]/g,"");
    let left =0;
    let right = cleanstr.length-1;
    while (left<right){
        if (cleanstr[left] !==cleanstr[right]){
            return false;
        }
        left ++;
        right--;
    }
    return true;
}


const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);
// Output: true

