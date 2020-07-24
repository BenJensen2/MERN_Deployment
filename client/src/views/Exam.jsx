import React, { useState} from 'react';
import { Router } from '@reach/router';
import List from './List';
import New from './New';
import Details from './Details';
import Edit from './Edit';
//Bootstrap
import Button from 'react-bootstrap/Button';

const Exam = (props) => {

  const [pet, setPet] = useState({
    name:"",
    type:"",
    description: "",
    skills:{
        skill_1:"",
        skill_2:"",
        skill_3:""
    }
})
const [pets, setPets] = useState([])

  return (
    <div>
      <Router>
        <List
          path="/"
        />
        <New
          pet={pet}
          setPet={setPet}
          path="/pets/new"
        />
        <Details
          pet={pet}
          setPet={setPet}
          pets={pets}
          setPets={setPets}
          path="/pets/:id"
        />
        <Edit
          pet={pet}
          setPet={setPet}
          pets={pets}
          setPets={setPets}
          path="/pets/:id/edit"
          />
      </Router>
    </div>
  )
}

export default Exam;