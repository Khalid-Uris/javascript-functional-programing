// Define let here
// console.log('Hello World');
// let name='Khan';
// console.log(name);

// Cannot be a reserved keyword
//if, for , while, let,const,var
// Should be meaningful name
// cannot start with a number(1name)
// cannot contain a space or hyphen(-)
// Are case-sensitive

// let firstName;

//////////////////////////////////////////

// Define const here

// let is change able
// let interestRate=0.3;
// interestRate=1;
// console.log(interestRate);
// let is change able end here

// const  is not change able
// const interestRate=0.3;
// interestRate=1;
// console.log(interestRate);
// const is not change able end here

// There are two data type in javascript.
// 1. Primitives/value Types
// 2. Reference Types

//Primitives/value Types
// String
// Number
// Boolean
// undefined
// null

// Reference Types
// Object
// Array
// Function


// let name='Mosh';
// let age=30;
// let isApproved=false;
// let firstName=undefined; type is undefined and value is undefined
// let selectedColor=null; type is object. null is object type

//////////////////////////////////////////////

//javascript is dynamic language or dynamic type
// Static               String name='John';
// (Statically-typed)

// Dynamic              let name='John';
// (Dynamically-typed)

////////////////////////////////////////////////
// Object
// let person={
// 	name: 'Mosh',
// 	age: 30
// };

// Dot Notation
// person.name='Khan';

// bracket Notation
// person['name']='wagan';

// console.log(person);

////////////////////////////////////////////////
//Array
// let selectedColors=['red','blue'];
// selectedColors[2]=1;
// console.log(selectedColors[0]);
// console.log(selectedColors.length);

/////////////////////////////////////////////

// function greet(name, lastName)
// {
// 	let temp=name;
// 	 //let storeValue=name+' hello';
// 	// console.log(typeof storeValue);
// 	 //console.log(typeof temp+' check');
// 	console.log('Hello '+temp+' '+lastName);
// }

// greet(100,200);
// greet(200);

/////////////////////////////////////

// function square(number){
// 	return number*number;
// }

// let number=square(3);
// console.log(number);

///////////////////////////
//Operators
// 1. Arithmetic
// 2. Assignment
// 3. Comparison
// 4. Logical
// 5. Bitwise

/////////////////////////////////////
// 1. Arithmetic

// let x=10;
// let y=3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment (++)
//console.log(++x);
// console.log(x++);
// console.log(x);

// Decrement (--)
// console.log(--x);
// console.log(x--);
// console.log(x);

////////////////////////////////////////

//let x=10;

// x++;
// x=x+1;

// x=x+5;
// x+=5;

// x=x*3;
// x*=3;

////////////////////////////
// 3. Comparison

// let x=1;

// // Relational
// console.log(x > 0); //true
// console.log(x >= 1); // true
// console.log(x < 1); //false
// console.log(x <= 1); // true

// // Equality
// console.log(x === 1);//true
// console.log(x !== 1); // false

///////////////////////////////////

// Strict Equality (Same type both oparand Type + Value)
// console.log(1===1);
// console.log('1'===1);

// Lose Equality (Both side are value is same)
// console.log(1==1);
// console.log('1'==1);
// console.log(true==1);

////////////////////////////////////////////

// Ternary Operator

 //let point=100;
// point>100 ? console.log('gold customer') : console.log('silver customer');

// let points=101;

// let customer = points > 100 ? 'gold' : 'silver';
// console.log(customer);

/////////////////////////////////////////////////

// Logical Operator
// Logical AND (&&)
// Returns TRUE if both operands are TRUE

//console.log(true && true);

// let highIncome=true;
// let goodCreditScore=true;
// let eligibleForLoan=highIncome && goodCreditScore;

// console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE


// let highIncome=false;
// let goodCreditScore=true;
// let eligibleForLoan=highIncome || goodCreditScore;

// console.log(eligibleForLoan);

// NOT (!)

// let highIncome=false;
// let goodCreditScore=false;
// let eligibleForLoan=highIncome || goodCreditScore;

// console.log('Eligible ',eligibleForLoan);

// // Not (!)
// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused);

////////////////////////////////////////////////////////

// Bitwise Operators
// byte one  =  bit  eight
//     1     = 00000001
//     2     = 00000010

//     3     = 00000011 OR
//     R     = 00000000 AND

// console.log(1 | 2); // Bitwise OR
// console.log(1 & 2); // Bitwise AND

// Read, Write, Execute
// read only = 00000100
// read and write = 00000110
// all operation doing = 00000111

// const readPermission=4; // 00000100
// const writePermission=2; // 00000010
// const executePermission=1; // 00000001

// let myPermission=0;
// myPermission = myPermission | readPermission | writePermission;

// let message = (myPermission & readPermission) ? 'yes' : 'no';

// console.log(message);

/////////////////////////////////////////////

//Operators Precedence

// Swapping variables

// let numberOne=2;
// let numberTwo=5;

// let temp=numberOne;
// numberOne=numberTwo;
// numberTwo=temp;

// console.log(numberOne);
// console.log(numberTwo);

// mosh code
// let a = 'red';
// let b = 'blue';

// let c=a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);
/////////////////////////////////////////////////////////

//Conditional Statements
// If..else
// Switch...case

// Hour 
// If hour is between 6am and 12pm: Print Good morning!
// If hour is between 12am and 6pm: Print Good afternoon!
// otherwise: Good evening!


// let hour=18;

// if (hour >= 6 && hour < 12) {
// 	console.log('Good morning!');
// } else if (hour >= 12 && hour < 18) {
// 	console.log('Good afternoon!');
// }else{
// 	console.log('Good evening!');
//}


// Role
// If role is guest: Print Guest User.
// If role is moderator: Print Moderator User.
// otherwise: print Unknown User.

// let role = 'makan';

// switch(role){
// 	case 'guest':
// 		console.log('Guest User.');
// 		break;
// 	case 'moderator':
// 		console.log('Moderator User.');
// 		break;
// 	default:
// 		console.log('Unknown User');
// }
// let role=prompt('Enter user role: ');

// if (role==='guest') {
// 	console.log('Guest User.');
// } else if (role==='moderator'){
// 	console.log('Moderator User.');
// }else{
// 	console.log('Unknown User');
// }
//////////////////////////////////////
// LOOPS 
//1. for 
//2. while 
//3. do...while 
//4. for..in 
//5. for...of

// for(let i=1; i<=5; i++)
// {
// 	console.log('Hello World', i);
// }

// for(let i=1; i<=5; i++)
// {
// 	if (i%2!==0) {
// 		console.log(i);
// 	}
// }

let i=1;
while (i<=5) {
	if (i%2!==0) {
		console.log(i);
	}
	i++;
}