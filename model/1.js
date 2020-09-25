const _ = require('lodash');
const math = require('mathjs');
// import { math} from 'mathjs'
let arr = [
  128,
  25,
  33.8,
  58,
  90,
  108,
  23,
  108,
  39.8,
  49,
  59.9,
  49.9,
  88.8,
  43,
  73,
  58,
  86,
  45,
  39.9,
  39.9,
  12.9,
  58,
  128,
  29,
  38,
  49.9,
  15,
  128,
  35,
  76,
  48.8,
  68,
  49.9,
  128,
  88,
  108,
  99,
  48.8,
  33,
  98,
  39.9,
  38,
  98,
  58,
  168,
  125,
  248,
  128,
  458,
  69,
  145,
  58,
  58,
  58,
  108,
  79,
  89,
  93.6,
  88,
  108,
  68,
  128,
  88,
  118,
  400,
  49,
  68,
  55,
  98,
  60,
  78,
  38,
  118,
  59.9,
  73.8,
  108,
  69,
  68,
  36.8,
  55,
  55,
  52.9,
  82,
  52.9,
  68,
  108,
  18.5,
  17,
  13.5,
  79.8,
  79.8,
  69.8,
  69.8,
  168,
  168,
  36,
  170,
  35,
  118,
  120,
  460,
  69,
  49.9,
  98,
  138,
  69,
  47.5,
  75,
  168,
  26,
  108,
  380,
  159,
  328,
  399,
  399,
];

function swap(arr, i, j) {
  if (i !== j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

let count = 0;
let c_arr=[]
arr=_.union(arr)
console.log(arr);
console.log(arr.length);
groupSplit(arr, 6);
function show(arr) {
  // console.log(`当前是${++count}`);
  add(arr)

  // console.log(...c_arr)
  // console.log((...c_arr));
  // c_arr=_.union(...c_arr)

  // console.log(c_arr);
  // console.log(`当前是${++count},组合是 ${add(arr)}`)
  // document.write("P<sub>" + ++count + "</sub>: " + arr + "<br />");
}
// 108 76  58 69 248
//23 138 128 138
//
// 128,58,108,23,76,69,138
// 128,58,108,43,76,69,118
// 128,58,108,73,76,88,69
// 128,58,108,86,76,69,75
// 128,58,108,76,125,69,36
// 128,58,108,76,69,79,82

// 128,25,58,108,38,76,98,69

// 128,25,58,90,108,29,76,69,17
// 128,25,58,108,23,45,76,68,69
// 128,25,58,108,23,38,76,69,75
// 128,25,58,108,23,15,76,98,69
// 128,25,58,108,23,35,76,69,78
// 128,25,58,108,43,38,76,69,55
// 128,25,58,108,43,15,76,69,78
// 128,25,58,108,43,76,33,69,60
function add(value) {
  const c = math.sum(value)
  let a= ++count
  if (c<=600&&c>=590) {

      // console.log(arr);
      // console.log(`当前是${a}`);
      if (value.indexOf(108)!==-1){
        // console.log('第二关',a);
        if (value.indexOf(76)!==-1){
          // console.log('第三关',a,value);
          // console.log(`当前是${++count}`);
          if (value.indexOf(58)!==-1){
            // console.log('第四关',a,value);
            if (value.indexOf(69)!==-1){
              // console.log('第五关',a,value);
              if (value.indexOf(248)!==-1){
                // console.log('第六关',a,value);
                console.log(value.toString());
                // console.log(`当前是${++count}`);
                c_arr.push(value)
              }
            }
          }
        }

        return c_arr
      }




    // console.log(`当前是${++count}`, value);

  } else {
    return  false
    // console.log("没有")
  }
  // return  _.sum(arr);
  // arr = _.union(arr)
  // console.log(arr);
  // arr.forEach((value) => {
  //   // console.log(value);
  //   const c = math.sum(value)
  //   if (c === 600) {
  //     if (value.indexOf(108)!=-1&&value.indexOf(76)!=-1&&value.indexOf(58)!=-1&&value.indexOf(69)!=-1){
  //       c_arr.push(value)
  //     }
  //
  //
  //     // console.log(`当前是${++count}`, value);
  //     console.log(`当前是${++count}`);
  //   } else {
  //     // console.log("没有")
  //   }
  //   // console.log(c);
  //   return c
  // })
  // console.log(arr);
  // return  math.sum(...arr);
}

// function perm(arr, flag) {
//   (function fn(n) {  //为第n个位置选择元素
//     for (let i = n; i < arr.length; i++) {
//       swap(arr, i, n);
//       if (n + 1 < flag - 1)  //判断数组中剩余的待全排列的元素是否大于1个
//         fn(n + 1);  //从第n+1个下标进行全排列
//       else
//         show(arr);  //显示一组结果
//       swap(arr, i, n);
//     }
//   })(0);
// }

// perm(arr,2)


function groupSplit(arr, size) {
  const maxSize = arr.length, groupArr = [];

  if (size >= 1 && size <= maxSize) {
    getArr(arr, 0, []);
  }

  function each(arr, index, fn) {
    for (let i = index; i < maxSize; i++) {
      fn(arr[i], i, arr);
    }
  }

  function getArr(arr, _size, _arr, index) {
    if (_size === size) {
      return;
    }

    const len = _size + 1;

    each(arr, index || 0, function (val, i, arr) {

      _arr.splice(_size, 1, val);

      if (_size === size - 1) {
        groupArr.push(_arr.slice());
      }
      show(_arr)
      getArr(arr, len, _arr, i + 1);
    });
  }

  show(groupArr)

  return groupArr;
}

