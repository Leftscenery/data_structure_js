//单项链表
//如果需要循环就把最后一个元素的 .next = head
function LinkedList(){
    function Node() {
        this.element = null;
        this.next = null;
    }
    var head = null;
    var length = 0;
    
    this.append = function (element) {
        var node = new Node();
        var innerLength = length;
        node.element = element;
        //如果是头元素
        if(innerLength==0){
            head = node;
        }else{
            //如果不是
            var current = head,
                previous = null;
            while(innerLength--){
                previous = current;
                current = current.next;
            }
            previous.next = node;
        }
        length++;
    };
    this.insert = function (element, index) {
        var node = new Node();
        var innerLength = length;
        var current = head;
        var previous;
        node.element = element;
        //如果超过了index
        if( index<0 || index>innerLength+1){
            return null
        }else{
            //插入
            if((index-1)==0){
                //头插入
                head = node;
                node.next = current;
            }else{
                //其他位置插入
                index--;
                while(index--){
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.next = current;
            }
            length++;
        }
    };
    this.removeAt = function (index) {
        var current = head;
        var previous;
        if(index <= 0 && index > length){
            return null
        }
        if(index==1){
            head = current.next;
            length--;
            return null
        }
        index--;
        while(index--){
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        length--;
    };
    this.remove = function (element) {
        var innerLength = length;
        var current = head;
        var previous;
        while (innerLength--){
            if(current.element==element){
                if(current == head){
                    head = current.next;
                }else{
                    previous.next = current.next;
                }
                length--;
                break
            }
            previous = current;
            current = current.next;
        }
    };
    this.indexOf = function (element) {
        var index = 0;
        var innerLength = length;
        var current = head;
        var previous;
        while (innerLength--){
            previous = current;
            current = current.next;
            index++;
            //没找到
            if(index == length){
                return -1
            }
            //找到了
            if(current.element == element){
                return index+1
            }
        }
    };
    this.isEmpty = function () {
        return length==0
    };
    this.size = function () {
        return length
    };
    this.getHead = function () {
        return head
    };
    this.toString = function () {
        var str = '';
        var innerLength = length;
        var current = head;
        while(innerLength--){
            str+=current.element;
            current = current.next;
        }
        return str
    };
    this.print = function () {
        console.log(this.toString());
    }
}