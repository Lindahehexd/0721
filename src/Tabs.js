import { useState } from "react";
import "./App.css";
import * as React from "react";
import logo from "./logo.svg";
import tab1 from "./tab1.svg";
import tab2 from "./tab2.svg";

function Tabs() {

  //reset
  const initA = () => {
    setLabelLength(0)
    setMaxRollDiameter(0)
    setCoreOutsideDiameter(0)
    setRibbonThickness(0)
    setInfo("")
  };

  const initB = () => {
    setLabelLength(0)
    setlabelHeight(0)
    setGapHeight(0)
    setAmount(0)
    setInfo2("")
  };

  //toggle state 

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  // form 1 state

  const [labelLength, setLabelLength] = useState(0);
  const [maxRollDiameter, setMaxRollDiameter] = useState(0);
  const [coreOutsideDiameter, setCoreOutsideDiameter] = useState(0);
  const [RibbonThinkness, setRibbonThickness] = useState(0);
  const [info, setInfo] = useState("");

 // form 2 state
 
  const [labelHeight, setlabelHeight] = useState(0);
  const [gapHeight, setGapHeight] = useState(0);
  const [amount, setAmount] = useState(0);
  const [info2, setInfo2] = useState("");

  // formula for form1 

  const calcLabelLength = (event) => {
    event.preventDefault();
    if (
      maxRollDiameter < 0 ||
      coreOutsideDiameter < 0||
      RibbonThinkness < 0
    ) {
      alert("Please enter a valid number");
    } else {
      let labelLength =
        maxRollDiameter * maxRollDiameter -
        (coreOutsideDiameter * coreOutsideDiameter * 3.14) /
          (RibbonThinkness * 4);
      setLabelLength(labelLength.toFixed(0));
      const fixedLabelLength = labelLength.toFixed(0);
      const inchNum = (labelLength/10)/2.54;
      const fixedinch = inchNum.toFixed(1);
      setInfo(`${fixedLabelLength} mm / ${fixedLabelLength / 10} cm / ${fixedinch} inches`)
    }
  };

// formula for form2

  const calcAmount = (event) => {
    event.preventDefault();
    if (gapHeight < 0 || labelHeight < 0) {
      alert("Please enter a valid number");
    } else {
      const amount = labelLength / (gapHeight + labelHeight);
      setAmount(amount.toFixed(0));
      setInfo2("pcs")
    }
  };

  return (
    <div className="App">
    <div className="container">
      <div>
        <img className="img" src={logo} alt="" />
      </div>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)} id="tab1"
        >
          Media Length Caculator
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)} id="tab2"
        >
          Label Calculator
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <form onSubmit={calcLabelLength}>
            <div>
          <img className="img_2" src={tab1} alt="" />
          </div>
            <div>
              <label>Max Roll Diameter (mm)</label>
              <input
                type="number"
                min="0"
                value={maxRollDiameter}
                onChange={(event) => setMaxRollDiameter(event.target.value)}
              />
            </div>
            <div>
              <label>Core Outside Diameter (mm)</label>
              <input
                type="number"
                min="0"
                value={coreOutsideDiameter}
                onChange={(event) => setCoreOutsideDiameter(event.target.value)}
              />
            </div>
            <div>
              <label>Material Thinkness (mm)</label>
              <input
                type="number"
                min="0"
                value={RibbonThinkness}
                onChange={(event) => setRibbonThickness(event.target.value)}
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button
                className="btn btn-outline"
                onClick={initA}
                type="submit"
              >
                Reset
              </button>
            </div>

          </form>
          <div className="center">
            <h3> Material total length:</h3>
            {/* <h3>
              {labelLength} mm / {labelLength / 10} cm / {inchShort} inches
            </h3> */}
            <h3>{info}</h3>
          </div>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <form onSubmit={calcAmount}>
            <div>
            <div>
          <img className="img_2" src={tab2} alt="" />
          </div>
              <div>
                <label>Material Length (mm)</label>
                <input
                  type="number"
                  min="0"
                  value={labelLength}
                  onChange={(event) => setLabelLength(event.target.value)}
                />
              </div>
              <label>Label Height (mm)</label>
              <input
                type="number"
                min="0"
                value={labelHeight}
                onChange={(event) => setlabelHeight(event.target.value)}
              />
            </div>
            <div>
              <label>Gap Height (mm)</label>
              <input
                type="number"
                min="0"
                value={gapHeight}
                onChange={(event) => setGapHeight(event.target.value)}
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button
                className="btn btn-outline"
                onClick={initB}
                type="submit"
              >
                Reset
              </button>
            </div>
          </form>
          <div className="center">
            <h3> You're able to print : {amount} {info2} </h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Tabs;
