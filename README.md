# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook that causes an infinite loop.  The `useEffect` hook is incorrectly updating the state within the effect itself, leading to continuous re-renders.

## Bug Description
The `bug.js` file contains a React component that uses the `useEffect` hook to increment a state variable (`count`) continuously. This creates an infinite loop because each state update triggers a re-render, which in turn calls the `useEffect` again, causing another state update, and so on. 

## Solution
The `bugSolution.js` file provides a corrected version. The key change is that the state update inside `useEffect` is now only triggered when a dependency changes (in this case, no dependencies are needed, hence `[]` signifying the effect only runs once after mount).