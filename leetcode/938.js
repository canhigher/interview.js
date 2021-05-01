var rangeSumBST = function (root, low, high) {
  // return the sum of all values between low and high
  // traverse tree if current.data between low and high add to total

  let total = 0;
  let current = root;
  function helper(node) {
    if (node.val >= low && node.val <= high) {
      total += node.val;
    }
    if (node.right) helper(node.right);
    if (node.left) helper(node.left);
  }
  helper(current);
  return total;
};
