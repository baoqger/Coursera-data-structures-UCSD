### Single Linked List: 
* 由key和next pointer构成。<br>
![single-list](https://github.com/baoqger/Coursera-data-structures-UCSD/blob/master/week1/img/single-linked-list.png)<br>
一些常用的API如下：<br>
![list-api](https://github.com/baoqger/Coursera-data-structures-UCSD/blob/master/week1/img/list-API.png)<br>
Linked-list的实现，有些只有header，有些还有tail<br>

![list-api-runtime](https://github.com/baoqger/Coursera-data-structures-UCSD/blob/master/week1/img/list-runtime.png)<br>

No tail和with tail如果有区别的话，with tail那一列就会有内容。 另外，这里面比较难理解的是：AddBefore()和PopBack()

### Double Linked List: 
* 两个pointer，bidirectional就行了。可以让AddBefore和PopBack的运行成本降为常量级别<br>
