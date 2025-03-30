import { ILockpad } from "./lockpad";
import { IMotor } from "./motor";

export interface IMotorcycle {
  brand: string;
  model: string;
  year: number;
  motor: IMotor;
  color: string;
  lockpad: ILockpad | null;
  setLockpad(lockpad: ILockpad | null): void;
  turnOn(): void;
  turnOff(): void;
}

export class Motorcycle implements IMotorcycle {
  private _brand: string;

  private _year: number;

  private _model: string;

  private _motor: IMotor;

  protected _color: string;

  public lockpad: ILockpad | null;

  get brand(): string {
    return this._brand;
  }

  get model(): string {
    return this._model;
  }

  get year(): number {
    return this._year;
  }

  get color(): string {
    return this._color;
  }

  get motor(): IMotor {
    return this._motor;
  }

  constructor(
    brand: string,
    model: string,
    color: string,
    motor: IMotor,
    year?: number
  ) {
    this._brand = brand;
    this._model = model;
    this._color = color;
    this._motor = motor;
    this._year = year || new Date().getFullYear();
    this.lockpad = null;
  }

  setLockpad(lockpad: ILockpad | null): void {
    this.lockpad = lockpad;
  }

  turnOn(): void {
    if (this.lockpad && this.lockpad.isLocked()) {
      console.log("Cannot turn on the motorcycle. The lockpad is locked.");
      return;
    }
    this.motor.turnOn();
  }

  turnOff(): void {
    this.motor.turnOff();
  }
}
