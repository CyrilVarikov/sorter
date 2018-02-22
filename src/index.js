class Sorter {
  constructor() {
     this.arr = [];
     this.compare;
     this.hardCompare = 0;

  }

  add(element) {
    return this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }



  sort(indices) {
    var tempArr = [];
    indices.sort(function (a, b) {
      return a - b;
    });
    if (indices.length !== 1) {
      for (var i = 0; i < indices.length; i++) {
        tempArr.push(this.arr[indices[i]]);
      }
      if (this.hardCompare === 1) {
        tempArr.sort(this.compare);
      } else {
        tempArr.sort(function (a, b) {
          return a - b;
        });
      }
      for (var j = 0; j < tempArr.length; j++) {
        this.arr.splice(indices[j], 1, tempArr[j]);
      }
    }
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
    this.hardCompare = 1;
  }
}

module.exports = Sorter;
