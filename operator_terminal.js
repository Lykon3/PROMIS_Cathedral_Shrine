// Operator Terminal Command Preview
function runTerminalCommand(input) {
  if (input.startsWith("open ")) {
    const nodeId = input.split(" ")[1];
    alert(`Opening node: ${nodeId}`);
  } else if (input.startsWith("classify ")) {
    const [_, nodeId, status] = input.split(" ");
    alert(`Classifying ${nodeId} as ${status}`);
  } else {
    alert("Unknown command");
  }
}
