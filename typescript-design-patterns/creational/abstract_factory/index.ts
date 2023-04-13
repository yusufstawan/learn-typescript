enum ComputerType {
  PC = "pc",
  LAPTOP = "laptop",
}

abstract class Computer {
  protected type: ComputerType;
  protected monitor: string;

  constructor(type: ComputerType, monitor: string) {
    this.type = type;
    this.monitor = monitor;
  }

  abstract getModel(): string;
}

class PC extends Computer {
  constructor(monitor: string) {
    super(ComputerType.PC, monitor);
  }

  getModel(): string {
    return `${this.type} with ${this.monitor}`;
  }
}

class Laptop extends Computer {
  constructor(monitor: string) {
    super(ComputerType.LAPTOP, monitor);
  }

  getModel(): string {
    return `${this.type} with ${this.monitor}`;
  }
}
