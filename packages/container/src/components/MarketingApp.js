/* This code is importing the `mount` function from the `MarketingApp` module and the `useRef` and
`useEffect` hooks from the `react` module. It then defines a functional component that creates a
`ref` using the `useRef` hook and mounts the `MarketingApp` component using the `mount` function
from the `MarketingApp` module. The `useEffect` hook is used to ensure that the `mount` function is
called only after the component is mounted in the DOM. Finally, the component returns a `div`
element with the `ref` attached to it. */
import {mount} from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);
useEffect(() => {
    mount(ref.current);
})
    return <div ref={ref}/>
};