// const sumAsync = (a, b, cb) => {
//   setTimeout(() => {
//     cb(a + b);
//   }, 2 * 1000);
// };

const sumAsync = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1 * 1000);
  });

(async function() {
  // console.time("start");
  // const r = await Promise.all([sumAsync(1, 2), sumAsync(1, 2)]);

  sumAsync(1, 2)
    .then(total => {
      console.log("TOTAL 1");
      // sumAsync(total, 3).then(() => {
      //   console.log("TOTAL 2");
      // });

      setTimeout(() => {
        console.log("TOTAL 2");
      }, 3 * 1000);

      return sumAsync(total, 4);
    })
    .then(total => {
      console.log("TOTAL 3");
    });
  console.log("FINISH");

  // const r = await sumAsync(1, 2);
  // console.timeEnd("start");

  // console.log(r);
})();
