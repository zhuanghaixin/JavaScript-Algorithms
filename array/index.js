//数组的创建
const arr1=[1,2,3,4]
//构造函数创建数组
const arr2=new Array()
//不传参等价于
const arr3=[]
//创造指定长度的空数组
const arr4=new Array(7)
//创造一个长度确定，同时每一个元素也确定的数组
const arr5=new Array(7).fill(1)
//数组的访问
const arr6=[1,2,3]
arr6[0]
//数组的遍历
//1.for循环
const arr7=[1,2,3,4,5,6,7]
    //获取数组的长度
const len=arr7.length
for (let i = 0; i < len; i++) {
    //输出数组的元素值，输出当前索引
    console.log(arr7[i],i);
}
//2.forEach方法
arr7.forEach((item,index)=>{
    console.log((item, index));
})
//原数组不改变

//3.map方法
arr7.map((item, index)=>{
    console.log((item, index));
    return item+1
})
console.log(arr7);


//二维数组创建
//fill的局限性
const arr8=new Array(7).fill([])  //有问题
arr8[0][0]=1
console.log(arr8); //数组中每个元素都是1，明明我们只给第一行第一列赋值为1，
//这是因为如果这个fill()入参是引用类型，那么fill填充的其实是入参的引用

//正确的创建方法
const arr9=[1,2,3]
const len1=arr9.length
for (let i = 0; i <len1 ; i++) {
    arr9[i]=[]
}

//二维数组的访问
const arr10=[
    [1,2,3],
    [2,3,4,5],
    [3,4,5,6,7],
    [4,3,2,1]
]
//缓存外部数组的长度
const outerLen=arr10.length
for (let i = 0; i < outerLen; i++) {
    //缓存内部数组的长度
    const innerLen=arr10[i].length
    for (let j = 0; j < innerLen; j++) {
        console.log('输出数组的值，输出数组的索引')
        console.log(arr10[i][j], i, j);
    }
}
