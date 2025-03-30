import { Employee } from "./employee";

export class Intern extends Employee {
  private allowance: number;

  constructor(
    name: string,
    birthDate: Date,
    grossSalary: number,
    allowance: number
  ) {
    super(name, birthDate, grossSalary);
    this.allowance = allowance;
  }

  calculateSalary(): number {
    return this.grossSalary + this.allowance;
  }
}
