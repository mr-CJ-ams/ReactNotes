import React from "react";
import "./App.css";
import { Person } from "./components/Person";

function App(){
  return (
    <div className="App">
      <Person 
        name="Carlo"
        email="amaquincj00@gmail.com"
        age={21}
        isMarried={false}
        friends={["ricmar","ghea","roxan","justine","paul"]}
      />
    </div>
  );
}

export default App;