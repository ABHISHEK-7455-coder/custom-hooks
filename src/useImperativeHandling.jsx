// In the example, MyInput exposes a focus and getValue method to the parent component through the ref. The parent component can now use these methods to interact with the input element.


import { useRef, forwardRef, useImperativeHandle } from 'react';

// Child component using forwardRef and useImperativeHandle
const MyInput = forwardRef((props, ref) => {
    const inputRef = useRef(null);

    // Customize the ref value
    useImperativeHandle(ref, () => ({
        focus: () => {
        inputRef.current.focus();
        },
        getValue: () => {
        return inputRef.current.value;
        }
    }));

    return <input type="text" ref={inputRef} />;
});

// Parent component
export default function ParentComponent() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    const handleGetValue = () => {
        alert(inputRef.current.getValue());
    };

    return (
        <div>
        <MyInput ref={inputRef} />
        <button onClick={handleFocus}>Focus Input</button>
        <button onClick={handleGetValue}>Get Input Value</button>
        </div>
    );
}


// useImperativeHandle :- It is a React Hook that customizes the instance value that is exposed when using React.forwardRef. It allows a    child component to selectively expose its internal methods or properties to a parent component that holds a ref to it. This is useful when you need to interact with a child component imperatively, but want to control what parts of the child's API are accessible. 

// Here's how it works:

// forwardRef: You use React.forwardRef to create a component that can accept a ref.

// useImperativeHandle: Inside the forwarded component, you use useImperativeHandle to define the object that will be exposed through the ref.

// Custom API: The object you return from useImperativeHandle defines the methods and properties that the parent component can access through the ref.

// Key Points:
// useImperativeHandle is used with forwardRef.
// It allows you to define a custom API for a component that is accessible through a ref.
// It provides a way to avoid exposing the entire internal implementation of a child component.
// It improves the control and flexibility of how a parent interacts with a child component.