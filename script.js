function getRandomSignal() {
  const pairs = ["EUR/USD", "GBP/JPY", "AUD/CAD", "USD/CHF"];
  const directions = ["CALL", "PUT"];
  const pair = pairs[Math.floor(Math.random() * pairs.length)];
  const direction = directions[Math.floor(Math.random() * directions.length)];
  const time = new Date().toLocaleTimeString();
  return `${time} - ${pair} - ${direction}`;
}

function updateSignals() {
  const signalsDiv = document.getElementById("signals");
  const signal = document.createElement("div");
  signal.className = "signal";
  signal.textContent = getRandomSignal();
  signalsDiv.prepend(signal);
}

setInterval(updateSignals, 60000); // 1 min
updateSignals();
