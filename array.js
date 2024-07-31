/** const arr1=[0,1,2,3,4,5]
const arr2=arr1.join()
console.log(arr1)
console.log(arr2)
console.log(arr2.length)
**/
/*const arr1=[0,1,2,3,4,5]
const arr2=[11,12,13,14]
console.log("BEFORE:",arr1);
arr1.push(arr2);
console.log("AFTER:",arr1);
const arr3= new Array(88,22,33);
**/
/**const x=[1,2,3,"Hello",true]
console.log(x)
x.push(99)
x.push(100)
console.log(x);
x.pop()
console.log(x);
x.push([100,101,102])
console.log(x);
x.unshift("XXX");
console.log(x);
x.shift();
console.log(x);
console.log(x.includes("XXX"));
console.log(x.indexOf("Hello"));
**/
//const x=[10,20,30,40,50,60,70,80,90]
//const y=x.slice(2,6)

//console.log("X=",x,"Y=",y);
//console.log(typeof y);
//console.log(typeof x);
//const z=x.splice(2,6)
//console.log("X=",x,"Z=",z);
//console.log(x===z);
//console.log("Z=",z,"X=",x);
//const arr1=[1,2,3]
//const arr2=[4,5,6]
//const arr3=[...arr1,...arr2]
//console.log("arr1=",arr1,"arr2=",arr2,"arr3=",arr3);
/**const key4=Symbol("harsh")
const y={
	key1:"NUMber1",
	key2:true,
	key3:25,
	[key4]:Symbol("xyz"),
	obj1:{
           name:"Harsh",
		   Age:25
	}
}
**/
// console.log(y.obj1?);

//console.log(y);
//y.add1=25;
//console.log(y);
//y.greeting=function(){
//	console.log("hello")
//}

//console.log(y.greeting());


const y={
	key1:"V1",
	key2:"V2",
	key3:"V3"
}
const {key1:k1}=y
//console.log(k1);
function f1(){
	console.log("Hello");
}
console.log(f1());
console.log("hello");
 