
/**console.log(`key1 value is:${x1["key1"]}`);
console.log(`key2 value is:${x1["key2"]}`);
console.log(`key3 value is:${x1["key3"]}`);
console.log(x1);**/
/** const s=Symbol("Harsh")
const x2={
	key1:true,
	[s]:"This is Symbol Key",
	key2:200,
	key3:"MANJU"
}
console.log(`key1 is:${x2.key1}`);
x2.key1="1stChange"
console.log(`key1 is:${x2.key1}`);
Object.freeze(x2)
x2.key1="2nd Change"
console.log(`key1 is:${x2.key1}`);**/
const x1={
	key1:true,
	key2:21,
	"key3":"This is string from key value"
}
x1.key4=function(){
	console.log(`key1 value is:${x1.key1}`);
	console.log(`key2 value is:${this.key2}`);
	console.log(`key3 value is:${this.key3}`);
}
console.log(x1.key4()); 

