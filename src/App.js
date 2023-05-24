import './App.css';
import { Dollar, Person, Logo } from './Design/export';
import StyledInput from './styledInput';
import Tip from './tips';
import { useState } from 'react';
import Summary from './sumComp';

function App() {
  // State variables
  let [bill, setBill] = useState("");
  let [people, setPeople] = useState("");
  let [tip, setTip] = useState(0);

  // Event handlers
  let tipChanger = (event) => {
    setTip(event.target.attributes.number.value);
  }
  let billChanger = (event) => {
    setBill(event.target.value);
  }
  let peopleChanger = (event) => {
    setPeople(event.target.value);
  }

  // Calculation variables
  let tipPay;
  let tipPerPerson;
  let amountPay;
  let amountPerPerson;
  if (tip > 0 && bill > 0 && people > 0) {
    tipPay = (parseInt(bill) * tip).toFixed(2) / 100;
    tipPerPerson = tipPay / people;
    amountPay = parseInt(bill) + tipPay;
    amountPerPerson = amountPay / parseInt(people);
  } else if (bill > 0 && people > 0) {
    tipPerPerson = 0.00;
    amountPay = parseInt(bill);
    amountPerPerson = amountPay / parseInt(people);
  } else {
    tipPerPerson = 0.00;
    amountPerPerson = 0.00;
  }

  // Reset button style
  let buttonStyle;
  if (tip > 0 || bill > 0 || people > 0) {
    buttonStyle = "app__container-result__reset-button-active";
  } else {
    buttonStyle = "app__container-result__reset-button";
  }

  // Reset function
  let reseter = (event) => {
    if (event.target.className == "app__container-result__reset-button-active") {
      setBill("");
      setPeople("");
      setTip(0);
    }
  }

  let val;
  tip != 0 ? (val = tip) : (val = "Custom");

  // ID variables for conditional styling
  let billId;
  let peopleId;
  if (parseInt(bill) === 0) {
    billId = "zero-bill";
  } else {
    billId = "notZero-bill";
  }
  if (parseInt(people) === 0) {
    peopleId = "zero-people";
  } else {
    peopleId = "notZero-people";
  }

  return (
    <div className="app">
      <div className='app__logo'>
        <img src={Logo} alt="logo image" />
      </div>
      <div className='app__container'>
        <div className='app__container-info'>
          <div className='app__container-info-spans'>
            <span>Bill</span>
            <span id={billId}>Can't be zero</span>
          </div>
          <StyledInput
            bill={bill}
            cId="bill"
            image={Dollar}
            inp={<input placeholder='0' value={bill} onChange={billChanger} id="bill" type="number" min={0} step={0.01}></input>}
          />
          <span id="tip-span">Select Tip %</span>
          <div className='app__container-info__tips'>
            {/* Render the Tip component for each tip option */}
            <Tip onClick={tipChanger} value="5%" num={5} tip={tip} />
            <Tip onClick={tipChanger} value="10%" num={10} tip={tip} />
            <Tip onClick={tipChanger} value="15%" num={15} tip={tip} />
            <Tip onClick={tipChanger} value="25%" num={25} tip={tip} />
            <Tip onClick={tipChanger} value="50%" num={50} tip={tip} />
            <input value={val} placeholder='Custom' onChange={(event) => { setTip(event.target.valueAsNumber) }}
              type="number" id="custom" />
          </div>
          <div className='app__container-info-spans'>
            <span>Number of People</span>
            <span id={peopleId}>Can't be zero</span>
          </div>
          <StyledInput
            people={people}
            cId="people"
            image={Person}
            inp={<input placeholder='0' value={people} onChange={peopleChanger} id="people" type="number" min={0} step={1}></input>}
          />
        </div>
        <div className='app__container-result'>
          {/* Render the Summary component */}
          <Summary tipToPay={tipPerPerson.toFixed(2)} amountToPay={amountPerPerson.toFixed(2)} />
          <div onClick={reseter} className={buttonStyle}>
            RESET
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;