import testData from './data/test-data.js';
import testData2 from './data/test-data2.js';
import testData3 from './data/test-data3.js';
import testData4 from './data/test-data4.js';

// Задание 1

function cloneDeep(obj) {
  return { ...obj };
}

console.log('Задание 1\n', cloneDeep);

// Задание 2

var arrays = [[1, 2, 3], [4, 5], [6]];
const array = arrays.reduce((acc, array) => acc.concat(array), []);

console.log('Задание 2\n', array);

// Задание 4

var arr = [1, 2, 3];

Array.prototype.append = function (el) {
  return [el, ...this];
};

console.log('Задание 4\n', arr.append(0));

// Задание 5

var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];
let iterator = 0;
let string = '';

function recuseLog(arr) {
  string += ` ${arr[iterator]}`;

  if (arr.length - 1 !== iterator) {
    iterator += 1;
    recuseLog(arr);
  } else {
    console.log('Задание 5\n', string.trim());
  }
}

recuseLog(arr);

// Задание 6

var a = function (one, two) {
  return one + two;
};
var b = function () {
  return false;
};

function paralell(params, resultsLog) {
  const results = params.map(([fn, args = []]) => fn(...args));

  resultsLog(results);
}

paralell([[a, [1, 2]], [b]], function (results) {
  console.log('Задание 6\n', results);
});

// Задание 7

function array_find(arr, searchQuery) {
  return arr.filter(value => value.toString().search(searchQuery) !== -1);
}

let result = array_find(testData, '/^raf.*/i');
let result2 = array_find(testData, 'Rafshan');

console.log('Задание 7\n', result, result2);

// Задание 8

function array_skip_until(arr, value) {
  if (arr.includes(value)) return arr.slice(arr.indexOf(value));
  else return [];
}

let result3 = array_skip_until(testData, 2);
let result4 = array_skip_until(testData, 'Rafshan');
let result5 = array_skip_until(testData, 'asd');

console.log('Задание 8\n', result3, result4, result5);

// Задание 10

function array_unique(arr) {
  return arr.filter((el, index, arr) => arr.indexOf(el) === index);
}

let result6 = array_unique(testData.concat(testData2));

console.log('Задание 10\n', result6);

// Задание 11

function array_pluck(arr, path) {
  const paths = path.split('.');

  if (paths.length === 1) return arr.map(obj => obj[paths[0]]);
  else {
    const [path1, path2] = paths;
    return arr.map(obj => obj[path1]).map(obj => obj[path2]);
  }
}

let result7 = array_pluck(testData3, 'name');
let result8 = array_pluck(testData3, 'skills.php');

console.log('Задание 11\n', result7, result8);

// Задание 12

function array_combine(keys, values) {
  return keys
    .filter(key => key !== true && key !== false)
    .reduce((obj, key, index) => ({ ...obj, [key]: values[index] }), {});
}

let result9 = array_combine(testData, testData2);

console.log('Задание 12\n', result9);

// Задание 3

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5) return a * b;
  else throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  let result = null;

  const intervalId = setInterval(
    (a, b) => {
      if (typeof result === 'number') {
        console.log(
          `Результат ${result}! Останавливаем вызов функции primitiveMultiply`,
        );
        clearInterval(intervalId);
        return;
      }

      result = primitiveMultiply(a, b);
    },
    1000,
    a,
    b,
  );

  return 'Задание 3';
}

console.log(reliableMultiply(8, 8));
