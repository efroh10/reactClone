import './App.css';
import articles from './hnArticles';

const Header = (props) => {
  return(
    <div className='head'>
      <h1>HACKERNOON</h1>
      <input type='search'/>
      <button>Start Writing</button>
      <a>Log In</a>
      <img/>
    </div>    
  )
}

// Header.props.className = 'header';

const SubNav = (props) => {
  return(
    <nav>
      <a href='#'>Programming</a>
      <a href='#'>Technology</a>
      <a href='#'>Cryptocurrency</a>
      <a href='#'>Javascript</a>
      <a href='#'>Python</a>
      <a href='#'>Blockchain</a>
      <a href='#'>Gaming</a>
      <a href='#'>AI</a>
      <a href='#'>Startup</a>
      <a href='#'>React</a>
      <a href='#'>Security</a>
      <a href='#'>Slogging</a>
      <a href='#'>Hackernoon Podcast</a>
      <a href='#'>Decentralization</a>
      <a href='#'>Velo</a>
      <a href='#'>Hackernoon</a>
      <a href='#'>Decentralized Internet</a>
      <a href='#'>Software Development</a>
    </nav>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <SubNav/>
    </div>
  );
}

export default App;
