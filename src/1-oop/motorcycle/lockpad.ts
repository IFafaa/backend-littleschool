export interface ILockpad {
  lock(): void;
  unlock(): void;
  isLocked(): boolean;
}

export class Lockpad implements ILockpad {
  private locked: boolean;

  constructor() {
    this.locked = false;
  }

  lock(): void {
    if (!this.locked) {
      this.locked = true;
      console.log("The lockpad is now locked.");
    } else {
      console.log("The lockpad is already locked.");
    }
  }

  unlock(): void {
    if (this.locked) {
      this.locked = false;
      console.log("The lockpad is now unlocked.");
    } else {
      console.log("The lockpad is already unlocked.");
    }
  }

  isLocked(): boolean {
    return this.locked;
  }
}
