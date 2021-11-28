import React from 'react'
import BlogRoll from '../../components/BlogRoll'
import Hero from '../../components/Hero'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <>
        <Hero title="Recent Posts" style="sub" />
        <main>
          <section className="u-mb-30 wrapper wrapper--wide">
            <div>
              <BlogRoll />
            </div>
          </section>
        </main>
      </>
    )
  }
}
