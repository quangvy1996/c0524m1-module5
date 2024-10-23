import { Component } from "react";
import StudentInfoComponent from "./components/StudentInfoComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  increase = () => {
    this.setState({ number: this.state.number + 1 });
  };
  decrease = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
        <div>
            <h1>Student List</h1>
            <StudentInfoComponent/>
        </div>
    );
  }
}

export default App;