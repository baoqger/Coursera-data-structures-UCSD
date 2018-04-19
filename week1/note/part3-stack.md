### Stack: 
* Stack是LIFO的数据结构，支持的operations包括: push, Top, Pop，Empty等，性能都是O(1)。<br>
* stack一个很好的应用就是判断balanced brackets，比如"([])[]()"就是balanced，"([]]()"就是不balanced，完全可以通过stack来实现。<br>

![stack-balance](https://github.com/baoqger/Coursera-data-structures-UCSD/blob/master/week1/img/stack-isbalanced.png)<br>

* stack可以通过array来实现，也可以通过linked list来实现。用array来实现的一个问题或者一个限制是，必须预先指定array的大小，而linked list没有这个问题。<br>

* 关于Stack总结如下：<br>
![stack-summary](https://github.com/baoqger/Coursera-data-structures-UCSD/blob/master/week1/img/stack-summary.png)<br>
