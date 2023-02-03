function evenify(num) {
    var result;
    if (num % 2 == 0) {
        result = num;
    } else {
        result = num * 2;
    }
    return result;
}
var result = evenify(10);

var square = result * result;

console.log('result ', square);

function evenify_all(nums) {
    var even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num);
        even_array.push(result);
    }
    return even_array;
}
nums = [5, 12, 89, 45, 18, 8];
// evenify_all(nums);
const nums_even = evenify_all(nums);
console.log(nums_even);

friend_age = [13, 17, 18, 20, 22];
// evenify_all(friend_age);