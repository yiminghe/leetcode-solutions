/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    function guess(x1,y){
        return x1*x1<=y;
    }
    
    let l = 0;
    let r = x+1;
    let ans=0;
    while(l<r){
        const middle = (l+r)/2|0;
        if(guess(middle,x)){
            ans=middle;
            l=middle+1;
        } else {
            r=middle;
        }
    }
    
    return ans;
};