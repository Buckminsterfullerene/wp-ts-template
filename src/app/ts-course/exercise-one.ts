type BankAccount = {money: number, deposit: (v: number) => void};

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Reading']
};

myself.bankAccount.deposit(3000);
console.info(myself);

function makeArray(...args: number[]) {
    return args;
}

console.info(makeArray(3, 6, 7, 34));

const myObj = {
    first: 'wham',
    two: 'kablam',
    three: 'shazam'
};

const {two, three} = myObj;

class Person {
    private type: string;
    protected age: number;

    constructor(public name: string, public userName: string) {
    }
}

const p = new Person('Shazam', 'Kablam');
console.info(p);
