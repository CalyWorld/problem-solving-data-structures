class MaxBinaryHeap {
  constructor(){
      this.values = [41,39,33,18,27,12];
  }

  insert(element){
      this.values.push(element);
      this.bubbleUp();
      return this.values;
  }
  bubbleUp(){
      let index = this.values.length - 1;
      const element = this.values[index];
      while(index>0){
          let parentIndex = Math.floor((index-1)/2);
          let parent = this.values[parentIndex];
          if(element <= parent) break;
          this.values[parentIndex] = element;
          this.values[index] = parent;
          index = parentIndex;
      }
  }
  extractMax(){
      const max = this.values[0];
      if(this.values.length === 0) return null;
      if(this.values.length === 1){
          this.values = [];
          return max;
      }
      const lastElement = this.values.pop();
      this.values[0] = lastElement;
      this.sinkDown();
      return max;
  }
  sinkDown(){
      let index = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
          let leftChildIndex = 2 * index + 1;
          let rightChildIndex = 2 * index + 1;
          let leftChild, rightChild;
          let swap = null;

          if(leftChildIndex < length){
              leftChild = this.values[leftChildIndex];
              if(leftChild > element){
                  swap = leftChildIndex;
              }
          }
          if(rightChildIndex < length){
              rightChild = this.values[rightChildIndex];
              if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                  swap = rightChildIndex;
              }
          }

          if(swap === null) break;
          this.values[index] = this.values[swap];
          this.values[swap] = element;
          index = swap;
      }
  }
}


//[41,39,33,18,27,12]

const myHeap = new MaxBinaryHeap();
myHeap.insert(55);
myHeap.insert(100);
myHeap.insert(200);

myHeap.extractMax();
myHeap.extractMax();
myHeap.extractMax();
myHeap.extractMax();
myHeap.extractMax();
myHeap.extractMax();
myHeap.extractMax();
myHeap.extractMax();
myHeap.extractMax();
myHeap.extractMax();
