export type OperationType = "add" | "subtract" | "divide" | "multiply";

export interface OperationHandler {
  setNextHandler(handler: OperationHandler): void;
  handleRequest(request: {
    operation: OperationType;
    operand1: number;
    operand2: number;
  }): void;
}
