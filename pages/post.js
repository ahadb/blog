import Layout from '../components/Layout'
import '../style.css'
import fetch from "isomorphic-unfetch";

const Post = (props) => (
    <Layout>
      <div className="container-md clearfix">

        <br/>

        <div className="container-md clearfix p-3">
          <div className="Subhead-description">
            {props.post.date}
          </div>
          <div className="Subhead">
            <div className="Subhead-heading">{props.post.title}</div>
            <div className="Subhead-description"><i>{props.post.description}</i></div>
          </div>
          <section className="page">
            <div dangerouslySetInnerHTML={{__html: props.post.content}} />

          </section>
        </div>

        <style jsx>{`
        .Subhead-heading {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 22px !important;
        font-weight: 600;
      }
      `}</style>

      </div>


    </Layout>
)


Post.getInitialProps = async function(context) {
    const id = context.query.id
    // const myInit = {
    //     method: 'GET',
    //     mode: 'no-cors',
    //     credentials: 'include'
    // }
    //
    // fetch('https://ahadb-blog-api-dkortsjqlj.now.sh/posts/' + id, myInit).then(res => console.log(res))

    console.log(id)
    const res = await fetch('https://ahadb-blog-api-mhmlanvsdp.now.sh/posts/' + id)
    const data = await res.json()

    return {
        post: data
    }
}

export default Post
