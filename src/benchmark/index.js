import Benchmark from "benchmark";
import * as Belt_SortArray from "rescript/lib/es6/belt_SortArray.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";

const mapSuite = new Benchmark.Suite();
const joinSuite = new Benchmark.Suite();
const reduceSuite = new Benchmark.Suite();
const filterSuite = new Benchmark.Suite();
const sortSuite = new Benchmark.Suite();

const arr = new Array(2000).fill(1).map((_, i) => i);
const arr2 = new Array(2000).fill(1).map((_, i) => i);
const arrSort = new Array(2000).fill(1).map((_, i) => i);
const arrSort2 = new Array(2000).fill(1).map((_, i) => i);


mapSuite
    .add("belt map", () => Belt_Array.mapU(arr, (x) => x * x))
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
    .add("belt join", () => Belt_Array.joinWithU(arr, "", s => s))
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
    .add("belt reduce", () => Belt_Array.reduceU(arr, 0, (a, b) => a + b))
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
    .add("belt filter", () => Belt_Array.keepU(arr, (x) => x >= 1000))
    .add("js filter", () => arr2.filter((x) => x >= 1000))
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

sortSuite
    .add("belt sort", () => Belt_SortArray.stableSortInPlaceByU(arrSort, (a, b) => b - a))
    .add("js sort", () => arrSort2.sort((a, b) => b - a))
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

