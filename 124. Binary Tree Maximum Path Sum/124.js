/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    
};


// [-10,9,20,null,null,15,7]
function createTree(arr){
  arr.forEach((element,index) => {
    if(arr[index]){
      arr[index]={
        val:element,
      }
    }
  });
  const l = arr.length;
  arr.forEach((element,index) => {
    const left = 2*index+1;
    const right=left+1;
    element.left=arr[left];
    element.right=arr[right];
  });
  return arr[0];
}