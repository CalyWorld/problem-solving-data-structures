class HashTable {
  constructor(size = 53) {
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

  get(key) {
    let hashKey = this._hash(key);
    let hashMap = this.keyMap;
    if (hashMap[hashKey]) {
      for (const element of hashMap[hashKey]) {
        if (element[0] === key) {
          return element;
        }
      }
    }
    return undefined;
  }
  values() {
    let valuesArr = [];
    let hashMap = this.keyMap;
    for (const element of hashMap) {
      if (element) {
        for (let value of element) {
          //handling duplicate values
          if (!valuesArr.includes(value[j][1])) {
            valuesArr.push(value[j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
  keys() {
    let keysArr = [];
    let hashMap = this.keyMap;
    for (const element of hashMap) {
      if (element) {
        for (let value of element) {
          //handling duplicate values
          if (!keysArr.includes(value[j][0])) {
            keysArr.push(value[0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let hashT = new HashTable(17);
hashT.set("maroon", "#800000");
hashT.set("yellow", "#FFFF00");
hashT.set("olive", "#808000");
hashT.set("salmon", "#FA8072");
hashT.set("lightcoral", "#F08080");
hashT.set("mediumvioletred", "#C71585");

//duplicate values
hashT.set("plum", "#DDA0DD");
hashT.set("purple", "#DDA0DD");
hashT.set("violet", "#DDA0DD");

//duplicate keys
hashT.set("plum", "#DDA0DD");
hashT.set("plum", "#DDA0DD");
hashT.set("plum", "#DDA0DD");

hashT.get("maroon");
hashT.get("yellow");
hashT.get("salmon");

hashT.values();
hashT.keys();
