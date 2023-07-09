// O(n^2) -- Time complexity
// O(1) -- Memory complexity

function twoSum(nums, target) {

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

}

// O(n) -- Time complexity
// O(n) -- Memory complexity
function twoSum2(nums, target) {
    const map = {};

    for(let i = 0; i < nums.length; i++) {
        const value = target - nums[i];

        if(map.hasOwnProperty(value)) {
            return [i, map[value]];
        }

        map[nums[i]] = i;
    }

}

const result = twoSum2([3,2,4], 6);
console.log(result);
