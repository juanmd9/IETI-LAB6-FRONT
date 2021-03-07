import './App.css';
import React, { useState } from 'react';
import SimpleCard from './card/SimpleCard';

function App() {
  const [userList, setUserList] = useState([]);
  const url = "http://task-planner.eastus2.azurecontainer.io:8080/users";
  // const url = "http://localhost:8080/users" ;
  React.useEffect(() => {
    async function callA() {
      const response = await fetch(url, {
        method: 'GET',
      });
      try {
        response.json()
          .then(data => setUserList(data));
      } catch (e) {
        console.log(e)
      }
    } callA()
  }, []);

  console.log(userList, "######");

  
  return (
    <div className="App">
      {/* <SimpleCard prueba={userList[0]} /> */}
      {userList.map((user, index) => <div key={index}><SimpleCard  prueba={user} /><br /></div>)}
    </div>
  );
}

export default App;
