import defaultExport from './hnArticles.js';
import expectedExport from './footerData.js';

export const Header = (props) => {
    return(
      <div className = 'head'>
        <h1>HACKERNOON</h1>
        <input type='search'/>
        <button>Start Writing</button>
        <a href=''>Log In</a>
        <img/>
      </div>    
    );
}
  
export const SubNav = (props) => {
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
    );
}

export const LinkSection = (props) =>   {
    let sectionName = props.section;
    return(
      <div>
        <div className=''>{props.sectionHeading}</div>
        <Article section = {sectionName} index = {0}/>
        <Article section = {sectionName} index = {1}/>
        <Article section = {sectionName} index = {2}/>
      </div>
    );
}

export const JoinButton = (props) =>  {
  return(
    <div>
      <form action = 'https://hackernoon.com'>
        <button>Join Hacker Noon</button>
      </form>
      <p>Create your free account to unlock your custom reading experience.</p>
    </div>
  );
}

export const Footer = (props) =>  {
  return(
    <div>
      <FooterLinkSection section = 'About'/>
      <FooterLinkSection section = 'Read'/>
      <FooterLinkSection section = 'Write'/>
    </div>
  );
}

const FooterLinkSection = (props)  =>  {
  let sectionTitle = props.section;
  return(
    <div>
      <FooterLink section = {sectionTitle} index = {0}/>
      <FooterLink section = {sectionTitle} index = {1}/>
      <FooterLink section = {sectionTitle} index = {2}/>
      <FooterLink section = {sectionTitle} index = {3}/>
      <FooterLink section = {sectionTitle} index = {4}/>
      <FooterLink section = {sectionTitle} index = {5}/>
    </div>
  );
}

const FooterLink = (props) =>  {
  return(
    <a href = {expectedExport[props.section][props.index]['href']}>{expectedExport[props.section][props.index]['displayName']}</a>
  );
}





const Article = (props)  =>   {
    let sectionName = props.section;
    let indexNumber = props.index;

    return(
        <div>
          <Title section = {sectionName} index = {indexNumber}/>
          <Link section = {sectionName} index = {indexNumber}/>
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
  return(
    <p>{title}</p>
  );
}

const Link = (props) =>  {
  let link = defaultExport[props.section][props.index]['titleLink'];
  return(
    <p>{link}</p>
  );
}

const Avatar = (props) =>  {
  let avatar = defaultExport[props.section][props.index]['avatarSrc'];
  return(
    <p>{avatar}</p>
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