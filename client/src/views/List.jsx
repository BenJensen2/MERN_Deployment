import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
//Bootstrap
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

const List = (props) => {

  const [pets, setPets] = useState()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getPets();
  }, [])
  
  const sorted=(petsList)=>{
    return petsList.sort((a, b) => a.type.localeCompare(b.type))    
  }
  const getPets = () => {
    axios.get("http://localhost:8000/api/models")
      .then(res => {
        console.log(res.data)
        setPets(sorted(res.data))
        setLoaded(true)
        console.log("Sorted Pets",sorted(res.data))
      })
      .catch(err => {
        console.log(err.response.data.errors)
      })
  };

  return (
    <div>
      <div className="Navbar">
        <h1>Pet Shelter</h1>
        <p className="topLink">
          <Link to={"/pets/new"}>
            add a pet to the shelter
          </Link>
        </p>
      </div>
      <h4>These pets are looking for a good home</h4>
      <Table bordered striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loaded &&
              pets.map((pet,i) =>
              <tr key={i}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                  <Link to={`/pets/${pet._id}`}>
                    details
                  </Link>
                  <span> | </span>
                  <Link to={`/pets/${pet._id}/edit`}>
                    edit
                  </Link>
                </td>
              </tr>
              )
            }
          </tbody>
        </Table>
    </div>
  )
}

export default List;