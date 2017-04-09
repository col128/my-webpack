
import  Person from "./classes/Person";
import  u from "./utils/utils";

// import  Vue from "vue"
let tom = new Person("wuyu","007")

console.log(tom)
u.ls.save("tom",tom)
var jom = u.ls.get("tom")
console.log("index.js is running....")


$("myApp").html("this is myApp")
//
// let vue = new Vue({
// 	el:"#myApp",
// 	data:function () {
// 		return {
// 			msg:"hahha"
// 		}
// 	}
// })