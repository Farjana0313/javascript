function evenify_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            console.log(num, ": is even nubmer");
        } else {
            console.log(num, "is odd number");
        }
    }
}
nums = [5, 12, 89, 45, 18, 8];
evenify_all(nums);


friend_age = [13, 17, 18, 20, 22];
evenify_all(friend_age);