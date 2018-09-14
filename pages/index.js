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
    const res = await fetch('https://ahadb-blog-api-gbxypdtuhv.now.sh/posts')
    const resLink = await fetch('https://ahadb-blog-api-gbxypdtuhv.now.sh/links')
    const resCode = await fetch('https://ahadb-blog-api-gbxypdtuhv.now.sh/code')
    const data = await res.json()
    const linkData = await resLink.json()
    const codeData = await resCode.json()
    return {
      posts: data,
      links: linkData,
      code: codeData
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
                   : <h4>CODE & LINKS</h4> }
                </div>
            </div>
            <div className="col-6 float-left p-4 no-pad">
              <div className="filters"><a onClick={this.handlePostsToggle}>
                <img src="../static/filter.svg" alt="Filters" height="13" style={{cursor: 'pointer'}} />
              </a>
              </div>
            </div>
          </div>

          <br />

          {this.state.togglePosts ?

            <div className="show-posts">

              {this.props.posts.map((post) => (
                <section className="post">
                  <div className="Subhead-description">
                    {post.date}
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

                  <p><Link as={`/p/${post._id}`} href={`/post?id=${post._id}`}>
                    <a>&rarr; Read More...</a>
                  </Link></p>
                </section>
              ))}
            </div>

            : '' }

          {this.props.code.map((code) => (
          <section className="post">
            <div className="Subhead-description">
              {code.date}
            </div>
            <div className="Subhead">
              <div className="Subhead-heading">{code.title}</div>
              <div className="Subhead-description"><i>{code.description}</i></div>
            </div>
            <p>{code.preCodeSnippet}</p>

              <Gist id={code.gistId} />

            <p>{code.postCodeSnippet}</p>
            </section>
            ))}

          <div className="sm-subheading-linkblg">
            <img src="../static/paragraph.svg" alt="Filters" height="13" style={{cursor: 'pointer'}} />
            <h4>LINKBLOG</h4>
          </div>

          { this.state.togglePosts ?
            <div className="show-posts">
              {this.props.links.map((link) => (

                <section className="post">
                  <div className="Subhead-description">
                    {link.date}
                  </div>
                  <div className="linkblog-title"><a href={link.externalUrl}>{link.title}</a>
                  </div>
                  <div className="permalink">&nbsp;
                    <Link as={`/l/${link._id}`} href={`/link?id=${link._id}`}>
                      <a><img src="../static/link.svg" alt="Filters" height="13" style={{cursor: 'pointer'}} /></a>
                    </Link>
                  </div>
                  <p>{link.preSnippet}</p>
                  <div className="blockquote">
                    {link.blockquote}
                  </div>
                  <p>{link.postSnippet}</p>
                </section>

                ))}
          </div>
            : '' }

          <style jsx>{`

            body {
              background-color: #fff;
              font-family: 'Source Sans Pro', sans-serif;
              font-size: 16px !important;
              color: #24292e;
            }

            h1 {
             font-size: 32px;
             font-weight: 700 !important;
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

              font-size: 14px;
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
              font-weight: 600;
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
              font-size: 22px !important;
              font-weight: 600;
            }

            p {
              margin-bottom: 15px !important;
              line-height: 22px;
              color: #444 !important;
              line-height: 26px;
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

// const myInit = {
//   method: 'GET',
//   mode: 'cors',
//   credentials: 'include'
// }
//
// fetch('https://ahadb-blog-api-dkortsjqlj.now.sh/posts', myInit).then(res => console.log(res))

export default Index
