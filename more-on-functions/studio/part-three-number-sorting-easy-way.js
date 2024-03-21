//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
arrayName.sort(function(a, b){return a-b});
//Sort each array in decending order.
arrayName.sort(function(b, a){return b-a});

console.log (nums1.sort);
console.log (nums2.sort);
console.log (nums3.sort);

console.log(nums1.reverse);
console.log(nums2.reverse);
console.log(nums3.reverse);
