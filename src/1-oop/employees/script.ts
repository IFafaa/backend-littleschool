import { EmployeeCLT } from "./employee-clt";
import { EmployeePJ } from "./employee-pj";
import { Intern } from "./intern";

const employeeCLT = new EmployeeCLT(
  "Pedro Leite",
  new Date("07/07/1997"),
  40000
);
const employeePJ = new EmployeePJ(
  "Martinez Rocha",
  new Date("03/02/2000"),
  10000
);
const intern = new Intern("Antonio Junior", new Date("03/02/2006"), 800, 500);

employeeCLT.displayInformation();
employeePJ.displayInformation();
intern.displayInformation();
