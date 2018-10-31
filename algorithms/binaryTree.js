class BT {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  insert(x) {
    if (x < this.value && !this.left) {
      this.left = new BT(x);
    }
    if (x < this.value && this.left) {
      this.left.insert(x);
    }
    if (x > this.value && !this.right) {
      this.right = new BT(x);
    }
    if (x < this.value && this.right) {
      this.right.insert(x);
    }
  }

  contains(x) {
    if (this.value === x) {
      return true;
    }

    return (
      !!(this.left && this.left.contains(x)) ||
      !!(this.right && this.right.contains(x))
    );
  }
}
