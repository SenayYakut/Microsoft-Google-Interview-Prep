class MovieQueue{
    constructor(){
        this.queue=[];
    }
    enqueue(item){
        return this.queue.unshift(item);
    }
    dequeue(){
        return this.queue.pop();
    }
    peek(){
        return this.queue[this.length-1];
    }
    get length(){
        return this.queue.length;
    }
    isEmpty(){
        return this.queue.lenght===0;
    }
}

const myMovieQueue=new MovieQueue();
myMovieQueue.enqueue("Frozen Two");
myMovieQueue.enqueue("Ice Age");
myMovieQueue.enqueue("Shrek");
console.log(myMovieQueue.length);
console.log(myMovieQueue.peek());
myMovieQueue.dequeue();
myMovieQueue.dequeue()
console.log(myMovieQueue.peek());