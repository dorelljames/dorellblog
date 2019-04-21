import React from "react"
import Layout from "../components/Layout"
import BottomMenu from "../components/BottomMenu/Index"

const BlogPage = props => (
  <>
    <Layout location={props.location} title="Blog">
      <p>Blog Page</p>
    </Layout>
    <BottomMenu />
  </>
)

export default BlogPage
