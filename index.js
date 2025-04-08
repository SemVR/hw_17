//#1
const userObj = {
	firstName : 'Jack',
	lastName : 'Franklin',
	age : 30
};
console.log(userObj);

//#2
// userObj.firstName = 'Jack';
// userObj.lastName = 'Franklin';
// userObj.fullName = userObj.firstName + ' ' + userObj.lastName;

// console.log(userObj.fullName)

let parent = {
	greet: function(){
		console.log(this.firstName + ' ' + this.lastName)
	}
}
let fullName =  Object.create(parent);
fullName.firstName = 'Jack';
fullName.lastName = 'Franklin';

fullName.greet()

//#3
function defUpperStr (str){
	return (str|| 'default text').toUpperCase();
}
console.log(defUpperStr('My text'));
console.log(defUpperStr());

