import './App.css';
import Header from './components/dashboard/Header';
import LeftSidebar from '../src/components/dashboard/LeftSidebar';
import Dashboard from '../src/components/dashboard/Dashboard';
import RightSidebar from '../src/components/dashboard/RightSidebar';

function App() {
  return (
    <div className="app__container">
      <Header />
      <div className='app__items'>
        <LeftSidebar />
        <Dashboard />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
