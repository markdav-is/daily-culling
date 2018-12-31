import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <iframe class="airtable-embed" src="https://airtable.com/embed/shr01iPgN2PMHLuEy?backgroundColor=red" 
    frameborder="0" onmousewheel="" width="800" height="888" styles="background: transparent; border: 1px solid #ccc;"></iframe>
  </Layout>
)

export default IndexPage
