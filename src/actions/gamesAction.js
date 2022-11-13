import axios from "axios";
import {popularGamesUrl, newGamesURL, upcomingGamesURL} from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
    //Fetch Axios
    const popularData = await axios.get(popularGamesUrl())
    const newGamesData = await axios.get(newGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })
}