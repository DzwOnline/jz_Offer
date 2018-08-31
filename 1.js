function Find(target, array)
{
    // write code here
    let len=array.length,i=0,j=len-1;
    while(i<=len-1&&j>=0){
        if(target===array[j][i]){
            return true;
        }else if(target>array[j][i]){
            i++;
        }else{
            j--;
        }
    }
    return false;
    
}
console.log(Find(7,[[1,2,8,9],[2,4,9,12],[4,6,10,13],[6,8,11,15]]));