import Benchmark from "benchmark";
import _ from "lodash"
import * as R from "ramda"
import * as Belt_SortArray from "rescript/lib/es6/belt_SortArray.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";

const mapSuite = new Benchmark.Suite();
const joinSuite = new Benchmark.Suite();
const reduceSuite = new Benchmark.Suite();
const filterSuite = new Benchmark.Suite();
const sortSuite = new Benchmark.Suite();

function buildArray() {
    return new Array(2000).fill(1).map((_, i) => i);
}

const beltArr = buildArray();
const jsArr = buildArray();
const lodashArr = buildArray();
const ramdaArr = buildArray();
const beltArrSort = buildArray();
const jsArrSort = buildArray();
const ramdaArrSort = buildArray();


mapSuite
    .add("belt map", () => Belt_Array.mapU(beltArr, (x) => x * x))
    .add("js map", () => jsArr.map((x) => x * x))
    .add("lodash map", () => _.map(lodashArr, (x) => x * x))
    .add("ramda map", () => R.map((x) => x * x, ramdaArr))
    .on('complete', function () {
        console.log(this.map(v => [v.name, v.hz]))
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

joinSuite
    .add("belt join", () => Belt_Array.joinWithU(beltArr, "", s => s))
    .add("js join", () => jsArr.join(""))
    .add("lodash join", () => _.join(lodashArr, ""))
    .add("ramda join", () => R.join("", ramdaArr))
    .on('complete', function () {
        console.log(this.map(v => [v.name, v.hz]))
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

reduceSuite
    .add("belt reduce", () => Belt_Array.reduceU(beltArr, 0, (a, b) => a + b))
    .add("js reduce", () => jsArr.reduce((a, b) => a + b, 0))
    .add("lodash reduce", () => _.reduce(lodashArr, (a, b) => a + b, 0))
    .add("ramda reduce", () => R.reduce((a, b) => a + b, 0, ramdaArr))
    .on('complete', function () {
        console.log(this.map(v => [v.name, v.hz]))
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

filterSuite
    .add("belt filter", () => Belt_Array.keepU(beltArr, (x) => x >= 1000))
    .add("js filter", () => jsArr.filter((x) => x >= 1000))
    .add("lodash filter", () => _.filter(lodashArr, (x) => x >= 1000))
    .add("ramda filter", () => R.filter((x) => x >= 1000, ramdaArr))
    .on('complete', function () {
        console.log(this.map(v => [v.name, v.hz]))
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

sortSuite
    .add("belt sort", () => Belt_SortArray.stableSortInPlaceByU(beltArrSort, (a, b) => b - a))
    .add("js sort", () => jsArrSort.sort((a, b) => b - a))
    .add("ramda sort", () => R.sort((a, b) => b - a, ramdaArrSort))
    .on('complete', function () {
        console.log(this.map(v => [v.name, v.hz]))
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

