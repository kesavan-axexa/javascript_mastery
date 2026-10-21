function isPalindrome(x) {
    let reverseString = "";
    for (let i = x.length - 1; i >= 0; i--) {
        reverseString += x[i]
    }
    if (reverseString === x) {
        return true
    }
    else {
        return false
    }
}
const res = isPalindrome("madam")
console.log(res);
