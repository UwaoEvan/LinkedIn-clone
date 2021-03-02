import './App.css';
import Header from './components/dashboard/Header';
import LeftSidebar from '../src/components/dashboard/LeftSidebar';
import NewPost from '../src/components/dashboard/NewPost';

function App() {
  return (
    <div className="app__container">
      <Header />
      <div className='app__items'>
        <LeftSidebar />
        <NewPost />
      </div>
    </div>
  );
}

export default App;
