### Queue: 
* queue是FIFO的数据结构，跟stack的本质区别就是这个。<br>
* 从实现上说，基于array和linked list都是可以的。<br>

* 利用array实现queue的时候，有一个很巧妙的实现技巧，保持两个pointer: read, write. write的pointer是用来enqueue的，而read指针是用来dequeue的。<br>

* 比如下面这个图是enqueue一个c，发现write指针右移：<br>
![enqueue-array](https://github.com/baoqger/Coursera-data-structures-UCSD/blob/master/week1/img/enqueue-array.png)<br>

* 然后再dequeue一个a出来，如下图: <br>

![dequeue-array](https://github.com/baoqger/Coursera-data-structures-UCSD/blob/master/week1/img/dequeue-array%20.png)<br>

