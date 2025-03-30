export enum EFuelType {
  GASOLINE = "GASOLINE",
  DIESEL = "DIESEL",
  ELECTRIC = "ELECTRIC",
}

export enum EMotorType {
  TWO_STROKE = "TWO_STROKE",
  FOUR_STROKE = "FOUR_STROKE",
  ELECTRIC = "ELECTRIC",
}

export enum EMotorState {
  ON = "ON",
  OFF = "OFF",
}

export interface IMotor {
  horsepower: number;
  type: EMotorType;
  fuelType: EFuelType;

  turnOn(): void;
  turnOff(): void;
  isOn(): boolean;
}

export class Motor implements IMotor {
  private _horsepower: number;

  private _type: EMotorType;

  private _fuelType: EFuelType;

  private _state: EMotorState;

  get horsepower(): number {
    return this._horsepower;
  }

  get type(): EMotorType {
    return this._type;
  }

  get fuelType(): EFuelType {
    return this._fuelType;
  }

  get state(): EMotorState {
    return this._state;
  }

  constructor(horsepower: number, type: EMotorType, fuelType: EFuelType) {
    if (horsepower <= 0) throw new Error("Horsepower must be greater than 0.");

    if (type === EMotorType.ELECTRIC && fuelType !== EFuelType.ELECTRIC)
      throw new Error("Electric motors must use electric fuel type.");

    if (type !== EMotorType.ELECTRIC && fuelType === EFuelType.ELECTRIC)
      throw new Error("Non-electric motors cannot use electric fuel type.");

    this._horsepower = horsepower;
    this._type = type;
    this._fuelType = fuelType;
    this._state = EMotorState.OFF;
  }

  turnOn(): void {
    this._state = EMotorState.ON;
    console.log("Motor is turned on.");
  }

  turnOff(): void {
    this._state = EMotorState.OFF;
    console.log("Motor is turned off.");
  }

  isOn(): boolean {
    return this._state === EMotorState.ON;
  }
}
