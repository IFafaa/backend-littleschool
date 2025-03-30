import { Lockpad } from "./lockpad";

describe("Lockpad", () => {
  let lockpad: Lockpad;

  beforeEach(() => {
    lockpad = new Lockpad();
  });

  it("should initialize as unlocked", () => {
    expect(lockpad.isLocked()).toBe(false);
  });

  it("should lock the lockpad", () => {
    lockpad.lock();
    expect(lockpad.isLocked()).toBe(true);
  });

  it("should not lock the lockpad if it is already locked", () => {
    lockpad.lock();
    lockpad.lock();
    expect(lockpad.isLocked()).toBe(true);
  });

  it("should unlock the lockpad", () => {
    lockpad.lock();
    lockpad.unlock();
    expect(lockpad.isLocked()).toBe(false);
  });

  it("should not unlock the lockpad if it is already unlocked", () => {
    lockpad.unlock();
    expect(lockpad.isLocked()).toBe(false);
  });
});
