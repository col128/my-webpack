/**
 * Created by wuyu on 2017/4/9.
 */
class Person{
	constructor(name,code){
		this.name = name;
		this.code = code;
		
	}
	toString(){
		return `name:${this.name},code:${this.code}`
	}
}

export default Person;