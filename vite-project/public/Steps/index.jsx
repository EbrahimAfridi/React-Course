import {useState} from "react";
import "./index.css";
import Button from "./Button.jsx";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Index () {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  }

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  }


  return(
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      { isOpen && ( <div className="steps">      {/* Conditional Rendering */}
          <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">Step ${step}: ${messages[step - 1]}</p>

        <div className="buttons">
          <Button
            bgColor="#7950f2"
            textColor="#fff"
            onClick={handlePrevious}
          >
            <span>⏮️</span> Previous
          </Button>
          <Button
            bgColor="#7950f2"
            textColor="#fff"
            onClick={handleNext}
          >
            Next <span>⏭️</span>
          </Button>
        </div>
      </div>
      )}
    </>
  );
}

