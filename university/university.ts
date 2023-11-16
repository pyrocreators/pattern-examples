interface UniversityState {
  operate(): void;
}

class OpenState implements UniversityState {
  public operate(): void {
    console.log("University is open. Classes are in session.");
  }
}

class ClosedState implements UniversityState {
  public operate(): void {
    console.log("University is closed. No classes are in session.");
  }
}

class VacationState implements UniversityState {
  public operate(): void {
    console.log("University is on vacation. No classes are scheduled.");
  }
}

class University {
  private state: UniversityState;

  constructor(state: UniversityState) {
    this.state = state;
  }

  public setUniversityState(state: UniversityState): void {
    this.state = state;
  }

  public printUniversityState(): void {
    this.state.operate();
  }
}

const openState = new OpenState();
const university = new University(openState);

university.printUniversityState();

const vacationState = new VacationState();
university.setUniversityState(vacationState);

university.printUniversityState();

const closedState = new ClosedState();
university.setUniversityState(closedState);

university.printUniversityState();
