import './App.css';
import React, { useState } from 'react';
import SimpleCard from './card/SimpleCard';

function App() {
  const [userList, setUserList] = useState([]);
  const url = "https://task-planner.eastus2.azurecontainer.io/users";
  // const url = "https://localhost/users" ;
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
