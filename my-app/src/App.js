import logo from './logo.svg';
import './App.css';

// Get the gauge element
const gauge = document.querySelector('.gauge');

// Get the amount element
const amountElement = document.getElementById('amount');

// Decrease the amount and update the gauge width
function decreaseAmount() {
    let amount = parseInt(amountElement.textContent);
    if (amount > 0) {
        amount--;
        amountElement.textContent = amount;
        gauge.style.width = amount + '%';
    }
}

// Attach the decreaseAmount function to a button or any other event
const decreaseButton = document.getElementById('decrease-button');
decreaseButton.addEventListener('click', decreaseAmount);
function App() {
  return (
    <div className="App">
      <div className={"Header"}>
          <h1>Automated Pet Feeder</h1>
      </div>

        <div className={"Body"}>
            <div className={"Preferences"}>
            </div>
            <div>
                Food Remaining: {amountElement}
            </div>
            <div className="gauge-container">
                <div className="gauge"></div>
                <span className="gauge-label">Amount: <span id="amount">100</span></span>
            </div>
            <div>
                <button id="decrease-button">Decrease</button>
            </div>
            <div>
                <button className="Manual">Feed Now</button>
            </div>
            <div className={"Alarms"}>
                Alarms and Alerts
            </div>
        </div>
    </div>
  );
}

export default App;
