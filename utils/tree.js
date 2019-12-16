

function write(s){
  process.stdout.write(s+'');
}

function getN(n,l){
  var s=n;
  const prefix=typeof s !=='number'?s:'0';
  s+='';
  while(s.length<l){
    s=prefix+s;
  }
  return s;
}

function getL(arr){
  let l=-1;
  arr.forEach(t=>{
    if(t){
      t+='';
      if(t.length>l){
        l=t.length;
      }
    }
  });
  return l;
}

function getLevel(arr){
  const l = arr.length;
  let index=0;
  let limit=1;
  let element;
  let level=0;
  while(index<l){
    let count=0;
    while(index<limit && index<l){
      element=arr[index];
      if(element){
        count++;
      }
      index++;
    }
    level++;
    limit+=count*2;
  }
  return level;
}

const api = module.exports = {
  createTree(arr){
    arr.forEach((element,index) => {
      if(arr[index]){
        arr[index]={
          val:element,
        }
      }
    });
    const l = arr.length;
    let index=0;
    let limit=1;
    let element;
    while(index<l){
      let count=0;
      while(index<limit && index<l){
        element=arr[index];
        if(element){
          const base = count;
          const left = limit+2*base;
          const right=left+1;
          element.left=arr[left];
          element.right=arr[right];
          count++;
        }
        index++;
      }
      limit+=count*2;
    }
    return arr[0];
  },
  visualizeTree(arr){

  }
};