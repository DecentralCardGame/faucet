# Faucet
![Crowd](https://user-images.githubusercontent.com/104348282/182021454-d3ffebb5-a27b-4d81-930c-486557b5569c.png)
If you want to deploy the application, first you need to do `npm install` and configure .env

Example .env
```
SECRET_KEY=HCAPTCHA_SECRET_KEY
RPC_NODE=tcp://127.0.0.1:26657

REACT_APP_BACKEND_URL_ENDPOINT=http://localhost:8081
REACT_APP_HCAPTCHA_SITEKEY=0000-0000-0000-0000-0000
```

<i>SECRET_KEY</i> - you can get on: https://dashboard.hcaptcha.com/settings<br>
<i>RPC_NODE</i> - RPC node synced in Cardchain<br>
<i>REACT_APP_BACKEND_URL_ENDPOINT</i> - Url backend endpoint<br>
<i>REACT_APP_HCAPTCHA_SITEKEY</i> - you can get on: https://dashboard.hcaptcha.com/sites

By default, the backend uses port 8081
In the frontend, port 5000

Once configured, you can run the application by issuing two commands: npm `npm run start` and `npm run server`

Made by NODERS Team<br>
Contact: icodragon [NODERS]#4560
