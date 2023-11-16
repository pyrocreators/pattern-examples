import { OperationHandler, OperationType } from "./calculator.model";

abstract class BaseHandler implements OperationHandler {
  private nextHandler: OperationHandler | null = null;

  setNextHandler(handler: OperationHandler): void {
    this.nextHandler = handler;
  }

  handleRequest(request: {
    operation: OperationType;
    operand1: number;
    operand2: number;
  }): void {
    if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    } else {
      console.log("Operation not supported");
    }
  }
}

class AdditionHandler extends BaseHandler {
  handleRequest(request: {
    operation: OperationType;
    operand1: number;
    operand2: number;
  }): void {
    if (request.operation === "add") {
      const result = request.operand1 + request.operand2;
      console.log(`${request.operand1} + ${request.operand2} = ${result}`);
    } else {
      super.handleRequest(request);
    }
  }
}

class SubtractionHandler extends BaseHandler {
  handleRequest(request: {
    operation: OperationType;
    operand1: number;
    operand2: number;
  }): void {
    if (request.operation === "subtract") {
      const result = request.operand1 - request.operand2;
      console.log(`${request.operand1} - ${request.operand2} = ${result}`);
    } else {
      super.handleRequest(request);
    }
  }
}

class MultiplicationHandler extends BaseHandler {
  handleRequest(request: {
    operation: OperationType;
    operand1: number;
    operand2: number;
  }): void {
    if (request.operation === "multiply") {
      const result = request.operand1 * request.operand2;
      console.log(`${request.operand1} * ${request.operand2} = ${result}`);
    } else {
      super.handleRequest(request);
    }
  }
}

class DivisionHandler extends BaseHandler {
  handleRequest(request: {
    operation: OperationType;
    operand1: number;
    operand2: number;
  }): void {
    if (request.operation === "divide") {
      if (request.operand2 !== 0) {
        const result = request.operand1 / request.operand2;
        console.log(`${request.operand1} / ${request.operand2} = ${result}`);
      } else {
        console.log("Cannot divide by zero");
      }
    } else {
      super.handleRequest(request);
    }
  }
}

const additionHandler = new AdditionHandler();
const subtractionHandler = new SubtractionHandler();
const multiplicationHandler = new MultiplicationHandler();
const divisionHandler = new DivisionHandler();

additionHandler.setNextHandler(subtractionHandler);
additionHandler.setNextHandler(subtractionHandler);
multiplicationHandler.setNextHandler(divisionHandler);

additionHandler.handleRequest({ operation: "add", operand1: 15, operand2: 5 });
additionHandler.handleRequest({
  operation: "subtract",
  operand1: 15,
  operand2: 5,
});
divisionHandler.handleRequest({
  operation: "divide",
  operand1: 50,
  operand2: 5,
});
multiplicationHandler.handleRequest({
  operation: "divide",
  operand1: 50,
  operand2: 0,
});
