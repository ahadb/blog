import '../style.css'

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
                    <li>BLOG</li>
                    <li>HISTORY</li>
                    <li>REACT FINTECH</li>
                    <li>CONTACT</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 float-left">
            <div className="archives"><h4>ARCHIVES</h4></div>
            <div className="col-4 float-right p-4">

              <ul>
                <li>2009</li>
                <li>2008</li>
                <li>2007</li>
              </ul>
            </div>
            <div className="col-4 float-right p-4">
              <ul>
                <li>2013</li>
                <li>2013</li>
                <li>2011</li>
                <li>2010</li>
              </ul>
            </div>
            <div className="col-4 float-right p-4">
              <ul>
                <li>2017</li>
                <li>2016</li>
                <li>2015</li>
                <li>2014</li>
              </ul>
            </div>
          </div>
          <div className="col-4 float-left p-4">
            @ Copyright 2018 - 2001 All rights reserved

          </div>
        </div>

      </footer>
    </div>
    <style jsx>{`
            footer {
              height: 150px;
            }

            .footer {
              background: #fafbfc;
              border-top: 1px solid #eaeaea;
            }

            .logo {
              float: left;
              margin-top: 10px;
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

    `}</style>
  </section>
)

export default Footer
