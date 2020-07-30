class ArrayList {
  constructor(capacity) {
    this.capacity = capacity;
    this.array = new Int32Array(capacity);
    this.length = 0;
  }

  isEmpty() {
    return this.length ? false : true;
  }

  prepend(value) {
    this.checkLength()
    for (let i = this.length - 1; i >= 0; i--) {
      const IntBox = this.array[i];
      this.array[i + 1] = IntBox;
    }
    this.array[0] = value;
    this.length += 1;
  }

  append(value) {
    this.checkLength()
    this.array[this.length] = value;
    this.length += 1;
  }

  setHead(index) {
    if (index > this.length) {
      return false;
    }
    for (let i = 0; i < this.length - index; i++) {
      this.array[i] = this.array[index + i];
    }
    this.length = this.array.length;
  }

  access(index) {
    if (index > this.length) {
      return false;
    }
    return this.array[index];
  }

  insert(index, value) {
    if (index > this.length) {
      return false;
    }
    this.checkLength()
    for (let i = this.length - index; i >= 0; i--) {
      const IntBox = this.array[i];
      this.array[i + 1] = IntBox;
    }
    this.array[index] = value;
    this.length += 1;
  }

  remove(index) {
    if (index > this.length) {
      return false;
    }
    for (let i = index; i < this.array.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.length -= 1;
  }

  checkLength() {
    if (this.length === this.capacity) {
      const doubledArray = new Int32Array(this.capacity * 2);
      this.capacity *= 2;
      for (let i = 0; i < this.length; i++) {
        doubledArray[i] = this.array[i];
      }
      this.array = doubledArray;
    }
    return;
  }

  print() {
    console.log(this.array, this.length);
  }
}

myList = new ArrayList(8);
myList.print();

for (let i = 0; i < 10; i++) {
  myList.append(i + 1);
}
myList.print();

for (let i = 0; i < 10; i++) {
  myList.prepend(i + 1);
}
myList.print();

const value = myList.access(3);
console.log(`myList.access(3) = ${value}`);

myList.insert(8, 128);
myList.print();

myList.remove(4);
myList.print();

myList.setHead(10);
myList.print();