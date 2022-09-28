export function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const cur = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(cur)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + cur;
      break;
    case "-":
      computation = prev - cur;
      break;
    case "*":
      computation = prev * cur;
      break;
    case "÷":
      computation = prev / cur;
      break;
    // no default
  }
  return computation.toString();
}
