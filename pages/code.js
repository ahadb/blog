import Layout from '../components/Layout'
import '../style.css'
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Gist from "react-gist";

const Code = (props) => (
  <Layout>
    <div className="container-md clearfix extend-code">
      <br/>

      <div className="Subhead-description">
        {props.code.date}
      </div>
      <div className="Subhead">
        <div className="Subhead-heading">
          {props.code.title}
        </div>
        <div className="Subhead-description"><i>{props.code.description}</i></div>
      </div>
      <p>{props.code.preCodeSnippet}</p>

      <Gist id={props.code.gistId} />

      <p>{props.code.postCodeSnippet}</p>
    </div>

    <style jsx>{`
      .extend-code {
        min-height: 700px;
        margin-top: 10px;
      }
   `}</style>

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
  const res = await fetch('https://ahadb-blog-api-mhmlanvsdp.now.sh/code/' + id)
  const data = await res.json()

  return {
    code: data
  }
}

export default Code
