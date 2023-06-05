import React from 'react';
import './App.css';

function App() {
    const amountElement = React.useRef(null);
    const gauge = React.useRef(null);

    function decreaseAmount() {
        let amount = parseInt(amountElement.current.textContent);
        if (amount > 0) {
            amount--;
            amountElement.current.textContent = amount;
            gauge.current.style.width = amount + '%';
        }
    }

    function manualFeed() {
        decreaseAmount();
        alert('Your pet has been fed');
    }

    function refillFood() {
        let amount = 100; // Replace with actual sensor value
        amountElement.current.textContent = amount;
        gauge.current.style.width = amount + '%';
    }

    React.useEffect(() => {
        const decreaseButton = document.getElementById('decrease-button');
        const refillButton = document.getElementById('refill-button');

        decreaseButton.addEventListener('click', decreaseAmount);
        refillButton.addEventListener('click', refillFood);
    }, []);

    return (
        <div className="App">
            <div className="Header">
                <h1>Automated Pet Feeder</h1>
            </div>
            <div className="Body">
                <div className="Preferences"></div>
                <div>Food Remaining: <span ref={amountElement}>100</span></div>
                <div className="gauge-container">
                    <div className="gauge" ref={gauge}></div>
                    <span className="gauge-label">
            Amount: <span id="amount">100</span>
          </span>
                </div>
                <div>
                    <button className="increment-button" id="refill-button">
                        Refill
                    </button>
                    <button className={"decrease-button"} id={"decrease-button"}>Decrease</button>
                </div>
                <div>
                    <button className="button" id="manual-button" onClick={manualFeed}>
                        Feed Now
                    </button>
                </div>
                <div className="Alarms">Alarms and Alerts</div>
            </div>
        </div>
    );
}

export default App;
