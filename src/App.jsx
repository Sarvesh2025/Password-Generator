import { useState } from 'react'
import './App.css'

function App() {
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(26);
    const [includeUpperCase, setIncludeUpperCase] = useState(false);
    const [includeLowerCase, setIncludeLowerCase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
  const handleCopyPassword = () => {
    
  }
  return (
    <>
      <div className="container">
        <h2>Password Generator</h2>
        {/* <div className="generator__password">
          <h3>{password}</h3>
          <button className="copy__btn">
            <i onClick={handleCopyPassword} className="far fa-clipboard"></i>
          </button>
        </div> */}

        <div className="form-group">
          <label htmlFor="password-strength">Choose Password length</label>
          <input
            className="pw"
            defaultValue={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            type="number"
            name="password-strength"
            max="26"
            min="8"
          />
        </div>
        <div className="form-group">
          <label htmlFor="uppercase-letters">Include UpperCase letters</label>
          <input
            className="uc"
            defaultValue={includeUpperCase}
            onChange={(e) => setIncludeUpperCase(e.target.checked)}
            type="checkbox"
            name="uppercaseletters"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lowercase-letters">Include LowerCase letters</label>
          <input
            className="lc"
            defaultValue={includeLowerCase}
            onChange={(e) => setIncludeLowerCase(e.target.checked)}
            type="checkbox"
            name="lowercaseletters"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Numbers">Include Numbers</label>
          <input
            className="numbers"
            defaultValue={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            type="checkbox"
            name="numbers"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Symbols">Include symbols</label>
          <input
            className="symbols"
            defaultValue={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            type="checkbox"
            name="symbols"
          />
        </div>
      </div>
    </>
  );
}

export default App
