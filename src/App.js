import {useEffect, useState} from 'react';
import {Button, PopUp} from './componentLib';
import './App.css';

const baseURL = 'https://reqres.in/api/users';

function App() {
  const [users, setUsers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [id, setId] = useState();
  const hidePopUp = () => setShowPopup(false);

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((result) => {
        const {data} = result;
        setUsers(data);
      });
  }, []);

  const deleteUser = () => {
    setIsProcessing(true);
    fetch(baseURL + '/' + id)
      .then((res) => res.json())
      .then((result) => {
        const {
          data: {id},
        } = result;
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
        setIsProcessing(false);
      });
    hidePopUp();
  };
  return (
    <>
      <PopUp
        showPopup={showPopup}
        onClose={hidePopUp}
        OnOk={deleteUser}
        okText='Delete'
        closeText='Cancel'
        message={`Do you want to delete user with id ${id}`}
      />
      <div className='container'>
        {users.length > 0 ? (
          <table class='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'></th>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Full name</th>
                <th style={{width: '10%'}}></th>
              </tr>
            </thead>
            <tbody>
              {users.map(({first_name, last_name, email, avatar, id}) => (
                <tr>
                  <th scope='row' className='align-middle'>
                    {id}
                  </th>
                  <td className='align-middle'>
                    <img
                      class='rounded-circle z-depth-2'
                      alt='100x100'
                      src={avatar}
                      width='50'
                      height='50'
                    />
                  </td>
                  <td className='align-middle'>{first_name}</td>
                  <td className='align-middle'>{last_name}</td>
                  <td className='align-middle'>{email}</td>
                  <td className='align-middle'>
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
              ))}
            </tbody>
          </table>
        ) : (
          <p className='d-flex justify-content-center mt-5'>
            {isProcessing ? 'Processing...' : 'No Users Found'}
          </p>
        )}
      </div>
    </>
  );
}

export default App;
