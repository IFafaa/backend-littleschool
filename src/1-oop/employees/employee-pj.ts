import { Employee } from "./employee";

export class EmployeePJ extends Employee {
  constructor(name: string, birthDate: Date, grossSalary: number) {
    super(name, birthDate, grossSalary);
  }

  calculateSalary(): number {
    return this.grossSalary;
  }
}
