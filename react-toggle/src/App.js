import "./App.css";
import React from "react";
import { getData } from "./actions";
import Lessons from "./Lessons";


function App() {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    getData(setState);
  }, []);



  return (
    <>
    <div>
    {state?.map(({ id, Name, Teacher, Date }) => (
          <Lessons
            Name={Name}
            key={id}
            Teacher={Teacher}
            Date={Date}
          />
        ))}
    </div>
    </>
  );
}

export default App;
