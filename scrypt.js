let items = document.querySelectorAll("li");
let arr = [];
for (let item of items) {
    arr.push(item.textContent);
};
arr = JSON.stringify(arr);
console.log(arr);
//-----------------------------

let json = '["user1", "user2", "user3", "user4", "user5"]';
//console.log(json);

json = JSON.parse(json);
json.push("user6");
json = JSON.stringify(json);
console.log(json);
//--------------------------------------------
let json1 = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

json1 = JSON.parse(json1);
json1.push({
    name: 'Misha',
    age: '25',
    "salary": '4000'
})
json1 = JSON.stringify(json1)
console.log(json1)

