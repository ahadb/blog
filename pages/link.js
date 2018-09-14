import Layout from '../components/Layout'
import '../style.css'
import fetch from "isomorphic-unfetch";

const Link = (props) => (
  <Layout>
    <div className="container-md clearfix">

      <br/>

        <div className="Subhead-description">
          {props.link.date}
        </div>
        <div className="linkblog-title">{props.link.title}
        </div>

        <p>{props.link.preSnippet}</p>
        <div className="blockquote">
          {props.link.blockquote}
        </div>
        <p>{props.link.postSnippet}</p>

    </div>
  </Layout>
)


Link.getInitialProps = async function(context) {
  const id = context.query.id
  // const myInit = {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     credentials: 'include'
  // }
  //
  // fetch('https://ahadb-blog-api-dkortsjqlj.now.sh/posts/' + id, myInit).then(res => console.log(res))

  console.log(id)
  const res = await fetch('https://ahadb-blog-api-gbxypdtuhv.now.sh/links/' + id)
  const data = await res.json()

  return {
    link: data
  }
}

export default Link
