import React from 'react';
 
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

// https://www.joshwcomeau.com/react/the-perils-of-rehydration/
function useHasMounted() {
    const [hasMounted, setHasMounted] = React.useState(false);
    React.useEffect(() => {
      setHasMounted(true);
    }, []);
    return hasMounted;
}

export { camelize, useHasMounted }
