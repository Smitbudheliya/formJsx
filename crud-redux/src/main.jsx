//8
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'; // ✅ required for React 18+
import store from './redux/store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

