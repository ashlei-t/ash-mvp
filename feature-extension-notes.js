// // /src
// //   /components
// //     ├── Navbar.jsx
// //     ├── SearchBar.jsx
// //     ├── Results.jsx
// //     ├── Books.jsx (not created yet)
// //     ├── Movies.jsx (not created yet)
// //     ├── TVShows.jsx (not created yet)
// //     ├── Music.jsx (not created yet)
// //     ├── SignUp.jsx
// //   /pages
// //     ├── Home.jsx
// //     ├── MyListView.jsx
// //     ├── Login.jsx (SignUp.jsx)
// //   /App.jsx

// // NAVBAR.JSX
// import { Link } from "react-router-dom";

// const Navbar = () => (
//   <nav>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/MyList">My List</Link></li>
//       <li><Link to="/Login">Login</Link></li>
//     </ul>
//   </nav>
// );

// export default Navbar;

// // APP.JSX
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import MyListView from "./pages/MyListView";
// import Login from "./pages/Login";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/MyList" element={<MyListView />} />
//         <Route path="/Login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// // Home.JSX
// import SearchBar from "../components/SearchBar";
// import ResultsList from "../components/ResultsList";
// import { useState } from "react";

// const Home = () => {
//   const [allResults, setAllResults] = useState([]);

//   return (
//     <div>
//       <SearchBar onSubmit={setAllResults} />
//       <ResultsList results={allResults} />
//     </div>
//   );
// };

// export default Home;



// // MYLISTVIEW.JSX
// import MyList from "../components/MyList";

// const MyListView = () => {
//   return (
//     <div>
//       <h1>My Favorite Things</h1>
//       <MyList />
//     </div>
//   );
// };

// export default MyListView;


// // LOGIN.JSX
// import { useState } from "react";
// import Register from "./Register";

// const Login = () => {
//   const [newUser, setNewUser] = useState(false);

//   return (
//     <div>
//       {newUser ? <Register /> : (
//         <div>
//           <h2>Login</h2>
//           <form>
//             <input type="text" placeholder="Username or Email" />
//             <input type="password" placeholder="Password" />
//             <button type="submit">Login</button>
//           </form>
//           <p onClick={() => setNewUser(true)}>New user? Register here</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;


/* SECTION - CORE Color Palette CSS */
.color-1 {
    color: #ff6e61;
  }
  .color-2 {
    color: #ffb84d;
  }
  .color-3 {
    color: #6d9dc5;
  }
  .color-4 {
    color: #5e4b8b;
  }
  .color-5 {
    color: #da1b61;
  }

  /* CSS Variables */
  :root {
    --color-1: #ff6e61;
    --color-2: #ffb84d;
    --color-3: #6d9dc5;
    --color-4: #036fc8;
    --color-5: #5e4b8b;
    --color-6: #da1b61;

  }

  /* Linear Gradient */
.linear-gradient {
  background: linear-gradient(0.25turn, #ff6e61, #ffb84d, #6d9dc5, #5e4b8b, #da1b61);
}

/* Radial Gradient */
.radial-gradient {
  background: radial-gradient(circle, #ff6e61, #ffb84d, #6d9dc5, #5e4b8b, #da1b61);
}

/* SECTION - Typography */



  h1 {
    font-size: 3em;
    color: var(--color-4);
  }

  h2 {
    font-size: 2.5em;
    color: var(--color-6);
  }

  h3 {
    font-size: 1.75em;
    color: var(--color-5);
  }

  h4 {
    font-size: 1.5em;
    color: var(--color-5);
  }

  h5 {
    font-size: 1.2em;
    color: var(--color-5);
  }


  h6 {
    font-size: 1em;
    color: var(--color-5);
    }


  body {
    font-family: roboto, sans-serif;
    background-color: #ff6e61;

  }


/* SECTION - Layout */

#root {
  background-color: #ff6e61;
  grid-template-columns: auto;
  grid-template-rows: auto;
  display: grid;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.main {
  background-color: beige;
  place-items: center;
  border-radius: 10px;
  width: 100%;
  min-width: 80vw;
  height: 100vh;

}

.app {
  display: flex;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  align-self: center;
  align-content: center;
  background-color: beige;
  width: 80vw;


}

.search-Box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 0;
  margin-bottom: 0;
}




.results-Box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: beige;
  border-radius: 10px;
  padding: 20px;
  margin: 0;
  padding-top: 0;
}

