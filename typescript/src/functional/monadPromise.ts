const convert2Float = async text => parseFloat(text);
const double = async num => {
  if (num > 10) {
    throw new Error(num);
  }
  return num * 2;
};

const round = async num => Math.round(num);

convert2Float("9")
  .then(double)
  .then(round)
  .then(() => console.log("Ultimo paso"))
  .catch(err => console.error("Catch", err));
