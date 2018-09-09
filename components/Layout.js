import Header from './Header'
import Masthead from './Masthead'
import Footer from './Footer'
import '../style.css'

const Layout = (props) => (
  <div>
    <Header />
    <Masthead />
    {props.children}
    <Footer />
  </div>
)

export default Layout
