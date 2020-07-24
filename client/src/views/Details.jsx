import React, { useState, useEffect } from 'react';
import { Link,navigate } from '@reach/router';
import axios from 'axios';
//Bootstrap
import Button from 'react-bootstrap/Button';

const Details = ({pet,setPet,pets,setPets,id}) => {

  const [name, setName] = useState("");
  const [petskills, setPetskills] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState("")


  useEffect(() => {
    axios.get(`http://localhost:8000/api/model/${id}`)
      .then(res => {
        console.log(res.data)
        setPet(res.data)
        setPetskills(res.data.skills)
        setName(res.data.name)
        setLoaded(true);
      })
      .catch(err => {
        console.log("Not Found Error", err.response)
        setErrors(err.response)
      })
  }, [])

  const divStyle = {
    border: "solid 1px black",
    display: "inline-block",
    padding: "10px"
  }

  // console.log(pet.skills)

  const deletePet = (id) => {
    console.log("Delete Handler", id)
    axios.delete(`http://localhost:8000/api/model/${id}`)
    .then(res => {
      console.log(res.data)
      console.log("Pet id to filter",pet._id)
      // setPets(pets.filter((pet) => pet._id !== id));
      navigate("/")
    })
    // .then()
    .catch(err => {
      console.log(err.response)
    })
  }
  
  console.log("New list of pets",pets)
  return (
    <div>
      <div className="Navbar">
        <h1>Pet Shelter</h1>
        <p className="topLink">
          <Link to={"/"}>
            back to home
          </Link>
        </p>
      </div>
      {loaded &&
        <h4>Details about: {pet.name}</h4>
      }
        <p>
          <Button 
            variant="danger"
            onClick={()=>deletePet(pet._id)}>
              Adopt {pet.name}
          </Button>
        </p>
      {loaded &&
        <div style={divStyle}>
          <div>
            <label>Pet Type:</label>
            <output>{pet.type}</output>
          </div>
          <div>
            <label>Description:</label>
            <output>{pet.description}</output>
          </div>
          {pet.skills !== undefined &&
            <div>
              <label>Skills:</label>
              <ul>
                {pet.skills.skill_1 !== undefined &&
                  <li>{pet.skills.skill_1}</li>
                }
                {pet.skills.skill_2 !== undefined &&
                  <li>{pet.skills.skill_2}</li>
                }
                {pet.skills.skill_3 !== undefined &&
                  <li>{pet.skills.skill_3}</li>
                }
              </ul>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Details;