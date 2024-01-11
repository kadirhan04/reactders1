
import './App.css';
import Header from './components/Header';
import Main from "./components/main";
import Footer from "./components/footer";
function App() {
  //bir birleseni kullanmak için birlesen ismi yazarız9satır
  return (
    <div className="App">
      <Header />

      <Main />

<Footer />
      <header className="App-header">
       {/* <img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          selam
        </a>
      </header>
    </div>
  );
}

export default App;
