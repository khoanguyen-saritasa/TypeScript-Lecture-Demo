enum PowerMode {
  On = "On",
  Off = "Off",
  Test = "Test"
}

class Machine {
  private powerMode: PowerMode;

  constructor() {
    this.powerMode = PowerMode.On
  }
}

// ... instead of

class BadMachine {
  private powerMode: number;
}
