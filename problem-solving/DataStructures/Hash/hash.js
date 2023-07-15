class hashTable {
  constructor(size = 10) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    //hash key
    let hashKey = this._hash(key);
    //get the hashMap
    let hashMap = this.keyMap;
    //is there anything inside our hashkey index inside the hashMap ?
    // we create a nested array at that index which is our hashkey so we can store things since we have a hashKey already
    if (!hashMap[hashKey]) {
      hashMap[hashKey] = [];
    }
    //we push the key and value at the index(hashkey) in our hashMap
    hashMap[hashKey].push([key, value]);
    return this.keyMap;
  }
}

let hashT = new hashTable();
hashT.set("hello", "100");
hashT.set("hi", "100");
hashT.set("how", "100");
hashT.set("ok", "100");
hashT.set("yes", "100");
