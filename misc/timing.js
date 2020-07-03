// See also performance.timerify(fn)
// https://nodejs.org/api/perf_hooks.html#perf_hooks_perf_hooks_performance

const { performance } = require("perf_hooks");

const loopUpTo = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

const addUpTo = (n) => {
  return n * (n + 1) / 2;
}

const t1 = performance.now();
loopUpTo(1000000000);
console.log(performance.now() - t1);

const t2 = performance.now();
addUpTo(1000000000);
console.log(performance.now() - t2);
