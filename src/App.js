import React, {useEffect} from "react";
import {Home} from "./pages/Home";
import {Nav} from "./components/Nav";
import {GlobalStyles} from "./components/GlobalStyles";
import {Route, Routes} from 'react-router-dom';
import {loadGames} from "./actions/gamesAction";
import {useDispatch} from "react-redux";



function App() {
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(loadGames())

        console.log('fetch')
    }, [])
    return (
        <div className='App'>
            <GlobalStyles/>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/game/:id' element={<Home/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
