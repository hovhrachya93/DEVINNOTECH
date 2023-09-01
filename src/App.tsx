import { Provider } from 'react-redux';
import store from '@/redux/store';
import CatsRoutes from '@/router/Cats.router';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <CatsRoutes />
      </Router>
    </Provider>
  );
}

export default App;
