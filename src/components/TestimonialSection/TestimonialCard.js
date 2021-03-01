import React, {useState, useRef, useEffect} from 'react';
import ScrollMagic from 'scrollmagic';

function TestimonialCard(props) {
    const { onMount, children, controller, textStyle = 't-lead1' } = props;
    const [inView, setInView] = useState(false);
    const ref = useRef();

    const animateChildren = () => {
        let count = 1;
        return React.Children.map(children, child => {
            if (child.type && child.type.name === 'AnimatedText') {
                count ++;
                return React.cloneElement(child, {
                    delay: 500 * count,
                    inView: true
                })
            }
            return child;
        })   
    }
    
    useEffect(() => {
        if (onMount) onMount(ref);

        new ScrollMagic.Scene({
            triggerElement: ref.current
        })
        .on('enter', () => {
            setInView(true)
        })
        .reverse(false)
        .addTo(controller);
    });

    return (
        <div className="testimonial__block-container" ref={ref}>
            <div className="testimonial__block u-bg-white">
                <p className={textStyle}>
                    {inView ? animateChildren() : children}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard