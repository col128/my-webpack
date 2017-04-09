/**
 * Created by wuyu on 2017/4/10.
 */

function str(msg) {
	console.log(`---==${msg}==--`)
}


function obj(object) {
	console.log(`---==${msg}==--`)
	console.log(JSON.stringify(object,null,4))
}

export  default  {
	str:str,
	obj:obj,
}