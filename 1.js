//在一个二维数组中（每个一维数组的长度相同），
//每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
//请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数
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