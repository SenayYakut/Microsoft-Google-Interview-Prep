function Node(data){
    this.data=data;
    this.next=null;
}

function SinglyLinkedList(){
    this._length=0;
    this.head=null;
}

SinglyLinkedList.prototype.add=function(value){
    var node=new Node(value),
    currentNode=this.head;

    if(!currentNode){
    this.head=node;
    this._length++;
    return node;
    }
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    this._length++;
    return node;

};

SinglyLinkedList.prototype.findByPosition=function(position){
    var currentNode=this.head,
    var length=this._length;
    var count=1;

    if(length===0 || position<1 || position>length){
        return false;
    }
    while(count<position){
        currentNode=currentNode.next;
        count++;
    }
};

SinglyLinkedList.prototype.remove=function(position){
    var currentNode=this.head;
    var length=this._length;
    var count=0;
    var beforeNodeToDelete = null;
    var nodeToDelete = null;
    var deletedNode = null;

    if(position<0 || position>length){
        return false;
    }else if (position===1){
        this.head=currentNode.next;
        deletedNode=currentNode;
        currentNode=null;
        this._length--;

        return deletedNode;
        
    }
    while(count<position){
    beforeNodeToDelete.next=currentNode;
    nodeToDelete=currentNode.next;
    count++;
  }
  beforeNodeToDelete.next = nodeToDelete.next;
deletedNode = nodeToDelete;
nodeToDelete = null;
this._length--;

return deletedNode;
}





