interface Clock {
  currentTime: Date;
  setTime(d: Date): void;
}

interface Clock2 extends Clock {
  timezone: string;
}

class TimezoneClock implements Clock2 {
    timezone: string;
    currentTime: Date;
    setTime(d: Date): void {
        throw new Error("Method not implemented.");
    }
}
