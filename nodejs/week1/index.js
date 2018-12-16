class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	addPhone(number) {
		this.num = number;
	}

	call() {
		if (this.num == undefined) {
			return `${this.name}'s phone number was not added`
		}
		return `Caling ${this.name} at ${this.num} ......`
	}

	birthday() {
		return `Wishing ${this.name} a happy ${this.age + 1}th birthday`
	}
};

// remember to write a constructor function
let jimmy = new Person("Jimmy", 28);
console.log(jimmy);

jimmy.addPhone("55551234");

// should say "Calling Jimmy at 55551234..."
console.log(jimmy.call());

console.log(jimmy.birthday());
// should say "Wishing Jimmy a happy 29th birthday!"

let jill = new Person("Jill");

jill.call();
