import { useEffect, useState } from "react";
//import axios from "axios";

import { Button, PopUp } from "./componentLib";
import "./App.css";

const baseURL = "https://reqres.in/api/users";

function App() {
  const [users, setUsers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [id, setId] = useState();
  const hidePopUp = () => setShowPopup(false);

  useEffect(() => {
    fetch(baseURL)
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

  const deleteUser = () => {
    fetch(baseURL + "/" + id)
      .then(res => res.json())
      .then(
        result => {
          const {
            data: { id }
          } = result;
          const updatedUsers = users.filter(user => user.id !== id);
          setUsers(updatedUsers);
        },
        error => {
          console.log(error);
        }
      );
    hidePopUp();
  };
  return (
    <>
      <PopUp
        showPopup={showPopup}
        onClose={hidePopUp}
        OnOk={deleteUser}
        okText="Yes"
        closeText="Dismiss"
      />
      <div className="container">
        {users.length > 0 ? (
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
              {users.map(
                ({ first_name, last_name, email, avatar, id }, index) => (
                  <tr>
                    <th scope="row" className="align-middle">
                      {id}
                    </th>
                    <td className="align-middle">
                      <img
                        class="rounded-circle z-depth-2"
                        alt="100x100"
                        src={avatar}
                        width="50"
                        height="50"
                      />
                    </td>
                    <td className="align-middle">{first_name}</td>
                    <td className="align-middle">{last_name}</td>
                    <td className="align-middle">{email}</td>
                    <td className="align-middle">
                      {first_name} {last_name}
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          setId(id);
                          setShowPopup(true);
                        }}
                        primary
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        ) : (
          <p className="d-flex justify-content-center mt-5">No Users Found</p>
        )}
      </div>
    </>
  );
}

export default App;
