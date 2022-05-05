// import logo from "./logo.svg";
// import "./App.css";
// import { useState, useEffect } from "react";
// import db from "../db.json";
// import Item from "./Items";

// //Task

// function App() {
//   const [comment, setComment] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [profile, setProfile] = useState([]);

//   useEffect(() => {
//     const requestOptions = {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//       body: db,
//     };
//     fetch("http://localhost:5000/comments", requestOptions)
//       .then((response) => response.json())
//       .then((data) => setComment(data.id));
//   }, []);

//   useEffect(() => {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: db,
//     };
//     fetch("http://localhost:5000/posts", requestOptions)
//       .then((response) => response.json())
//       .then((data) => setPosts(data.id));
//   }, []);

//   useEffect(() => {
//     const requestOptions = {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: db,
//     };
//     fetch("http://localhost:5000/profile", requestOptions)
//       .then((response) => response.json())
//       .then((data) => setProfile(data.id));
//   }, []);

//   return (
//     <div className="App">
//       Check app.js for your task. You are to spend 1 hour 20min for this task.
//     </div>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Notes from "./pages/Notes";
import Note from "./pages/Note";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/note/:id" element={<Note />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
