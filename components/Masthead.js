import * as React from "react";
import Link from "next/link";

const Masthead = () => (
  <div className="blankslate">

    <div className="container-md clearfix">
      <div className="console">
        <div id="terminal">
          <div className="block table">
            <div className="row"><span style={{color: '#33ff00'}}>$</span> ls -la *fn() | while (life.true) => meaningOfLife</div>
            <div className="row">&nbsp;</div>
          </div>
          <div id="typer" className="block table">

          </div>
          <div className="cursor">guest<span style={{color: '#33ff00'}}>@ahadb:$</span> <span className="input"></span><span
            className="pulse">_</span></div>
        </div>
      </div>

      <div className="blog-description">
        <Link href="/"><h1><a className="blog-heading">Ahad Bokhari</a></h1></Link>
        <p>Front end engineer ― I like building software. Get <a href="#" style={{color: '#C3447A', fontWeight: 600}}>to know me</a>, find <a href="#" style={{color: '#C3447A', fontWeight: 600}}>me on Github</a>, or read onwards:</p>

        <ul>
          <li><div className="ex-icon"><i className="fas fa-external-link-alt"></i></div><div className="link"><a style={{color: '#C3447A', fontWeight: 600}} href="http://ahadb.com/2016/10/12/async-js/">Asynchronous JavaScript</a></div></li>
          <li><div className="ex-icon"><i className="fas fa-external-link-alt"></i></div><div className="link"><a style={{color: '#C3447A', fontWeight: 600}} href="http://ahadb.com/2017/03/27/knowledge-provocateur/">Knowledge Provocateur</a></div></li>
          <li><div className="ex-icon"><i className="fas fa-external-link-alt"></i></div><div className="link"><a style={{color: '#C3447A', fontWeight: 600}} href="http://ahadb.com/2007/10/22/visicalc/">VisiCalc</a></div></li>
        </ul>
      </div>
    </div>
    <style jsx>{`
    a {
      color: #24292e;
      text-decoration: underline;
    }

    a.blog-heading {
      text-decoration: none !important;
      cursor: pointer;
    }

    a.blog-heading:hover {
      text-decoration: underline !important;
    }

    h1 {
          font-size: 30px;
    font-weight: 700;
    }

      ul li {
        list-style: none;
        color: #C3447A;
        width: 210px;
        color: #24292e;
      }

      .blog-description {
              float: left;
              text-align: left;
              margin-left: -70px;
              width: 235px;
              margin-top: 21px !important;
              font-size: 15px;
      }

      .ex-icon {
        float: left;
      }

      .link {
        float: left;
        margin-left: 10px;

      }

    `}</style>

  </div>
)

export default Masthead
