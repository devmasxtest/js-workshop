class MyPromise {
  value;
  error;
  hasError: boolean;

  constructor(handler) {
    handler(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    // console.log(value);
    this.hasError = false;
    this.value = value;
  }

  reject(error) {
    this.error = error;
  }

  then(cb) {
    cb(this.value);
    return this;
  }

  catch(cb) {
    if (this.hasError) {
      cb(this.error);
    }

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
