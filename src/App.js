import './App.css';
import NavBarContainer from './components/NavBar/NavBarContainer';

function App() {
  return (
    <>
      {/* We dont have to implement router as we have to scroll into a particular section on same page */}
      <div>
        {/* Nav Bar - Logo, about us , menu, contact us , this should be fixed and all other contents scrollable under it*/}

        <NavBarContainer />
      </div>
    </>
  );
}

export default App;
