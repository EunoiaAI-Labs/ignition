import sandbox from 'https://cdn.jsdelivr.net/npm/sandbox@0.8.6/+esm'
const iframe = document.getElementById('sandbox');
function topk(arr, k) {
    arr.sort((a, b) => b - a);
    return arr.slice(0, k);
}
// Usage: const arr = [3, 1, 4, 2, 3, 4, 4]; or const k = 3; or console.log("Top", k, "elements:", 
// topKElementsSorting(arr, k));
function plus(equat, equat1) {
  return equat + equat1;
}
// For example, console.log(plus(5, 3)); = 8
function tensor(logic, logic1, logic2, logic3, logic4) {
  function times() {
    let result = logic;
    if (logic1) result *= logic1;
    if (logic2) result *= logic2;
    if (logic3) result *= logic3;
    if (logic4) result *= logic4;
  }
  console.warn("For secure tensors on the Ignition.js library use securetensor.")
  } catch (err) {
    console.error("Ignition.js: SecureTensor has failed, check other errors somewhere in your logs.");
  }
}
function securetensor(...args) {
  try {
    // Sandbox setup
    const iframe = document.createElement('iframe');
    iframe.sandbox = "allow-scripts";
    document.body.appendChild(iframe);
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Multiply all arguments inside sandbox
    iframeDoc.write(`
      <script>
        function times(args) {
          let result = 1;
          for (let i = 0; i < args.length; i++) {
            if (args[i]) result *= args[i];
          }
          return result;
        }
      <\/script>
    `);
  } catch (err) {
    console.error("Ignition.js: SecureTensor has failed, check other errors somewhere in your logs");
  }
}
function params(temp) {
  if (x === undefined) {
    x = temp;
  }
}
