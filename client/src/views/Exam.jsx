import React, { useState} from 'react';
import { Router } from '@reach/router';
import Button from 'react-bootstrap/Button';

const Exam = (props) => {

  // const [style] = useState({color: "purple"})
  // const [author, setAuthor] = useState({name: ""})

  return (
    <div>
      <h1>Home Page</h1>
      {/* <Router>
        <AuthorList
          style={style}
          path="/"
        />
        <AuthorNew
          style={style}
          author={author}
          setAuthor={setAuthor}
          path="/new"
        />
        <AuthorEdit
          style={style}
          author={author}
          setAuthor={setAuthor}
          path="/edit/:id"
          />
      </Router> */}
    </div>
  )
}

export default Exam;