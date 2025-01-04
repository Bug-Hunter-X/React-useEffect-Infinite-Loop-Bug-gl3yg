```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //The effect runs only once after the component mounts
    //Therefore no infinite loop
    console.log('Component mounted')
  }, []);

  return <div>Count: {count}</div>;
}
```