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
        <div className="row">
          {users.map(({ first_name, last_name, avatar, email }) => (
            <div class="col-md-4 col-sm-12" style={{ width: "18rem" }}>
              <img class="card-img-top" src={avatar} alt="" />
              <div class="card-body">
                <h5 class="card-title">
                  {first_name} {last_name}
                </h5>
                <p class="card-text">{email}</p>
                <Button onClick={() => setShowPopup(true)} primary>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
