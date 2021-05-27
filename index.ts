// Створити такі класи:
//     1) Депутат
// - імя
// - вік
// - стать
// - ступінь чесності (0-100)
// - мінімальна сума хабаря
//
// 2) Партія
// - назва
// - голова (Депутат)
// - члени партії (Масив депатутатів)
//
// 3) Верхрвна рада
// - масив партій
// - решті полів на вибір
//
// Мають бути присутні такі можливості:
//     - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію
// - додати\видалити депутата з фракції
// - вивести всіх хабарників фракції
// - вивести найбільшого хабарника у фрації
// - вивести найбільшого хабарника верховної ради
// - вивести фсіх депутатів фракції
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
//     Дача хабаря має мати 3 стани
// - не успішна
// - успішна
// - вгається
//
// Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
//     Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
//     та бере хабар.
//     Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
//
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!

import {IParty} from "./models/IParty";

class Deputy {
    public name: string;
    private age: number;
    private sex: "Male" | "Female";
    public honestDegree: number;
    private minimumAmountOfBribe: number;

    constructor(name: string, age: number, sex, honestDegree: number, minimumAmountOfBribe: number) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.honestDegree = honestDegree;
        this.minimumAmountOfBribe = minimumAmountOfBribe;
    };

    getName() {
        console.log(this.name);
    };

}

class Party {
    public name: string;
    private chairman: Deputy;
    private members: Deputy[];

    constructor(name: string, chairman: Deputy, members: Deputy[]) {
        this.name = name;
        this.chairman = chairman;
        this.members = members;
    };

    addDeputy(dep: Deputy): void {
        this.members.push(dep);
    };

    deleteDeputy(name: string): void {
        this.members = this.members.filter(value => value.name !== name);
    };

    getAllBribeTakers(): Deputy[] {
        return this.members.filter(value => value.honestDegree < 50);
    };


}

class VerkhovnaRada {
    private partiesArray: Party[];

    constructor(partiesArray: Party[]) {
        this.partiesArray = partiesArray;
    };

    public addParty(party: Party): void {
        this.partiesArray.push(party);
    };

    public deleteParty(partyName: string): void {
        this.partiesArray = this.partiesArray.filter(value => value.name !== partyName);
    };

    public getParty(partyName: string): void {
        // const party = this.partiesArray.filter(value => value.name === partyName);
        // console.log(party);
        console.log(this.partiesArray.find(value => value.name === partyName));
    };

    public getAllParties(): void {
        console.log(this.partiesArray);
    };

    public getMainBribeTaker() {

    }
}

const firstDep = new Deputy("Oleg", 56, "Male", 43, 500);
const secondDep = new Deputy("Ivan", 40, "Male", 10, 1000);
const thirdDep = new Deputy("Victor", 26, "Male", 99, 700);
const fourthDep = new Deputy("Yulia", 47, "Female", 1, 7000);
const fifthDep = new Deputy("Vova", 44, "Male", 89, 1000);

const oneParty = new Party('OPZJ', firstDep, [firstDep, secondDep]);
const secondParty = new Party('Motherland', fourthDep, [fourthDep, thirdDep]);
const thirdParty = new Party('Servant of the people', fifthDep, [fifthDep, fourthDep, firstDep]);

const oneVR = new VerkhovnaRada([oneParty, secondParty]);
//oneVR.getParty('OPZJ');
// oneVR.deleteParty(oneParty);
// oneVR.getParty('OPZJ');
oneVR.addParty(thirdParty);
oneVR.deleteParty('Motherland');
oneVR.getAllParties();