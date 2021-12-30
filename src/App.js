import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(
        result => {
          const { data } = result;
          setUsers(data);
        },
        error => {
          console.log(error);
        }
      );
  }, []);

  console.log(users);
  return (
    <>
      <div className="container">
        <div className="row">
          {users.map(({ first_name, last_name, avatar, email }) => (
            <div class="col-4 col-xs-12" style={{ width: "18rem" }}>
              <img class="card-img-top" src={avatar} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">
                  {first_name} {last_name}
                </h5>
                <p class="card-text">{email}</p>
                <button href="#" class="btn btn-primary">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
