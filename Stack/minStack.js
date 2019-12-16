var MinStack = function() {
    this.repo = [];
  };
  
  /** 
   * @param {number} x
   * @return {void}
   */
  MinStack.prototype.push = function(x) {
    if (!isNaN(x)) {
      this.repo.push(x);    
    }
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function() {
    return this.repo.pop();
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function() {
    return this.repo[this.repo.length - 1];
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function() {
    if (this.repo) {
      const copy = this.repo.slice(0);
      return copy.sort((a,b) => a - b)[0];
    }
  };

  var minStack= new MinStack();
  minStack.push(11);
  minStack.push(224);
  minStack.push(90);
  minStack.push(23);
  minStack.push(45);
  console.log(minStack);
  minStack.pop();
  minStack.top();
  console.log(minStack.getMin());