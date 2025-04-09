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

//#4
function evenFn (n) {
	const result = [];
	for (let i = 1; i <= n; i++) {
		if(i % 2 === 0) {
			result.push(i);
		}
	}
	return result;
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

//#5
function weekFn(n){
	switch (n){
		case 1: return 'Mondey';
		case 2: return 'Tuesday';
		case 3: return 'Wednesday';
		case 4: return 'Thursday';
		case 5: return 'Friday';
		case 6: return 'Saturday';
		case 7: return 'Sunday';
		default: return null;
	}

}
console.log(weekFn(2))
console.log(weekFn(10))
console.log(weekFn(1.5))

//#6
function ageClassification(n){
	return n < 0 || n > 122 || typeof n !== 'number'
	? null
	: n < 24 ? 'Дитинство'
	: n < 44 ? 'Молодість'
	: n < 65 ? 'Зрілість'
	: n < 75 ? 'Старість'
	: n < 90 ? 'Довголіття'
	: 'Рекорд'
}
console.log(ageClassification(22))
console.log(ageClassification(32))
console.log(ageClassification(47))
console.log(ageClassification(121))
console.log(ageClassification(130))
console.log(ageClassification(-1))

//#7
function oddFn(n) {
	const result = [];
	let i = 1;
	while (i <= n) {
		if( i % 2 !== 0) {
			result.push(i);
		}
		i++;
	}
	return result;
}
console.log(oddFn(10))
console.log(oddFn(15))
console.log(oddFn(20))

//#8 
function mainFunc(a, b, callback){
	if(typeof callback !== 'function') {
		return false;
	}
	return callback(a, b);
}

function cbRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cbPow(num, pow){
	return Math.pow(num, pow);
}
function cbAdd(a, b){
	return a + b;
}

console.log(mainFunc(2, 10, cbRandom)) 
console.log(mainFunc(2, 2, cbPow)) 
console.log(mainFunc(1, 5, cbAdd)) 
console.log(mainFunc(2, 5, 'not a func'))