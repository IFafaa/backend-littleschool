import { Employee } from "./employee";

export class EmployeeCLT extends Employee {
  constructor(name: string, birthDate: Date, grossSalary: number) {
    super(name, birthDate, grossSalary);
  }

  calculateSalary(): number {
    const taxPercentage = {
      INSS: this.getInssPercentage(),
      IR: this.getIrPercentage(),
      FGTS: 0.08,
    };

    const INSS = this.grossSalary * taxPercentage.INSS;
    const IR = this.grossSalary * taxPercentage.IR;
    const FGTS = this.grossSalary * taxPercentage.FGTS;
    const salary = this.grossSalary - INSS - IR - FGTS;
    return salary;
  }

  private getIrPercentage(): number {
    if (this.grossSalary <= 1903.98) return 0;
    if (this.grossSalary <= 2826.65) return 0.075;
    if (this.grossSalary <= 3751.05) return 0.15;
    if (this.grossSalary <= 4664.68) return 0.225;
    return 0.275;
  }

  private getInssPercentage(): number {
    if (this.grossSalary <= 1212) return 0.075;
    if (this.grossSalary <= 2427.35) return 0.09;
    if (this.grossSalary <= 3641.03) return 0.12;
    return 0.14;
  }
}
