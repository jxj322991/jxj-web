//冒泡算法
//由前到后 相邻比较


function pop() {
    var arr1 = this;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length - i - 1; j++) {
            if (arr1[j] > arr1[j + 1]) {
                arr1[j] = [arr1[j + 1], arr1[j + 1] = arr1[j]][0];
            }
        }
    }
    return arr1;
}
var arr = [1, 11, 3, 33, 2, 22];
pop.apply(arr);


//冒泡算法
//两两对比 直接对调
function pop(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
            }
        }
    }
}
var arr = [ 3, 2, 1];
pop(arr);