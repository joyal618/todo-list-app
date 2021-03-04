import "./Home.css";
import InputTask from "../../components/input-task/InputTask"
import ListTask from "../../components/list-task/ListTask"

function Home() {
    return (
      <div className="Home">
          <div className="title-container">
            <h1>To Do List Application</h1>
          </div>
          <InputTask />
          <ListTask />
      </div>
    );
  }
  
  export default Home;