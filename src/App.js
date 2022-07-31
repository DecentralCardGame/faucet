import HCaptcha from '@hcaptcha/react-hcaptcha';
import {useRef, useState} from "react";

const BACKEND_URL_ENDPOINT = process.env.REACT_APP_BACKEND_URL_ENDPOINT
const HCAPTCHA_SITEKEY = process.env.REACT_APP_BACKEND_URL_ENDPOINT

function App() {
  const [captcha, setCaptcha] = useState('');
  const [status, setStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('')

  const inputRef = useRef(null);

  const handleClick = async event => {
      event.preventDefault();

      const params = new URLSearchParams();
      params.append('address', inputRef.current.value);
      params.append('token', captcha)
      const response = await fetch(`${BACKEND_URL_ENDPOINT}/api/claimTokens`, {
          method: 'POST',
          body: params,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
      });


      const json = await response.json();

      if (response.status === 401) {
          setStatus('Error')
          setStatusMessage("Error captcha. Please reload page");
          return;
      }

      if (response.status === 402) {
          setStatus('Error')
          setStatusMessage('You have already claimed tokens');
          return;
      }

      if (response.status === 403) {
        setStatus('Error')
        setStatusMessage('Probably the incorrect address');
        return;
    }

      setStatus('OK');
      setStatusMessage(`Success! ${json.result}`);
  };

  async function onVerifyCaptcha(token) {
      setCaptcha(token);
  }

  return (
    <div className="container">
        {
            <div className={ (status === 'OK') ? 'alarm success' : status !== '' ? 'alarm error' : 'alarm__hide'}>
                {statusMessage}
            </div>
        }

      <main className="main">
          <div className="wrapper__title">
              <h1>Crowd Control</h1>
              <h2>Faucet: Cardchain</h2>
          </div>
          <form action="">
              <div className="wrapper__wallet">
                  <input
                      type="text"
                      placeholder="Enter your address"
                      ref={inputRef}
                  />
              </div>
              <div className="wrapper__claim">
                  <div className="captcha">
                      <HCaptcha sitekey={HCAPTCHA_SITEKEY} onVerify={onVerifyCaptcha}/>
                  </div>
                  <button onClick={handleClick}>Claim</button>
              </div>
          </form>
      </main>

      <footer className="footer">
          Powered by icodragon [NODERS]#4560
      </footer>
    </div>
  );
}

export default App;
