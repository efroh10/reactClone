import './App.css';
import articles from './hnArticles';
import {Header, LinkSection, SubNav} from './components';

function App() {
  return (
    <div className="App">
      <Header example = 'head'/>
      <SubNav/>
      <LinkSection sectionName='Programming'/>
      <LinkSection sectionName='Technology'/>
      <LinkSection sectionName='Cryptocurrency'/>
      <LinkSection sectionName='Javascript'/>
      <LinkSection sectionName='Python'/>
      <LinkSection sectionName='Blockchain'/>
      <LinkSection sectionName='Gaming'/>
      <LinkSection sectionName='AI'/>
      <LinkSection sectionName='Startup'/>
      <LinkSection sectionName='React'/>
      <LinkSection sectionName='Security'/>
      <LinkSection sectionName='Slogging'/>
      <LinkSection sectionName='Hackernoon Podcast'/>
      <LinkSection sectionName='Decentralization'/>
      <LinkSection sectionName='Velo'/>
      <LinkSection sectionName='Hackernoon'/>
      <LinkSection sectionName='Decentralized Internet'/>
      <LinkSection sectionName='Software Development'/>
    </div>
  );
}

export default App;
