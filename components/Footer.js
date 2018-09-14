import '../style.css'
import Link from "next/link";
import * as React from "react";

const Footer = () => (
  <section className="footer">
    <div className="container-lg clearfix">
      <footer>
        <div className="container-lg clearfix">
          <div className="col-4 float-left p-4">
            <div className="clearfix">
              <div className="col-6 float-left px-1">
                <div className="logo">
                  <img src="../static/avatar.png" height="25" width="25" />
                  <div className="footer-logo">ahadb.org</div></div>
              </div>
              <div className="col-6 float-left">
                <div className="col-6 float-left px-1">
                  <ul>
                    <li><Link style={{color: '#C3447A'}} href="/"><a>BLOG</a></Link></li>
                    <li><Link style={{color: '#C3447A'}} href="/history"><a>HISTORY</a></Link></li>
                    <li><Link style={{color: '#C3447A'}} href="/fintech"><a>FINTECH</a></Link></li>
                    <li><Link style={{color: '#C3447A'}} href="/contact"><a>CONTACT</a></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 float-left">
            <div className="col-4 float-right p-4">

              <ul>
                <li><a style={{color: '#C3447A'}} href="http://blogspot.fluidnewmedia.com/archives/">2010</a></li>
                <li><a style={{color: '#C3447A'}} href="http://blogspot.fluidnewmedia.com/archives/">2009</a></li>
                <li><a style={{color: '#C3447A'}} href="http://blogspot.fluidnewmedia.com/archives/">2008</a></li>
                <li><a style={{color: '#C3447A'}} href="http://ahadb.com/archives/page/5/">2007</a></li>
              </ul>
            </div>
            <div className="col-4 float-right p-4">
              <ul>
                <li><a style={{color: '#C3447A'}} href="htp://ahadb.com/archives/page/4/">2014</a></li>
                <li><a style={{color: '#C3447A'}} href="http://ahadb.com/archives/page/4/">2013</a></li>
                <li><a style={{color: '#C3447A'}} href="http://blogspot.fluidnewmedia.com/2012/12/">2012</a></li>
                <li><a style={{color: '#C3447A'}} href="http://blogspot.fluidnewmedia.com/2011/10/">2011</a></li>

              </ul>
            </div>
            <div className="col-4 float-right p-4" style={{color: '#C3447A'}}>
              <ul>
                <li><a style={{color: '#C3447A'}} href="http://ahadb.com/archives/">2018</a></li>
                <li><a style={{color: '#C3447A'}} href="http://ahadb.com/archives/">2017</a></li>
                <li><a style={{color: '#C3447A'}} href="http://ahadb.com/archives/page/2/">2016</a></li>
                <li><a style={{color: '#C3447A'}} href="http://ahadb.com/archives/page/3/">2015</a></li>
              </ul>
            </div>
          </div>
          <div className="col-4 float-left p-4">
            LinkedIn | Github <br />
            @ Copyright 2018 - 2001 All rights reserved

          </div>
        </div>

      </footer>
    </div>
    <style jsx>{`
            footer {
              height: 150px;
              font-size: 14px;
              color: black !important;
            }

            .footer {
              background: #fafbfc;
              border-top: 1px solid #eaeaea;
              color: black !important;
            }

            .logo {
              float: left;
              margin-top: -4px;
              margin-bottom: 0 !important;
            }

            p {
              margin-bottom: 15px !important;
            }

            ul li {
              list-style: none;
              color: #C3447A;
            }

            .footer-logo {
              float: right;
              margin-left: 5px;
            }

            .no-border {
              border: none !important;
            }

            .archives {
              margin-top: 20px;
              margin-bottom: -20px;
              text-align: center;
            }

            a {
              color: #C3447A !important;
            }

    `}</style>
  </section>
)

export default Footer
