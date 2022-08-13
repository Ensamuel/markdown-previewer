import React from 'react';
import './App.css';
import pic from './antenna.jpg'
let marked = require('marked');

export default class App extends React.Component{
 constructor(props){
  super(props);
  this.state = {
    markdown: '  <h1>We make history</h1><h2>We make change</h2><h4><a href="www.google.com">our site</a></h4><p>this is it</p><ul><li>credible</li><li>reliable</li></ul><blockquote>people with passion</blockquote><img src={pic} alt="antenna" /><p><b>we are happy to serve you</b></p>'
  }
  this.handleChange = this.handleChange.bind(this)
 } 

  handleChange(markdown){
    this.setState(this.state.markdown)
  }
  render(){

    return(
      <div>

        <div className='header'>
        Markdown Previewer
        </div>

        <div className="container">
          <div className="markdownInputing">
            <h4>Markdown input</h4>

           <textarea name="markdown input" id="editor" style={{resize:'none',height: '300px', width:'300px', fontSize:'20px'}}
           value={this.state.markdown} onChange={(e)=>{this.handleChange(e.target.value)}}
           >
           </textarea>
          </div>

          <div className="markdownPreviewer">
          <h4>Preview</h4>
          <div id='preview' style={{backgroundColor:'gray', height: '20rem', width:'20rem'}}
          dangerouslySetInnerHTML={{
            __html: marked.parse(this.state.markdown)
          }}
          >
          </div>
          </div>
        </div>
      </div>
    )
  }
}

