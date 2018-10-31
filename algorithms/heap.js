class Heap {
  constructor() {
    this.storage = [];
  }
  insert(x) {
    if (this.storage.length > 0) {
      if (x >= this.storage[0]) {
        this.storage.unshift(x);
      }
      if (x < this.storage[0]) {
        this.storage.push(x);
        this.bubbleUp(this.storage.length - 1);
      }
    } else {
      this.storage.push(x);
    }
  }
  delete() {
    const res;
    if(this.storage.length === 0) return null;
    if(this.storage.length > 0){
       res = this.storage.shift();
       this.siftDown(this.storage[0])
    }
    return res;
  }

  bubbleUp(index) {
    const parentIndex = Math.floor(index - 1 / 2);
    if (this.storage[index] > this.storage[parentIndex]) {
      [this.storage[parentIndex], this.storage[index]] = [
        this.storage[index],
        this.storage[parentIndex]
      ];
      this.bubbleUp(parentIndex);
    }
  }
  siftDown(index) {
  const leftChildIndex = 2*index +1;
  const rightChildIndex = 2*index + 2;
  const maxIndex;
  if(this.storage[leftChildIndex] && this.storage[rightChildIndex]){

maxIndex = this.storage[leftChildIndex] > this.storage[rightChildIndex]? leftChildIndex : rightChildIndex;
  if( this.storage[index] <  this.storage[maxIndex]){
    [this.storage[maxIndex], this.storage[index]] = [this.storage[index],this.storage[maxIndex] ]
    this.siftDown(maxIndex)
  }
   
  }
if(this.storage[rightChildIndex]){
  if(this.storage[index] < this.storage[rightChildIndex]){
    maxIndex = rightChildIndex;
    [this.storage[maxIndex], this.storage[index]] = [this.storage[index],this.storage[maxIndex] ]
    this.siftDown(maxIndex)
  }

}
if(this.storage[leftChildIndex]){
  if(this.storage[index] < this.storage[leftChildIndex]){
    maxIndex = leftChildIndex;
    [this.storage[maxIndex], this.storage[index]] = [this.storage[index],this.storage[maxIndex] ]
    this.siftDown(maxIndex)
  }

}

  }
}
