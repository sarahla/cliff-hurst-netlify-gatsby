import React from 'react'

function TestimonialSection(props) {
    return (
        <>
            <section className="u-mt-30 u-mb-30">
                <div className="testimonial__wrapper">
                    <div className="testimonial__intro">
                        <div className="testimonial__intro__text">
                            <h2 className="t-h2">What Cliff's students are&nbsp;saying</h2>
                            <p className="t-lead3">Here’s what some of my students have written about their experience in the classroom with me...</p>
                        </div>
                    </div>
                    <div className="testimonial__grid">
                        <div className="testimonial__block-container">
                            <div className="testimonial__block u-bg-white">
                                <p className="t-lead1">"The course actually hits every question on this survey spot on. I learned a lot in this class about the subject, improved my writing skills and all the Westminster college-wide learning goals. Cliff is also the most <span className="word">kind</span>, <span className="word">optimistic</span>, and <span className="word">generous</span> professor I’ve ever had. Thanks!"</p>
                            </div>
                        </div>
                        <div className="testimonial__block-container">
                            <div className="testimonial__block u-bg-white">
                                <p className="t-lead1">"Great teacher; very <span className="word">respectful</span> of all opinions of the students."</p>
                            </div>
                        </div>
                        <div className="testimonial__block-container">
                            <div className="testimonial__block u-bg-white">
                                <p className="t-h5">"Cliff does a great job of relating the subject of entrepreneurship to his real-life experiences."</p>
                            </div>
                        </div>
                        <div className="testimonial__block-container">
                            <div className="testimonial__block u-bg-white">
                                <p className="t-lead1">"Cliff is an <span className="word">involved</span> and <span className="word">caring</span> professor who takes the time to speak to his students as peers. His devotion to his subject matter is palpable and is felt throughout his lectures. The course felt <span className="word">respectful</span> and <span className="word">enjoyable</span> for the duration of the semester."</p>
                            </div>
                        </div>
                        <div className="testimonial__block-container">
                            <div className="testimonial__block u-bg-white">
                                <p className="t-lead1">Cliff is a <span className="word">passionate</span>, <span className="word">knowledgeable</span> and <span className="word">experienced</span> instructor with a wealth of insight.</p>
                            </div>
                        </div>
                        {/* <!--<div className="testimonial__block-container">
                            <div className="testimonial__block u-bg-white">
                                <p className="t-lead1">The course was incredibly rigorous and realistic with the level of presentations we had to complete, the quality of the work that was submitted, the response and feedback from the professor. I sometimes felt as though I didn’t have the education necessary to complete certain aspects of the business plan but I feel as though that helped me in the end rather than hindered me because I was able to create something and research something as my own to satisfy the assignment which is what being a business owner would be like most of the time.</p>
                            </div>
                        </div>--> */}
                    </div>
                </div>
            </section>
            <section className="wrapper u-mb-30">
                <div>
                    <h3 className="t-h5 u-mb-8">The following was an email I received from a student after the end of the school term.</h3>
                    <p className="t-lead2 u-italic">Dear Cliff,</p>
                    <p className="t-lead2 u-italic">I want you to know that as a few weeks have passed since the semester ended, I have had some time to digest my learning and I have realized just how much I got out of your class. I realized that the core of what I want to do is be an entrepreneur—I want to make my own path. Thanks for being an excellent professor.</p>
                    <p className="t-lead2 u-italic">--Maggie R.</p>
                </div>
            </section>
        </>
    )
}

export default TestimonialSection
