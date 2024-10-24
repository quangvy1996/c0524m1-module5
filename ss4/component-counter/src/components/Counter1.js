import useIncrement from "./useIncrement";

function Counter1() {
    const [count, setCount] = useIncrement(1);
    return(
        <div>
            <h1>Counter 1</h1>
            <p>Giá trị: {count}</p>
            <button onClick={setCount}>Tăng</button>

        </div>
    )
}
export default Counter1;
