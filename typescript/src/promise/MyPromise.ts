import * as fs from "fs";

class MyPromise {
  value;
  error;
  hasError: boolean;
  finish: boolean;

  constructor(handler) {
    handler(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    // console.log(value);
    this.hasError = false;
    this.value = value;
  }

  reject(error) {
    this.hasError = true;
    this.error = error;
  }

  then(cb) {
    if (this.finish && !this.hasError) {
      cb(this.value);
    }
    return this;
  }

  catch(cb) {
    if (this.hasError) {
      cb(this.error);
    }

    return this;
  }
}

const myFnc = filePath =>
  new MyPromise((resolve, reject) => {
    console.log("filePath", filePath);
    fs.readFile(filePath, { encoding: "utf8" }, (err, result) => {
      console.log("READFILE FINISH");
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

myFnc(__dirname + "text.txt")
  .then(result => {
    console.log("RESOLVE", result);
  })
  .catch(error => console.error("ERROR", error));
