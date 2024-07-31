/** const x={
	key1:"Original Key1 value",
	key2:true,
    "key3":"this is key 3 value",
}
x.key4=function(){
  console.log("THis is the function")
  console.log(`key1=${this.key1}`);
  console.log(`key2=${this.key2}`);
  console.log(`key3=${this.key3}`);	
}
console.log(x.key4());
**/
const z=new Object({
  key1:"Harsh",
  key2:true
})
z.key3="This is the third key"
const x=new Object({
  key1x:"Harshx",
  key2x:true
})
x.key3x="This is the third key of x"
const y=new Object({
  key1y:"Hello"
})
//console.log(Object.assign(y,x,z));
//console.log(y);
//console.log(Object.entries(z));
//console.log(z.hasOwnProperty("key1"));
//console.log(z.hasOwnProperty("key4"));
console.log(z);
const {key1:value1}=z
console.log(value1);
console.log("Abhishek chutia hai");






