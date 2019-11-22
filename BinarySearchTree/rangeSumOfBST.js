"use strict";
//implementation of binary search tree"
class BinarySearchTree{
    constructor(){
        this.root=null;
    }

    insertNumberNode(data, left=null, right=null){
        let Node={
            data,left,right
        };
        let currentNumberNode;

        if(!this.root){
            this.root=Node;
        }else{
            currentNumberNode=this.root;
            while(currentNumberNode){
                if(data<currentNumberNode.data){
                    if(!currentNumberNode.left){
                        currentNumberNode.left=Node;
                        break;
                    }else{
                        currentNumberNode=currentNumberNode.left;
                    }
                }else if(data>currentNumberNode.data){
                    if(!currentNumberNode.right){
                        currentNumberNode.right=Node;
                        break;
                    }else{
                        currentNumberNode=currentNumberNode.right;
                    }

                }else{
                    console.log("Try Different Value");
                }
            }
        }
    }
}
let BSTtest = new BinarySearchTree();
BSTtest.insertNumberNode(10);

