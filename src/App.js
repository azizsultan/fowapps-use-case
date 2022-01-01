import "./App.css";
import { useEffect, useState } from "react";
import { Button, PopUp } from "./componentLib";

function App() {
  const [users, setUsers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const hidePopUp = () => setShowPopup(false);

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
  return (
    <>
      <PopUp
        showPopup={showPopup}
        onClose={hidePopUp}
        OnOk={hidePopUp}
        okText="Yes"
        closeText="Dismiss"
      />
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Full name</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ first_name, last_name, email, avatar }, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    class="rounded-circle z-depth-2"
                    alt="100x100"
                    src={avatar}
                    width="50"
                    height="50"
                  />
                </td>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
                <td>
                  {first_name} {last_name}
                </td>
                <td>
                  <Button onClick={() => setShowPopup(true)} primary>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
