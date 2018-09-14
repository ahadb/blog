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
          <div className="pagehead">
            <h2>{props.post.title}</h2>
          </div>
          <div className="Subhead-description">{props.post.description}</div>
          <section className="page">
            <div dangerouslySetInnerHTML={{__html: props.post.content}} />

          </section>
        </div>

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
    const res = await fetch('https://ahadb-blog-api-gbxypdtuhv.now.sh/posts/' + id)
    const data = await res.json()

    return {
        post: data
    }
}

export default Post
