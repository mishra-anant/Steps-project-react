/*
1) Handling click events in react:-
                                   we do something similar to HTML inline event listener.
<button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={}> ....in the javascript mode we will
pass in a function and that function will be executed whenever there is a click happening on this button..

2) State in React:-
                    const [step, setStep] = useState(1); step is called STATE VARIABLE and setStep is
                    called setStateFunction...

* In React, state refers to a JavaScript object that stores dynamic values, allowing components to maintain and manage data across renders. It represents the "current situation" of a component. When the state changes, React re-renders the component to reflect the new state values, making the UI interactive and dynamic.
Key Concepts:

   *) State is local to the component. Each component can have its own state.
   *) State triggers re-renders. When the state changes, React automatically re-renders the component to reflect those changes in the UI.
   *) State is mutable. However, you should never directly modify the state, but instead, use React's setState function (with class components) or the useState hook (in functional components).

useState Hook:-

In functional components, React provides the useState hook to manage state.
Syntax:
const [stateVariable, setStateFunction] = useState(initialValue);

    stateVariable: The current value of the state.
    setStateFunction: A function to update the state.
    initialValue: The initial state value.                   
    
This useState function is what we call hook in react...Hooks in javascript starts with use keyword in
javascript...Only allowed to call on the top place of the component..Hooks are not allowed to be used 
inside if() statements, else statements, inside functions, conditionals, etc. 

*)update state using the setter function and do not update state manually...

*)DON'T SET STATE MANUALLY:-*/
