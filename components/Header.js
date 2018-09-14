import Link from 'next/link'
import '../style.css'
import * as React from "react";

const Header = () => (
  <div className="container-lg clearfix">
    <section className="menu">
      <div className="logo">
        <img src="../static/avatar.png" height="35" width="35" />
      </div>
      <div className="menu-items">
        <nav className="UnderlineNav">
          <div className="UnderlineNav-body">
            <Link href="/"><a role="tab" title="Item 1" className="UnderlineNav-item selected">BLOG</a></Link>
            <Link href="/history"><a role="tab" title="Item 2" className="UnderlineNav-item">HISTORY</a></Link>
            <Link href="/jsinfin"><a role="tab" title="Item 3" className="UnderlineNav-item">JS-IN-FIN</a></Link>
            <Link href="/contact"><a role="tab" title="Item 4" className="UnderlineNav-item">CONTACT</a></Link>
          </div>
        </nav>
      </div>
    </section>
    <div className="social">
      <div className="container-lg clearfix">
        <div className="col-6 float-left">
          <span style={{float: 'left'}}><a style={{color: '#C3447A'}} href="https://www.linkedin.com/in/ahadbokhari/"><img src="../static/linkedin.svg" alt="Filters" height="13" style={{cursor: 'pointer', float: 'left'}} /></a></span>
          <span style={{float: 'right'}}><a style={{color: '#C3447A'}} href="https://github.com/ahadb"><img src="../static/github.svg" alt="Filters" height="13" style={{cursor: 'pointer', float: 'left'}} /></a></span>
        </div>
      </div>

    <style jsx>{`
      .menu {
        border: none !important;
        margin-bottom: 0 !important;
      }
      .logo {
        float: left;
        margin-top: 10px;
        margin-bottom: 0 !important;
      }
      .menu-items {
       margin-left: 45px;
       font-size: 13px;
       color: #C3447A !important;
      }

      .social {
        float: right;
        width: 70px;
        margin-right: -26px;
        margin-top: -35px;
      }
    `}</style>
  </div>
  </div>

)

export default Header
