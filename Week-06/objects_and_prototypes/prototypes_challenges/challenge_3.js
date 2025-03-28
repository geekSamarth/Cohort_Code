function Counter() {
    (this.count = 0);
 }
 Counter.prototype.increment = function () {
   return (this.count += 1);
 };
 Counter.prototype.decrement = function () {
     return this.count -= 1;
 };
 
 // console.log(Counter.decrement());
 let counter = new Counter();
 console.log(counter.increment());
 