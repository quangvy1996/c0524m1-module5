import {useState} from "react";
function UseIncrement(addAmount) {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count => count + addAmount);
    };
    return [count, increase]
}
export default UseIncrement;