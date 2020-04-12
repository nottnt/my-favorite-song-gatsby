import React from "react"
import { Link } from "gatsby"
// component
import SongContainer from '../components/songContainer';
import Layout from "../components/layout"
import SEO from "../components/seo"
import songData from '../songData.json';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to My Favorite Song Blog</p>

      {
        songData.map((data, i) =>
          (
            <SongContainer data={data} key={i}/>
          )
        )
      }

      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/page-3/">Go to page 3</Link>
    </Layout>
  )
}

export default IndexPage
