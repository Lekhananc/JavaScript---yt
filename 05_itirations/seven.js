const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((nums) => {
//     nums = nums+10;
//     return nums;
// })

// const newNums = myNums.map((nums => nums+10))
// console.log(newNums);

myNums.forEach((nums)=>{
    nums = nums+10;
    // console.log(nums);
});
// -------------------------------------------------------
// chaining

// const newNums = myNewNums.map().map().filter()

const newNums = myNums
                .map((nums) => nums*10)
                .map((nums) => nums+1)
                .filter((nums) => nums>51);

console.log(newNums);
