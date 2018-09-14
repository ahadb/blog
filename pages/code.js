import Layout from '../components/Layout'
import '../style.css'
import fetch from "isomorphic-unfetch";

const Code = (props) => (
  <Layout>
    <div className="container-md clearfix">

      <br/>

      <div className="container-md clearfix p-3">
        <div className="Subhead-description">

        </div>
        <div className="pagehead">

        </div>
        <div className="Subhead-description"></div>
        <section className="page">


        </section>
      </div>

    </div>


  </Layout>
)


Code.getInitialProps = async function(context) {
  const id = context.query.id
  // const myInit = {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     credentials: 'include'
  // }
  //
  // fetch('https://ahadb-blog-api-dkortsjqlj.now.sh/posts/' + id, myInit).then(res => console.log(res))

  console.log(id)
  const res = await fetch('https://ahadb-blog-api-gbxypdtuhv.now.sh/code' + id)
  const data = await res.json()

  return {
    post: data
  }
}

export default Code
