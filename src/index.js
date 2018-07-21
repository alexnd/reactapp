import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
const base64 = require('base-64');
require('../src/globals/runtime');

const initEl = document.getElementById('init');
if (initEl) {
    let _initData = initEl.getAttribute('data-init');
    if (_initData && _initData.length) {
        try {
            if (_initData.indexOf('{') === 0) {
                    Object.assign(
                    G.INITDATA,
                    JSON.parse(_initData)
                );
            } else {
                Object.assign(
                    G.INITDATA,
                    JSON.parse(base64.decode(_initData))
                );
            }
        } catch (e) {
            //TODO hanle errors
            console.log('*initData parse error', e);
        }
    }
}

console.log('*initdata', G.INITDATA);

const rootEl = document.getElementById('root');
if (rootEl) {
    ReactDOM.render(<App />, rootEl);
} else {
    console.log('No root El');
}

registerServiceWorker();
