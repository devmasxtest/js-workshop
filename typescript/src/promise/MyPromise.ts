class MyPromise {
  value;
  constructor(handler) {
    handler(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    // console.log(value);
    this.value = value;
  }

  reject() {}

  then(cb) {
    cb(this.value);
    return this;
  }

  catch(cb) {
    return this;
  }
}

const mypromise = new MyPromise((resolve, reject) => {
  resolve(10);
});

mypromise
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
