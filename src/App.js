import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import React, { useState } from 'react'
import './App.css';
import AddNote from './components/AddNote';
import ShowNotes from './components/ShowNotes';
import Note from './components/Note';
import {Grid} from '@material-ui/core';
import api from './api/notes'
import { useEffect } from 'react'
import Layout from './components/Layout'
import AddTodo from './components/AddTodo';
import ShowTodos from './components/ShowTodos'

function App() {

  const [Notes, setNotes] = useState([])
  const[todos, settodos] = useState([])

  // add note to json server
  const addNote = async (noteTitle,noteText) => {

    const request = {
      title: noteTitle,
      text: noteText,
    }

    const response = await api.post("/notes",request)


    setNotes([...Notes,response.data])
  }

  const addtodo = async (todo) => {
    
    const todoObject = {
      title: todo,
    }

    const response1 = await api.post("/todos", todoObject)

    settodos([...todos, response1.data])

  }

  // add todos from json server
  const retrievetodos = async () => {
    const responseRetrieve = await api.get("/todos")
    // console.log('responseRetrieve')
    // console.log(responseRetrieve.data)
    return responseRetrieve.data;
  }

  // get all notes from json server
  const retrieveNotes = async () => {
    const response = await api.get("/notes")
    return response.data;
  }

  // set all notes and todos

  useEffect(() => {
    const getAllNotes = async () => {
      const allNotes = await retrieveNotes();

      if(allNotes) setNotes(allNotes)
    };

    const getalltodos = async () => {
      const allTodos = await retrievetodos();

      if(allTodos) settodos(allTodos)
    }
    
    getalltodos();
    getAllNotes();
  },[])

  const deleteNote = async (id) => {
    await api.delete(`/notes/${id}`)
    const newNotes = Notes.filter((note) => {
      return note.id !== id
      
    })

    setNotes(newNotes)
  }

  const deleteTodo = async (id) => {
    await api.delete(`/todos/${id}`)
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    })

    console.log(newTodos)
    settodos(newTodos)
  }


  
  return (
    <div className="App">
      <Router>
        <Layout>
        <Switch>
        <Route exact path="/">
            <AddNote addNote={addNote}/>
          </Route>

          <Route  path="/shownotes">
              <ShowNotes deleteNote={deleteNote} Notes={Notes} />

          </Route>

          <Route path="/addtodo">
            <AddTodo addtodo={addtodo}/>
          </Route>

          <Route path="/mytodos">
            <ShowTodos deleteTodo={deleteTodo} todos={todos}/>
          </Route>

        </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
