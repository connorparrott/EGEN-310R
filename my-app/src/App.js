import React, {useState} from 'react';
import './App.css';

function App() {
    const totalVolume = 150;
    const gauge = React.useRef(null);
    const [foodRemaining, setFoodRemaining] = useState(totalVolume) //initialized at 100 oz storage
    const [servingSize, setServingSize] = useState(15)  //initialized at 15 oz serving size
    const [foodInterval, setFoodInterval] = useState(3) //initialized at 3 times per day being fed


    function lostConnection(){
        //if connection to server
        alert("Unable to connect to your pet feeder, please call (123) 456-7890 or send someone to check on your pet")
    }
    function manualFeed() {
        if (foodRemaining > servingSize) {
            setFoodRemaining(foodRemaining - servingSize)
            gauge.current.style.width = ((foodRemaining - servingSize) / totalVolume * 100  ) + '%';
            alert('Your pet has been fed ' + servingSize + "oz");
        } else{
            setFoodRemaining(0)
            gauge.current.style.width = "0%"
            alert("Your pet has run out of food and was not given a full serving. Your pet received " + foodRemaining + "oz")
        }
    }

    function refillFood() {
        setFoodRemaining(totalVolume)
        gauge.current.style.width = '100%';
    }

    return (
        <div className="App">
            <div className="Header">
                <h1>Automated Pet Feeder</h1>
            </div>
            <div className="Body">
                <div className="Preferences"></div>
                <div>Food Remaining: <span>{foodRemaining}</span></div>
                <div>Current Serving Size: <span>{servingSize}</span></div>
                <div className="gauge-container">
                    <div className="gauge" ref={gauge}></div>
                    <span className="gauge-label"> Days Remaining with Current Serving Size <span id="amount"> {foodRemaining / servingSize} </span>
          </span>
                </div>
                    <label>Change Serving Size: </label><br/>
                    <input className="inputField" type="text" id="serving"></input>
                    <div>
                        <button className="buttonTemp" id="refill-button" onClick={refillFood}>Refill</button>
                        <button className="buttonTemp" id="lost-connection" onClick={lostConnection}>Lost Connection</button>
                        <button className="buttonTemp" id="ChangeSS" onClick={()=> {setServingSize(document.getElementById("serving").value)}}>Change</button>
                    </div>
                <div>
                    <button className="button" id="manual-button" onClick={manualFeed}>
                        Feed Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
