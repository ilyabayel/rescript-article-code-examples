import Benchmark from "benchmark";

const mapSuite = new Benchmark.Suite();
const joinSuite = new Benchmark.Suite();
const reduceSuite = new Benchmark.Suite();
const filterSuite = new Benchmark.Suite();

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

function joinWithU(a, sep, toString) {
    var l = a.length;
    if (l === 0) {
        return "";
    }
    var lastIndex = l - 1 | 0;
    var _i = 0;
    var _res = "";
    while (true) {
        var res = _res;
        var i = _i;
        if (i === lastIndex) {
            return res + toString(a[i]);
        }
        _res = res + (toString(a[i]) + sep);
        _i = i + 1 | 0;
        continue;
    };
}

function reduceU(a, x, f) {
    var r = x;
    for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
        r = f(r, a[i]);
    }
    return r;
}

function keepU(a, f) {
    var l = a.length;
    var r = new Array(l);
    var j = 0;
    for (var i = 0; i < l; ++i) {
        var v = a[i];
        if (f(v)) {
            r[j] = v;
            j = j + 1 | 0;
        }

    }
    r.length = j;
    return r;
}


mapSuite
    .add("belt map", () => mapU(arr, (x) => x * x))
    .add("js map", () => arr2.map((x) => x * x))
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

joinSuite
    .add("belt join", () => joinWithU(arr, "", s => s))
    .add("js join", () => arr2.join(""))
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

reduceSuite
    .add("belt reduce", () => reduceU(arr, 0, (a, b) => a + b))
    .add("js reduce", () => arr2.reduce((a, b) => a + b, 0))
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

filterSuite
    .add("belt filter", () => keepU(arr, (x) => x >= 1000))
    .add("js filter", () => arr2.filter((x) => x >= 1000))
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

