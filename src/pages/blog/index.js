import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Hero from '../../components/Hero'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero title="Recent Posts" style="sub" />
        <main>
            <section className="wrapper u-mb-30">
              <div>
                <BlogRoll />
              </div>
            </section>
        </main>
      </Layout>
    )
  }
}
