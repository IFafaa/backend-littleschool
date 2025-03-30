export interface IEmployee {
  name: string;
  birthDate: Date;
  grossSalary: number;
  age: number;

  calculateSalary(): number;
  displayInformation(): void;
}

export abstract class Employee implements IEmployee {
  private _name: string;

  private _birthDate: Date;

  private _grossSalary: number;

  get name(): string {
    return this._name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  get grossSalary(): number {
    return this._grossSalary;
  }

  get age(): number {
    const currentYear = new Date().getFullYear();
    const birthYear = this.birthDate.getFullYear();
    return currentYear - birthYear;
  }

  constructor(name: string, birthDate: Date, grossSalary: number) {
    this._name = name;
    this._birthDate = birthDate;
    this._grossSalary = grossSalary;
  }

  abstract calculateSalary(): number;

  displayInformation(): void {
    console.log(
      `Name: ${this.name}, age: ${
        this.age
      }, Salary: R$${this.calculateSalary().toFixed(2)}`
    );
  }
}
