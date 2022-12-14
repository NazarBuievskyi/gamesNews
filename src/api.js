//Base URL
const base_url = 'https://api.rawg.io/api/'

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth - 1}-${currentDay - 1}`
const nextYear = `${currentYear + 1}-${currentMonth + 1}-${currentDay + 1}`

//Popular games
const popular_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${new_games}`
//Game details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}.json?&key=${process.env.REACT_APP_GAMES_API}`
//Game ScreenShots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&key=${process.env.REACT_APP_GAMES_API}`

//Search Game
export const searchGameURL = (game_name) => `${base_url}games?key=${process.env.REACT_APP_GAMES_API}&search=${game_name}&page_size=9`
