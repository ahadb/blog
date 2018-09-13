import Layout from '../components/Layout'
import Link from 'next/link'
import '../style.css'
import fetch from 'isomorphic-unfetch'
import Gist from "react-gist"

// helper text truncate function
const text_truncate = function(str, length, ending) {
  if (length == null) {
    length = 100
  }
  if (ending == null) {
    ending = '...'
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str
  }
}


class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      togglePosts: true
    }
    this.handlePostsToggle = this.handlePostsToggle.bind(this)
  }

  static async getInitialProps () {
    const res = await fetch('https://ahadb-blog-api-dkortsjqlj.now.sh/posts')
    const data = await res.json()
    return {
      posts: data
    }
  }

  handlePostsToggle() {
    this.setState({
      togglePosts: !this.state.togglePosts
    })
  }

  render() {
    return (
      <Layout>

        <div className="container-md clearfix p-3">
          <div className="container-lg clearfix">
            <div className="col-6 float-left p-4 no-pad">
                <div className="sm-subheading">
                  <img src="../static/paragraph.svg" alt="Filters" height="13" style={{cursor: 'pointer'}} />
                  {this.state.togglePosts ?
                     <h4>RECENT POSTS</h4>
                   : <h4>LINKBLOG</h4> }
                </div>
            </div>
            <div className="col-6 float-left p-4 no-pad">
              <div className="filters"><a onClick={this.handlePostsToggle}><img src="../static/filter.svg" alt="Filters" height="13" style={{cursor: 'pointer'}} /></a></div>
            </div>
          </div>

          <br />

          {this.state.togglePosts ?

            <div className="show-posts">

              {this.props.posts.map((post) => (
                <section className="post">
                  <div className="Subhead-description">
                    January 01, 2018
                  </div>
                  <div className="Subhead">
                    <div className="Subhead-heading">
                      <Link as={`/p/${post._id}`} href={`/post?id=${post._id}`}>
                        <a>{post.title}</a>
                      </Link>
                    </div>
                    <div className="Subhead-description">{post.description}</div>
                  </div>
                  <div dangerouslySetInnerHTML={{__html: text_truncate(post.content, 300)}} />

                  <p>&rarr; Read More...</p>
                </section>
              ))}
            </div>

            : '' }

          <section className="post">
            <div className="Subhead-description">
              January 01, 2018
            </div>
            <div className="Subhead">
              <div className="Subhead-heading">The No-Configuration JavaScript Bundle Configuration</div>
              <div className="Subhead-description"><i>The subhead is a subdued header style with a light bottom
                border</i></div>
            </div>
            <p>It's 2018 and really, it just doesn't get better than this. Awesome:</p>

              <Gist id='3ea7ccecc91c9cd390810e5bcad044ec' />

            <p>Parcel does it automagically - of course there's much more under the hood but this is a huge step toward no configuration.</p>
            <p>Note: I'd prefer developers
            to understand their craft from the ground up, therefore understanding how the bundling mechanism works throughout the lifecycle. That said it's a wonderful
            thing when innovation happens, just be careful to always understand and reflect upon what's happening under the hood.</p>
          </section>

          { this.state.togglePosts ?
          <div className="sm-subheading-linkblg">
            <img src="../static/paragraph.svg" alt="Filters" height="13" style={{cursor: 'pointer'}} />
            <h4>LINKBLOG</h4>
          </div>
            : '' }

          <section className="post">
            <div className="Subhead-description">
              August 03, 2018
            </div>
            <div className="linkblog-title"><a href="http://julio-ody.tumblr.com/post/552745613/why-tony-stark-is-better-than-you">Why Tony Stark is Better Than You</a>
            </div>
            <div className="permalink">&nbsp; <a href="#"><img src="../static/link.svg" alt="Filters" height="13" style={{cursor: 'pointer'}} /></a></div>
            <p>One of my all time favorites:</p>
            <div className="blockquote">
              It has nothing to do with the fact he’s rich, famous, or that he gets the ladies. It’s because Tony Stark builds his tech,
              front-end and back-end. He doesn’t make things that just do the job. They do, but they look awesome while at it.
            </div>
            <p>...definitely worth looking at for instpiration, it's a quick read</p>
          </section>

          <section className="post">
            <div className="Subhead-description">
              July 28, 2018
            </div>
            <div className="linkblog-title"><a href="https://www.infoq.com/news/2018/07/eich-crockford-js-future">Eich and Crockford on the Future of JavaScript: Insight from the Creators of JavaScript and JSON</a>
            </div>
            <div className="permalink">&nbsp; <a href="#"><img src="../static/link.svg" alt="Filters" height="13" style={{cursor: 'pointer'}} /></a></div>
            <p>Makes complete sense, if you've never read Crockford I highly suggest you read his stuff or watch some of his videos</p>
            <div className="blockquote">
              There are many things that Crockford dislikes in JavaScript. For example, he dislikes async/await because it blocks
              developers from understanding async programming by making it look sync in nature.
            </div>
            <p>Crockford goes on saying:</p>
            <div className="blockquote">
              Crockford was also asked about TypeScript, but has a much less favorable opinion: "It doesn't solve problems that I have." This dismissal of
              TypeScript was somewhat contradictory with his earlier statement that "interfaces between things are where errors typically happen", as one
              of the main benefits of TypeScript is to help define interfaces to prevent these errors.
            </div>
          </section>

          <section className="post">
            <div className="Subhead-description">
              May 15, 2018
            </div>
            <div className="linkblog-title"><a href="http://randsinrepose.com/archives/the-nerd-handbook/">The Nerd Handbook</a>
            </div>
            <div className="permalink">&nbsp; <a href="#"><img src="../static/link.svg" alt="Filters" height="13" style={{cursor: 'pointer'}} /></a></div>
            <div className="blockquote">
              A nerd needs a project because a nerd builds stuff. All the time. Those lulls in the conversation over dinner? That’s the nerd working on his project in his head.
            </div>
            <p>Spot on, some people like Rands have this inane ability to provide exactly the right context</p>
          </section>

          <style jsx>{`

            body {
              background-color: #fff;
              font-family: 'Source Sans Pro', sans-serif;
              font-size: 16px !important;
              color: #24292e;
            }

            .sm-subheading {
              margin-bottom: -10px;
              color: #C3447A;
              display: inline-flex;
            }

            .sm-subheading-linkblg {
              margin-bottom: 20px;
              color: #C3447A;
               display: inline-flex;
            }

            .menu {
              border: none !important;
              margin-bottom: 0 !important;
            }

            .page-header {
              margin-top: -25px;
              margin-bottom: 25px;
            }

            .post {
              margin-bottom: 15px;
              border-bottom: 1px #e1e4e8 solid;
            }

            .page {
              margin-top: 15px;
              margin-bottom: 15px;
              border-bottom: 1px #e1e4e8 solid;
            }

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

            .menu-items {
              margin-left: 45px;
              font-size: 13px;
              color: #C3447A !important;
            }

            .breadcrumb {
              float: right;
            }

            .filters {
              float: right;
              color: #C3447A;
              height: 25px;
              width: 15px;
            }

            .blankslate {
              border: none !important;
              -webkit-border-radius: none !important;
              -moz-border-radius: none !important;
              border-radius: none !important;
              text-align: left !important;
              padding: 0px !important;
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
            }

            .Subhead-description {
              font-size: 13.5px !important;
              color: #999 !important;
              margin-bottom: -5px;
              margin-top: -5px;
            }

            .Subhead-heading {
              margin-top: 5px;
              margin-bottom: 5px;
              font-size: 24px !important;
            }

            p {
              margin-bottom: 15px !important;
              line-height: 22px;
            }

            .permalink {
              float: right;
              margin-top: -30px;
              pointer: cursor;
            }

            ul li {
              list-style: none;
              color: #C3447A;
            }

            .footer-logo {
              float: right;
              margin-left: 5px;
            }

            .logo {
              margin-bottom: 10px;
            }

            .linkblog-header {
              margin-bottom: 10px;
            }

            .no-border {
              border: none !important;
            }

            .archives {
              margin-top: 20px;
              margin-bottom: -20px;
              text-align: center;
            }

            .console {
              float: left;
              /*margin-left: 100px;*/
              width: 500px;
            }

            .UnderlineNav-item.selected {
              font-weight: 600;
              color: #24292e;
              border-bottom-color: #C3447A;
            }

            a {
              color: #24292e !important;
            }

            .no-pad {
              padding: 0 !important;
            }

            .show-posts {
              display: block;
            }

            .hide {
              display: none;
            }

            .no-visibility {
              visibility: hidden;
            }

    `}</style>

        </div>
      </Layout>
    )
  }

}


const myInit = {
  method: 'GET',
  mode: 'cors',
  credentials: 'include'
}

fetch('https://ahadb-blog-api-dkortsjqlj.now.sh/posts', myInit).then(res => console.log(res))


// Index.getInitialProps = async function() {
//   const res = await fetch('https://ahadb-blog-api-dkortsjqlj.now.sh/posts')
//   const data = await res.json()
//   console.log(data)
//
//   return {
//     posts: data
//   }
// }

export default Index
