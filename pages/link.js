import Layout from '../components/Layout'
import '../style.css'
import fetch from "isomorphic-unfetch";

const Link = (props) => (
  <Layout>
    <div className="container-md clearfix extend-link">

      <br/>

      <div className="Subhead-description">
        {props.link.date}
      </div>
      <div className="linkblog-title"><a href={props.link.externalUrl}>{props.link.title}</a>
      </div>
      <p>{props.link.preSnippet}</p>
      <div className="blockquote">
        {props.link.blockquote}
      </div>
      <p>{props.link.postSnippet}</p>
    </div>
    <style jsx>{`
    .extend-link {
      min-height: 500px;
      margin-top: 10px;
    }

    a {
      color: #24292e !important;
      font-size: 20px;
    }


        .Subhead-heading {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 22px !important;
        font-weight: 600;
      }

       .Subhead-description {
              font-size: 13.5px !important;
              color: #999 !important;
              margin-bottom: -5px;
              margin-top: -5px;
            }

            .Subhead {
              border: none !important;
              margin-bottom: 15px !important;
            }

            .blockquote {
              border-left: 4px solid #C3447A;;
              color: #a5a4a4;
              font-style: none;
              margin: 11px 0 20px 15px;
              padding-left: 15px;
              font-size: 14px;
            }

            .linkblog-title {
              margin-top: 10px;
              font-size 19px !important;
              margin-bottom: 12px;
              font-weight: 600;
            }
      `}</style>
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
  const res = await fetch('https://ahadb-blog-api-mhmlanvsdp.now.sh/links/' + id)
  const data = await res.json()

  return {
    link: data
  }
}

export default Link