hr {
  width: 90%;
  color: #5e4b8b;
  background-color: #5e4b8b;
  height: 2px;
  border-radius: 10px;

}


/* SECTION - Title Styles */

.title {
  background:  radial-gradient(circle, #ff6e61, #ffb84d, #6d9dc5, #5e4b8b, #da1b61);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 10px;
  font-size: 3.2em;
  line-height: 1.1;
  margin-top: 75px;
  margin-bottom: 0;
  padding-bottom: 0;
}


.title-line{
  background:  radial-gradient(circle, #ff6e61, #ffb84d, #6d9dc5, #5e4b8b, #da1b61);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 10px;
  font-size: 2.5em;
  line-height: 1.1;
  margin-top:  0;
  padding-top: 0;
  width: 50vw;
}

.subtitle {
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  color:#6d9dc5;
  text-align: center;
  font-style: italic;
}



/* SECTION - COMPONENT STYLES */


/* SUB-SECTION - Navbar Section */



.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  color: white;
  border-radius: 10px;
}

.navbar-button {
  background-color: var(--color-5);
  border-radius: 10px;
  width: 100px;
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  color: var(--color-2);
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  border: #ffb84d solid 3px;
}

.navbar-button:hover {
  background-color: #706193;
  color: #ffb84d;
}



.nav-link {
  color: var(--color-2);
  text-decoration: none;
  text-align: center;
}


/*  SUB-SECTION - Search Section */

.search-container {
  display: flex;
  flex-direction: row;
  row-gap: 20px;
  column-gap: 20px;
  align-items: baseline;
  padding-bottom: 20px;
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;

}

.search-header {
  margin-bottom: 10px;
  align-items: center;
  text-align: center;
  margin-top: 0;

}

.search-bar {
  margin: 10px auto;
  background-color: #6d9dc5;
  border-radius: 10px;
  padding: 5px;
  align-items: baseline;
}


.search-button {
  border-radius: 10px;
  width: 100px;
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  align-items: baseline;
}

/* SUB-SECTION - Results Section */

.results-header{
  width: 75%;
  margin: 10%;
  margin-bottom: 0;
  padding: 50px;
  background-color: #ffb84d;
  border-radius: 10px;
}


.results-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding-left: 10%;
  padding-right: 10%;
  width: 100%;
  max-width: max-content;
  min-width: 60%;
  margin: 10%;
  background-color: #6d9dc5;
  border-radius: 10px;
  text-align: center;
  list-style: none;
  margin-top: 0;
}

.media-lists-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
  row-gap: 20px;
  padding: 20px;
  width: 100%;
  min-width: 60%;
  margin: 10%;
  background-color: #f0f0f0;
  list-style: none;
}

.sub-nav-results {
  display: flex;
  flex-direction: row;
  align-items:first baseline;
  background-color: #ffb84d;
  padding: 10px;
  border-radius: 10px;
  color: white;
  list-style: none;
  text-decoration: none;

}

.sub-nav-results-list {
  display: flex;
  flex-direction: row;
  align-items: first baseline;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  list-style: none;
  color: white;
  list-style: none;
  text-decoration: none;
}


.sub-nav-results-list li {
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  list-style: none;
  background-color: #5e4b8b;
  color: white;
  border: 1px solid #ffb84d;
  border-radius: 10px;
  list-style: none;
  text-decoration: none;
}

.results-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding: 20px;
  width: 100%;
  min-width: 60%;
  margin: 10%;
  background-color: #f0f0f0;
  border-radius: 10px;
  list-style: none;
  text-align: center;
}

li {
  list-style: none;
  text-decoration: none;
  text-align: center;
}


.button {
  background-color: #ffb84d;
  border-radius: 10px;
  width: 100px;
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
}


  body {
    font-family: roboto, sans-serif;
    background-color: #ff6e61;
  }


/* SECTION - Layout */

#root {
  background-color: #ff6e61;
  grid-template-columns: auto;
  grid-template-rows: auto;
  display: grid;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.main {
  background-color: beige;
  place-items: center;
  border-radius: 10px;
  width: 100%;
  min-width: 80vw;
  height: 100vh;

}

