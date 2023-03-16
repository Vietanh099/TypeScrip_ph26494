const numArray3: number[] = [13, 5, 8, 2, 3, 1];

function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
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

const array2:string[]=['Viet_Anh','Anh_tran',"cau_tran"];
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

