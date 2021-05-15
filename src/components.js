export const Header = ({example, ...props}) => {
    return(
      <div className={example}>
        <h1>HACKERNOON</h1>
        <input type='search'/>
        <button>Start Writing</button>
        <a href=''>Log In</a>
        <img/>
      </div>    
    );
}
  
// Header.props.className = 'header';
  
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
    return(
        <div className=''>{props.sectionName}</div>
    );
}

export const Article = (props)  =>   {
    return(
        <div></div>
    );
}