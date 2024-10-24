import useIncrement from "./useIncrement";
function Counter2() {
    const [count, setCount] = useIncrement(2);
    return(
        <div>
            <h1>Counter 2</h1>
            <p>Giá trị: {count}</p>
            <button onClick={setCount}>Tăng</button>

        </div>
    )
}
export default Counter2;