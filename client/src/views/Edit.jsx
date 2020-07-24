import React, { useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios'
//Bootstrap
import Button from 'react-bootstrap/Button';

const New = ({id}) => {
  // STATE DATA
  const [pet, setPet] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [petskills, setPetskills] = useState("");
  const [skill_1, setSkill_1] = useState("");
  const [skill_2, setSkill_2] = useState("");
  const [skill_3, setSkill_3] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:8000/api/model/${id}`)
      .then(res => {
        console.log(res.data)
        setPet(res.data)
        setName(res.data.name)
        setType(res.data.type)
        setDescription(res.data.description)
        setSkill_1(res.data.skills.skill_1)
        setSkill_2(res.data.skills.skill_2)
        setSkill_3(res.data.skills.skill_3)
        setPetskills(res.data.skills)
        setLoaded(true);
      })
      .catch(err => {
        console.log("Not Found Error", err.response.data.message)
        setErrors(err.response.data.message)
      })
  }, [])

  // HANDLERS
  const nameHandler = (e) => {
    setName(e.target.value)
  }
  const typeHandler = (e) => {
    setType(e.target.value)
  }
  const descriptionHandler = (e) => {
    setDescription(e.target.value)
  }
  const skill_1Handler = (e) => {
    setSkill_1(e.target.value)
  }
  const skill_2Handler = (e) => {
    setSkill_2(e.target.value)
  }
  const skill_3Handler = (e) => {
    setSkill_3(e.target.value)
  }

  const formStyle = {
    border: "solid 1px black",
    display: "inline-block",
    padding: "10px"
  }

  const formHandler = (e) => {
    updatePet(e)
  }

  const updatePet = (e) => {
    e.preventDefault()
    console.log("Updated Pet")
    var updatedPet = {
      name: name,
      type: type,
      description: description,
      skills: {
        skill_1: skill_1,
        skill_2: skill_2,
        skill_3: skill_3
      }
    };
    axios.put(`http://localhost:8000/api/model/update/${id}`, updatedPet)
      .then(res => {
        console.log(res.data)
        setErrors("")
      })
      .catch(err => {
        console.log("Error",
          err.response.data.errors)
        setErrors(err.response)
      })
  }

  // console.log("setErrors", errors)
  
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
      <h4>Edit </h4>

      <form style={formStyle} onSubmit={formHandler}>
        <div>
          <label>Pet Name:
            {errors?.data?.errors?.name &&
              <span style={{ color: "red" }}> {errors.data.errors.name.properties.message}</span>
            }
          </label>
          <input type="text" value={name} onChange={nameHandler} />
        </div>

        <div>
          <label>Pet Type:
            {errors?.data?.errors?.type &&
              <span style={{ color: "red" }}> {errors.data.errors.type.properties.message}</span>
            }
          </label>
          <input type="text" value={type} onChange={typeHandler} />
        </div>

        <div>
          <label>Pet Description:
          {errors?.data?.errors?.description &&
              <span style={{ color: "red" }}> {errors.data.errors.description.properties.message}</span>
            }
          </label>
          <input type="text" value={description} onChange={descriptionHandler} />
        </div>

        <div>
          <label>Skill 1:
          {/* {errors?.data?.errors?.skills.skill_1 &&
              <span style={{ color: "red" }}> {errors.data.errors.skills.skill_1.properties.message}</span>
            } */}
          </label>
          <input type="text" value={skill_1} onChange={skill_1Handler} />
        </div>

        <div>
          <label>Skill 1:
          {/* {errors?.data?.errors?.skills.skill_2 &&
              <span style={{ color: "red" }}> {errors.data.errors.skills.skill_2.properties.message}</span>
            } */}
          </label>
          <input type="text" value={skill_2} onChange={skill_2Handler} />
        </div>

        <div>
          <label>Skill 1:
          {/* {errors?.data?.errors?.skills.skill_3 &&
              <span style={{ color: "red" }}> {errors.data.errors.skills.skill_3.properties.message}</span>
            } */}
          </label>
          <input type="text" value={skill_3} onChange={skill_3Handler} />
        </div>
        <Button
          type="submit"
          value="Submit">
          Add Pet
          </Button>
      </form>
    </div>
  )
}

export default New;