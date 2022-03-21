import './App.css';
import LoginNavbar from './component/LoginNavbar';
import ResponsiveNavbar from './component/ResponsiveNavbar';
import UserNavbar from './component/UserNavbar';

function App() {
  return (
    <div className="navbar">
      <LoginNavbar />
      <UserNavbar />
      <ResponsiveNavbar />
    </div>
  );
}

export default App;
