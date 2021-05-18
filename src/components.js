import defaultExport from './hnArticles.js';
import expectedExport from './footerData.js';

export const Header = (props) => {
    return(
      <div className = 'head'>
        <h1>HACKERNOON</h1>
        <input type='search' className = 'headerInput search'/>
        <button className = 'headerInput button'>Start Writing</button>
        <a href='' className = 'headerInput'>Log In</a>
        <button className='darkMode'></button>
      </div>    
    );
}
  
export const SubNav = (props) => {
    return(
      <nav className = 'nav'>
        <a className = 'navLink' href='#Programming'>Programming </a>
        <a className = 'navLink' href='#Technology'> Technology </a>
        <a className = 'navLink' href='#Cryptocurrency'> Cryptocurrency </a>
        <a className = 'navLink' href='#Javascript'> Javascript </a>
        <a className = 'navLink' href='#Python'> Python </a>
        <a className = 'navLink' href='#Blockchain'> Blockchain </a>
        <a className = 'navLink' href='#Gaming'> Gaming </a>
        <a className = 'navLink' href='#AI'> AI </a>
        <a className = 'navLink' href='#Startup'> Startup </a>
        <a className = 'navLink' href='#React'> React </a>
        <a className = 'navLink' href='#Security'> Security </a>
        <a className = 'navLink' href='#Slogging'> Slogging </a>
        <a className = 'navLink' href='#Hackernoon Podcast'> Hackernoon Podcast </a>
        <a className = 'navLink' href='#Decentralization'> Decentralization </a>
        <a className = 'navLink' href='#Velo'> Velo </a>
        <a className = 'navLink' href='#Hackernoon'> Hackernoon </a>
        <a className = 'navLink' href='#Decentralized Internet'> Decentralized Internet </a>
        <a className = 'navLink' href='#Software Development'> Software Development</a>
      </nav>
    );
}

export const MainArea = (props) =>  {
  return(
    <div className = 'mainArea'>
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
    </div>
  );
}

export const JoinButton = (props) =>  {
  return(
    <div className = 'joinButtonSection'>
      <form action = 'https://hackernoon.com'>
        <button className = 'joinButton'>Join Hacker Noon</button>
      </form>
      <br/>
      <p className = 'message'>Create your free account to unlock your custom reading experience.</p>
    </div>
  );
}

export const Footer = (props) =>  {
  return(
    <div className = 'footer'>
      <FooterLinkSection section = 'About'/>
      <FooterLinkSection section = 'Read'/>
      <FooterLinkSection section = 'Write'/>
    </div>
  );
}



const FooterLinkSection = (props)  =>  {
  let sectionTitle = props.section;
  return(
    <div className = 'footerLinkSection'>
      <div>{sectionTitle}</div>
      <FooterLink section = {sectionTitle} index = {0}/>
      <br/>
      <FooterLink section = {sectionTitle} index = {1}/>
      <br/>
      <FooterLink section = {sectionTitle} index = {2}/>
      <br/>
      <FooterLink section = {sectionTitle} index = {3}/>
      <br/>
      <FooterLink section = {sectionTitle} index = {4}/>
      <br/>
      <FooterLink section = {sectionTitle} index = {5}/>
    </div>
  );
}

const FooterLink = (props) =>  {
  return(
    <a className = 'footerLink' href = {expectedExport[props.section][props.index]['href']}>{expectedExport[props.section][props.index]['displayName']}</a>
  );
}



const LinkSection = (props) =>   {
  let sectionName = props.section;
  return(
    <div className = 'linkSection' id = {props.section}>
      <div className = 'sectionName'>{props.section}</div>
      <div className = 'links'>
        <Article section = {sectionName} index = {0}/>
        <Article section = {sectionName} index = {1}/>
        <Article section = {sectionName} index = {2}/>
      </div>
    </div>
  );
}

const Article = (props)  =>   {
    let sectionName = props.section;
    let indexNumber = props.index;
    return(
        <div className = 'article'>
          <Title section = {sectionName} index = {indexNumber}/>
          <Avatar section = {sectionName} index = {indexNumber}/>
          <Username section = {sectionName} index = {indexNumber}/>
          <Author section = {sectionName} index = {indexNumber}/>
          <ReadIn section = {sectionName} index = {indexNumber}/>
          <Posted section = {sectionName} index = {indexNumber}/>
          <Hashtag section = {sectionName} index = {indexNumber}/>
        </div>
    );
}

const Title = (props)  =>  {
  let title = defaultExport[props.section][props.index]['titleText'];
  let link = defaultExport[props.section][props.index]['titleLink'];
  return(
    <a className = 'link' href = {link} >{title}</a>
  );
}

// const Link = (props) =>  {
//   let link = defaultExport[props.section][props.index]['titleLink'];
//   return(
//     <p>{link}</p>
//   );
// }

const Avatar = (props) =>  {
  let avatar = defaultExport[props.section][props.index]['avatarSrc'];
  return(
    <img className = 'avatar' src = {avatar}></img>
  );
}

const Username = (props) =>  {
  let username = defaultExport[props.section][props.index]['userName'];
  return(
    <p>{username}</p>
  );
}

const Author = (props) =>  {
  let author = defaultExport[props.section][props.index]['author'];
  return(
    <p>{author}</p>
  );
}

const ReadIn = (props) =>  {
  let readIn = defaultExport[props.section][props.index]['readIn'];
  return(
    <p>{readIn}</p>
  );
}

const Posted = (props) =>  {
  let posted = defaultExport[props.section][props.index]['posted'];
  return(
    <p>{posted}</p>
  );
}

const Hashtag = (props) =>  {
  let hashtag = defaultExport[props.section][props.index]['hashTag'];
  return(
    <p>{hashtag}</p>
  );
}