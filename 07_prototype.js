function add(str)
{
	this.name = str;
	this.age = 0;
	this.changeAge = function (num)
	{
		this.age = num;
	}
}

var JT = new add("JT");

console.log(JT.name + ": " + JT.age);

JT.changeAge(18);

console.log(JT.name + ": " + JT.age);


add("Who am I");
changeAge(10);

console.log(name + ": " + age);

console.log(global);
