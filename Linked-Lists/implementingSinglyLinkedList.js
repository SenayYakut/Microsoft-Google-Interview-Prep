class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
}

class Node{
    constructor(data, next){
        this.data=data;
        this.next=next;
    }
}
addToHead(data){
    let node;
    if(!!data){
        node = new Node(data, this.head)
            this.head=node;
            this.size+=1;
    }else {
        return null;    
    }       
}

removeFromHead(){
    if(this.size!=0){
        this.head=this.head.next;
        this.size-=1;
    }
}

find(data){
    let current=this.head;
    while(current!=null){
        if(current===data){
            return current;
        }else{
            current=current.next;
        }
    }
    return null;
}

addToTail(data){
    let node;
    let size=this.size;
    let current=this.head

    if(!!data){
        if(current===null){
            this.addToHead(data);
        }else{
            while(size >0){
                if(size===1){
                    node= new Node(data. null)
                    current.next=node;
                    this.size+=1;
                }
                    current=current.next;
                    size-=1;
                }
            }
                }else{
            return null;
        }
    }

    insertAtIndex(data, index){
        let node;
        let current;
        let size=this.size;

        if (!!data && index >= size - 1 && index >= 0) {
            current = this.head;

        if (current == null && index === 0 || index === size-1) {
                this.addToHead(data)
                return true
              }  
        if (index === 1) {
                this.addToTail(data)
                return true
              }    
              while (size > index) {
                if (size - 1 === index) {
                  node = new Node(data, current.next)
                  current.next = node
                  this.size += 1
                  return true
                }
                current = current.next
                size -= 1
              }
        
            }
            return false          
    }

