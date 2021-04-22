import React, {useEffect, useState, useRef} from 'react';

function AnimatedText(props) {
    const { onMount, children, inView, delay } = props;
    const ref = useRef();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
            const timeout = window.setTimeout(()=> { setAnimate(inView) }, delay);
            return () => {
                // Clean up the setTimeout
                clearTimeout(timeout)
            };
        }
    }, [inView])

    return (
        <span className={`animated-text ${animate ? 'in-view' : ''}`} ref={ref}>{children}</span>
    )
}

AnimatedText.componentName = 'AnimatedText';

export default AnimatedText