import Link from 'next/link'
import '../style.css'

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
            <Link href="/fintech"><a role="tab" title="Item 3" className="UnderlineNav-item">REACT & FINTECH</a></Link>
            <Link href="/contact"><a role="tab" title="Item 4" className="UnderlineNav-item">CONTACT</a></Link>
          </div>
        </nav>
      </div>
    </section>
    <div className="social">
      <details className="dropdown details-reset details-overlay d-inline-block">
        <summary className="text-gray p-2 d-inline" aria-haspopup="true">
          Dropdown
          <div className="dropdown-caret"></div>
        </summary>

        <ul className="dropdown-menu dropdown-menu-se">
          <li><a className="dropdown-item" href="#url">Dropdown item</a></li>
          <li><a className="dropdown-item" href="#url">Dropdown item</a></li>
          <li><a className="dropdown-item" href="#url">Dropdown item</a></li>
        </ul>
      </details></div>
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
        margin-top: -38px;
      }
    `}</style>
  </div>

)

export default Header
