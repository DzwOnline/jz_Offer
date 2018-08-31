/*
输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    if(!head){
        return 0
    }else{
        var arr=[];
        arr.push(head.val);
        while(head.next){
            head=head.next;
            arr.push(head.val);
        }
    }
    return arr.reverse();
}