.app {
  display: flex;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  align-self: center;
  align-content: center;
  background-color: beige;
  width: 80vw;
  margin-top: 50px;


}

.search-Box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 0;
  margin-bottom: 0;
}




.results-Box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: beige;
  border-radius: 10px;
  padding: 20px;
  margin: 0;
  padding-top: 0;
}

hr {
  width: 90%;
  color: #5e4b8b;
  background-color: #5e4b8b;
  height: 2px;
  border-radius: 10px;

}


/* SECTION - Title Styles */

.title {
  background:  radial-gradient(circle, #ff6e61, #ffb84d, #6d9dc5, #5e4b8b, #da1b61);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 10px;
  font-size: 3.2em;
  line-height: 1.1;
  margin-top: 75px;
  margin-bottom: 0;
  padding-bottom: 0;
}


.title-line{
  background:  radial-gradient(circle, #ff6e61, #ffb84d, #6d9dc5, #5e4b8b, #da1b61);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 10px;
  font-size: 2.5em;
  line-height: 1.1;
  margin-top:  0;
  padding-top: 0;
  width: 50vw;
}

.subtitle {
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  color:#6d9dc5;
  text-align: center;
  font-style: italic;
}



/* SECTION - COMPONENT STYLES */


/* SUB-SECTION - Navbar Section */



.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  color: white;
  border-radius: 10px;
}

.navbar-button {
  background-color: var(--color-5);
  border-radius: 10px;
  width: 100px;
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  color: var(--color-2);
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  border: #ffb84d solid 3px;
}

.navbar-button:hover {
  background-color: #706193;
  color: #ffb84d;
}



.nav-link {
  color: var(--color-2);
  text-decoration: none;
  text-align: center;
}


/*  SUB-SECTION - Search Section */

.search-container {
  display: flex;
  flex-direction: row;
  row-gap: 20px;
  column-gap: 20px;
  align-items: baseline;
  padding-bottom: 20px;
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;

}

.search-header {
  margin-bottom: 10px;
  align-items: center;
  text-align: center;
  margin-top: 0;

}

.search-bar {
  margin: 10px auto;
  background-color: #6d9dc5;
  border-radius: 10px;
  padding: 5px;
  align-items: baseline;
}


.search-button {
  border-radius: 10px;
  width: 100px;
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  align-items: baseline;
}

/* SUB-SECTION - Results Section */

.results-header{
  width: 75%;
  margin: 10%;
  margin-bottom: 0;
  padding: 50px;
  background-color: #ffb84d;
  border-radius: 10px;
}


.results-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding-left: 10%;
  padding-right: 10%;
  width: 100%;
  max-width: max-content;
  min-width: 60%;
  margin: 10%;
  background-color: #6d9dc5;
  border-radius: 10px;
  text-align: center;
  list-style: none;
  margin-top: 0;
}

.media-lists-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
  row-gap: 20px;
  padding: 20px;
  width: 100%;
  min-width: 60%;
  margin: 10%;
  background-color: #f0f0f0;
  list-style: none;
}

.sub-nav-results {
  display: flex;
  flex-direction: row;
  align-items:first baseline;
  background-color: #ffb84d;
  padding: 10px;
  border-radius: 10px;
  color: white;
  list-style: none;
  text-decoration: none;

}

.sub-nav-results-list {
  display: flex;
  flex-direction: row;
  align-items: first baseline;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  list-style: none;
  color: white;
  list-style: none;
  text-decoration: none;
}


.sub-nav-results-list li {
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  list-style: none;
  background-color: #5e4b8b;
  color: white;
  border: 1px solid #ffb84d;
  border-radius: 10px;
  list-style: none;
  text-decoration: none;
}
.sub-nav-results-list li:hover {
  background-color: #706193;


}

.results-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding: 20px;
  width: 100%;
  min-width: 60%;
  margin: 10%;
  margin-top: 0;
  background-color: #f0f0f0;
  border-radius: 10px;
  list-style: none;
  text-align: center;
}

li {
  list-style: none;
  text-decoration: none;
  text-align: center;
}


.button {
  background-color: #ffb84d;
  border-radius: 10px;
  width: 100px;
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
}

.button:hover {
  background-color: #6d9dc5;
  color: #5e4b8b;
}
