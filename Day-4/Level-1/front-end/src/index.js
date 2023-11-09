import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import jsImage from './images/js.jpeg';
import htmlImage from './images/html.jpeg';
import cssImage from './images/css3.jpeg';
import reactImage from './images/react-log.png';

// Alternative texts go here
const JS_ALTER = 'JS image goes here';
const HTML_ALTER = 'html image goes here';
const CSS_ALTER = 'css image goes here';
const REACT_ALTER = 'react image goes here';

// Application logic goes here
const h2 = <h1>Front End Technologies</h1>;
const section = (
  <section id='images'>
    <div className='image-container'>
      <div className='image-item'><img src={jsImage} alt={JS_ALTER} /></div>
      <div className='image-item'><img src={htmlImage} alt={HTML_ALTER} /></div>
      <div className='image-item'><img src={cssImage} alt={CSS_ALTER} /></div>
      <div className='image-item'>      <img src={reactImage} alt={REACT_ALTER} /></div>
    </div>
  </section>
);
const app = ()=>(
  <div>
    {h2}
    {section}
  </div>
);

const rootDiv = document.getElementById('root');

ReactDOM.render(<App/>, rootDiv);
