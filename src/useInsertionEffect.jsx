// # useInsertionEffect :- 
// The useInsertionEffect hook in React is designed for CSS-in-JS library authors. It allows you to inject styles into the DOM before layout effects fire. This ensures that styles are applied synchronously before any changes are made to the DOM, preventing potential layout shifts and ensuring optimal performance.

import { useInsertionEffect, useState } from 'react';

export default function UseInsertionEffectExample() {
    const [color, setColor] = useState('black');

    useInsertionEffect(() => {
        console.log('useInsertionEffect: Styles injected');
        document.body.style.backgroundColor = color;
        return () => {
        console.log('useInsertionEffect: Cleanup');
        document.body.style.backgroundColor = '';
        };
    }, [color]);

    return (
        <button onClick={() => setColor(color === 'black' ? 'white' : 'black')}>
        Toggle Color
        </button>
    );
}

// Synchronous Execution:
// It runs synchronously before the browser updates the DOM, unlike useEffect, which runs asynchronously after the component has been rendered.

// Purpose:
// Primarily used for CSS-in-JS libraries that need to inject styles into the DOM before layout calculations.

// Limited Scope:
// It does not have access to refs and cannot schedule updates. 

// Cleanup Function:
// Like useEffect, it accepts a cleanup function that runs before the effect re-runs or the component unmounts.

// Interleaving of Cleanup and Setup:
// Unlike other effects, it interleaves cleanup and setup functions, running both for one component at a time. 

// When to Use useInsertionEffect:
// When working with CSS-in-JS libraries to inject styles into the DOM before layout effects.
// When you need to perform actions right after an element is inserted into the DOM.
// When you need to ensure that style changes are applied before the DOM is updated.

// When Not to Use useInsertionEffect:
// If you are not working with CSS-in-JS libraries.
// If you need to access refs or schedule updates.
// If you are not adding any CSS styles to the DOM. In this case, useEffect or useLayoutEffect might be more appropriate. 