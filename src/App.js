import './App.css';
import FitLayout from './components/layouts/FitLayout';

// 추가되는 lib

import Router from './pages/Router';

function App() {
  return (
    <FitLayout>
      <Router/>
    </FitLayout>
  );
}
export default App;
