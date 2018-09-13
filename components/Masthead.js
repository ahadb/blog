import * as React from "react";

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
        <h1>Ahad Bokhari</h1>
        <p>Front end engineer ― I build things. Time has made me appreciate the fact that limitations are mere products
          of crude imaginations and thinking, which forms my belief that “all thing are possible" ... </p>
      </div>
    </div>
    <style jsx>{`
      .blog-description {
              float: left;
              text-align: left;
              margin-left: -70px;
              width: 235px;
              margin-top: 23px !important;
              font-size: 15px;
            }

    `}</style>

  </div>
)

export default Masthead
