const numArray3: number[] = [13, 5, 8, 2, 3, 1];

function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 &&  currentVal > arr[j] ) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
}

insertionSort(numArray3);
console.log(numArray3);

const Array1:number[]=[2,3,9,1,8,11,4]
function bubbleSort(arr:number[]):number[]{
    for(let i=0;i<arr.length ;i++){
        for(let j=0 ;j<arr.length-i-1;j++){
        if( arr[j]>arr[j+1]){
            const temp=arr[j];
            arr[j]=arr[j + 1 ];
            arr[j+1]=temp;
        }
        }
    }
    return arr;
}
console.log(bubbleSort(Array1));

const array2:string[]=['c','d',"a"];
function bubbleSort2(arr:string[]):string[]{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j].localeCompare(arr[j+1])>0){
                const temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort2(array2));


// Quick sort 
const array:number[] = [10, 5, 2, 3, 6, 8];

function quickSort(arr:number[], left:number, right:number):number[] {
    if (left < right) {
        let pivotIndex:number = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr:number[], left:number, right:number):number {
    let pivotIndex:number = Math.floor((left + right) / 2);
    let pivotValue:number = arr[pivotIndex];
    let i:number = left;
    let j:number = right;
    while (i <= j) {
        while (arr[i] < pivotValue) {
            i++;
        }
        while (arr[j] > pivotValue) {
            j--;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return i;
}

console.log(quickSort(array, 0, array.length - 1));

