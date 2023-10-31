import './App.css';
import {Movies} from "./components/Movies/Movies";
import Form from "./components/Form/Form";
import {Route, Routes} from "react-router-dom";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'movie/:id'} element={<MovieInfo/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
