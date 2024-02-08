(function () {
  String.prototype.ensureStart = function (str) {
    return this.startsWith(str) ? this.toString() : str + this;
  };

  String.prototype.ensureEnd = function (str) {
    return this.endsWith(str) ? this.toString() : str + this;
  };

  String.prototype.isEmpty = function (){
    return !this.toString()
  }

  String.prototype.truncate = function (n){
    if (n < 4){
      return '.'.repeat(n)
    }
  }
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
console.log("".isEmpty());

console.log(str.truncate(0));
// str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// str = String.format('The {0} {1} fox',
//   'quick', 'brown');
// str = String.format('jumps {0} {1}',
//   'dog');
