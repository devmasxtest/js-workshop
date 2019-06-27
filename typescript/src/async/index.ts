// const sumAsync = (a, b, cb) => {
//   setTimeout(() => {
//     cb(a + b);
//   }, 2 * 1000);
// };

const sumAsync = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 5 * 1000);
  });

(async function() {
  console.time("start");
  const r = await Promise.all([
    sumAsync(1, 2),
    sumAsync(1, 2),
    sumAsync(1, 2),
    sumAsync(1, 2),
    sumAsync(1, 2),
    sumAsync(1, 2),
    sumAsync(1, 2),
    sumAsync(1, 2),
    sumAsync(1, 2),
    sumAsync(1, 2),
    sumAsync(1, 2),
    sumAsync(1, 2),
    sumAsync(1, 2),
    sumAsync(1, 2),
    sumAsync(1, 2)
  ]);
  // const r = await sumAsync(1, 2);
  console.timeEnd("start");

  console.log(r);
})();
