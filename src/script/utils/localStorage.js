/**
 * Created by wuyu on 2017/4/10.
 */


function save(name,obj) {
	window.localStorage.setItem(name,JSON.stringify(obj))
}

function get(name) {
	let item = window.localStorage.getItem(name)
	if (item) {
		return JSON.parse(item)
	}else{
		return {}
	}
}

export  default  {
	save:save,
	get:get,
}