import React, {useState, useRef, useEffect} from 'react';
import ScrollMagic from 'scrollmagic';

function TestimonialCard(props) {
    const { onMount, children, controller, textStyle = 't-lead1' } = props;
    const [inView, setInView] = useState(false);
    const ref = useRef();

    const animateChildren = () => {
        console.log('invoke animateChildren')
        let count = 1;
        return React.Children.map(children, child => {
            console.log({child});
            if (child.type && child.type.name === 'AnimatedText') {
                count ++;
                const cloneChild = React.cloneElement(child, {
                    delay: 500 * count,
                    inView: true
                })
                console.log({cloneChild});
                return cloneChild;
            }
            return child;
        })   
    }
    
    useEffect(() => {
        console.log('registering scene controller')
        if (onMount) onMount(ref);

        new ScrollMagic.Scene({
            triggerElement: ref.current
        })
        .on('enter', () => {
            setInView(true)
        })
        .reverse(false)
        .addTo(controller);
    }, []);

    console.log('rendering testimonial card', {inView})
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