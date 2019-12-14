
class BookStack{
    constructor(){
    this.stack=[];
    }
    get length(){
        return this.stack.length;
    }
    push(item){
        return this.stack.push(item);
    }
    pop(){
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.length-1];
    }
    isEmpty(){
        return this.length===0;
    }
}
//another method is using the closure
function BookStack(){
    const stack=[];
    return {
        push(item){
           return  stack.push(item);
     },
        pop(){
            return stack.pop();
        },
        peek(){
            return stack.[this.length-1]
        }
        get length(){
            return stack.length;
        },
        isEmpty(){
            return this.length===0;
        }
    }
}

let myBookStack=new BookStack();
myBookStack.push("oathbringer");
myBookStack.push("The Stand");
console.log(myBookStack.length); // 2
console.log(myBookStack.peek()); // The Stand
myBookStack.pop();
console.log(myBookStack.length); // 1
console.log(myBookStack.peek()); // Oathbringer
console.log(myBookStack.isEmpty()); // false
myBookStack.pop();
console.log(myBookStack.isEmpty());//true