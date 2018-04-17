### Arrays: 
* 它是一段连续的内存片段。<br>
Constant-time access, 读取和写入array的某个元素的时间成本都是常量(constant)，其实也意味着可以通过算术方法(arithmetic)来得到array中某个元素的位置。
![constant-access](https://github.com/baoqger/Coursera-data-structures-UCSD/blob/master/week1/img/constant-access.png)<br>
多维数组也是可以通过这个方法来计算的。
* 数组的基本操作的复杂度，如果是对end元素的操作，add和remove都是O(1),但是如果是对begining或者middle的元素，复杂度都是O(n). 
