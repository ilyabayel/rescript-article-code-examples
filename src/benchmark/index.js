import Benchmark from "benchmark";

const suite = new Benchmark.Suite;

const arr = new Array(2000).fill(1).map((_, i) => i);
const arr2 = new Array(2000).fill(1).map((_, i) => i);

function mapU(a, f) {
    var l = a.length;
    var r = new Array(l);
    for (var i = 0; i < l; ++i) {
        r[i] = f(a[i]);
    }
    return r;
}


suite
    .add("belt", () => mapU(arr, (x) => x * x))
    .add("js", () => arr2.map((x) => x * x))
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });