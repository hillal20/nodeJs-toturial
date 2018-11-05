let arr = [1, 2, 3, 2];
//                 {} let start from the left elemnt (1)
//               /    \
//        {} not taken        {1} token
//       /  \               /     \
//     {2}   {}         {1,2}      {1}
//    / \   / \        /    \      /   \
//{2,3}{2} {} {3} {1,2,3} {1,2} {1,3}. {1}

function countSet(arr, total) {
  return rec(arr, total, arr.length - 1);
}

function rec(arr, total, i) {
  if (total === 0) {
    return 1; // only ampty {}
  } else if (total < 0) {
    return 0; // total finish
  } else if (i < 0) {
    // arr.length - 1  < 0
    return 0;
  }

  ///// let recursion
  else if (total < arr[i]) {
    // if total smaller then an element in the set so it is
    // impossibe for the sum  of the set to be less then the total , we trow that element from the set and we move to nex element

    return rec(arr, total, i - 1);
  } else {
    // we have 2 cases , we take the element and we dont take the element to cover all
    // possible sets as shown above

    return (
      rec(arr, total - arr[i], i - 1) + rec(arr, total, i - 1) // we deciced to take the element
    ); // we decide not to add the element
  }
}
countSet(arr, 3);

// let b = [1,2,3] // ['1','3','4','13','14','34','134']

// function possible(arr){

//   let result = []
//   let combination;
// function helper(str,newArr){

//       for(let i = 0; i < newArr.length; i++){

//         combination = str + newArr[i]      //  1  12  13  123   2  23  3  //
//       result.push(combination)
//        helper(combination, newArr.slice(i+1))
//       }

//   }
//   helper('',arr)

//  return result

// }
// possible(b)
