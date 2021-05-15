import './App.css';
import {Header, JoinButton, LinkSection, SubNav, Footer} from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <SubNav/>
      <JoinButton/>
      <LinkSection section = 'Programming'/>
      <LinkSection section = 'Technology'/>
      <LinkSection section = 'Cryptocurrency'/>
      <LinkSection section = 'Javascript'/>
      <LinkSection section = 'Python'/>
      <LinkSection section = 'Blockchain'/>
      <LinkSection section = 'Gaming'/>
      <LinkSection section = 'AI'/>
      <LinkSection section = 'Startup'/>
      <LinkSection section = 'React'/>
      <LinkSection section = 'Security'/>
      <LinkSection section = 'Slogging'/>
      <LinkSection section = 'Hackernoon Podcast'/>
      <LinkSection section = 'Decentralization'/>
      <LinkSection section = 'Velo'/>
      <LinkSection section = 'Hackernoon'/>
      <LinkSection section = 'Decentralized Internet'/>
      <LinkSection section = 'Software Development'/>
      <Footer/>
    </div>
  );
}

export default App;
