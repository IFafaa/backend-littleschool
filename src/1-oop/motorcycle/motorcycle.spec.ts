import { Lockpad } from "./lockpad";
import { EFuelType, EMotorType, Motor } from "./motor";
import { Motorcycle } from "./motorcycle";

describe("Motorcycle relations with lockpad", () => {
  it("should turn on motorcycle unlocked", () => {
    const motor = new Motor(21.3, EMotorType.FOUR_STROKE, EFuelType.GASOLINE);
    const motorcycle = new Motorcycle("Yamaha", "FZ-25", "Black", motor, 2019);
    const lockpad = new Lockpad();

    motorcycle.setLockpad(lockpad);
    motorcycle.lockpad?.unlock();
    motorcycle.turnOn();

    expect(motorcycle.lockpad?.isLocked()).toBeFalsy();
    expect(motorcycle.motor.isOn()).toBeTruthy();
  });

  it("should not turn on motorcycle locked", () => {
    const motor = new Motor(21.3, EMotorType.FOUR_STROKE, EFuelType.GASOLINE);
    const motorcycle = new Motorcycle("Yamaha", "FZ-25", "Black", motor, 2019);
    const lockpad = new Lockpad();

    motorcycle.setLockpad(lockpad);
    motorcycle.lockpad?.lock();
    motorcycle.turnOn();

    expect(motorcycle.lockpad?.isLocked()).toBeTruthy();
    expect(motorcycle.motor.isOn()).toBeFalsy();
  });

  it("should turn on motorcycle without lockpad", () => {
    const motor = new Motor(21.3, EMotorType.FOUR_STROKE, EFuelType.GASOLINE);
    const motorcycle = new Motorcycle("Yamaha", "FZ-25", "Black", motor, 2019);

    motorcycle.turnOn();

    expect(motorcycle.lockpad).toBeNull();
    expect(motorcycle.motor.isOn()).toBeTruthy();
  });

  it("should turn off motorcycle", () => {
    const motor = new Motor(21.3, EMotorType.FOUR_STROKE, EFuelType.GASOLINE);
    const motorcycle = new Motorcycle("Yamaha", "FZ-25", "Black", motor, 2019);

    motorcycle.turnOn();
    motorcycle.turnOff();

    expect(motorcycle.motor.isOn()).toBeFalsy();
  });
});
