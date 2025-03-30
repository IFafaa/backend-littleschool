import { Motor, EFuelType, EMotorType, EMotorState } from "./motor";

describe("Motor", () => {
  it("should create a motor with valid properties", () => {
    const motor = new Motor(100, EMotorType.FOUR_STROKE, EFuelType.GASOLINE);
    expect(motor.horsepower).toBe(100);
    expect(motor.type).toBe(EMotorType.FOUR_STROKE);
    expect(motor.fuelType).toBe(EFuelType.GASOLINE);
    expect(motor.state).toBe(EMotorState.OFF);
  });

  it("should throw an error if horsepower is less than or equal to 0", () => {
    expect(
      () => new Motor(0, EMotorType.FOUR_STROKE, EFuelType.GASOLINE)
    ).toThrow("Horsepower must be greater than 0.");
  });

  it("should throw an error if electric motor does not use electric fuel type", () => {
    expect(
      () => new Motor(100, EMotorType.ELECTRIC, EFuelType.GASOLINE)
    ).toThrow("Electric motors must use electric fuel type.");
  });

  it("should throw an error if non-electric motor uses electric fuel type", () => {
    expect(
      () => new Motor(100, EMotorType.FOUR_STROKE, EFuelType.ELECTRIC)
    ).toThrow("Non-electric motors cannot use electric fuel type.");
  });

  it("should turn on the motor", () => {
    const motor = new Motor(100, EMotorType.FOUR_STROKE, EFuelType.GASOLINE);
    motor.turnOn();
    expect(motor.state).toBe(EMotorState.ON);
    expect(motor.isOn()).toBe(true);
  });

  it("should turn off the motor", () => {
    const motor = new Motor(100, EMotorType.FOUR_STROKE, EFuelType.GASOLINE);
    motor.turnOn();
    motor.turnOff();
    expect(motor.state).toBe(EMotorState.OFF);
    expect(motor.isOn()).toBe(false);
  });

  it("should correctly identify if the motor is on or off", () => {
    const motor = new Motor(100, EMotorType.FOUR_STROKE, EFuelType.GASOLINE);
    expect(motor.isOn()).toBe(false);
    motor.turnOn();
    expect(motor.isOn()).toBe(true);
  });
});
