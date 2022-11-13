import React, {useEffect} from "react";
import {GameDetail} from "../components/GameDetail";
//Redux
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gamesAction";
//Components
import {Game} from "../components/Game";
//Styled
import styled from "styled-components";
import {AnimatePresence, AnimateSharedLayout, motion} from "framer-motion";
import {useLocation} from "react-router-dom";
import {loadDetail} from "../actions/detailAction";
import {fadeIn} from "../animations";


export const Home = () => {
    //get Current Location
    const location = useLocation()
    const pathId = location.pathname.split('/')[2]
    //Fetch
    const dispatch = useDispatch()
    console.log('Home')
    useEffect(() => {
        dispatch(loadGames()).then(() => {
            if (pathId) {
                dispatch(loadDetail(pathId));
            }
        });
    }, [dispatch]);

    //Get data back
    const {popular, newGames, upcoming, searched} = useSelector(state => state.games)

    return (
        <GameList variants={fadeIn} initial='hidden' animate='show'>
            <AnimateSharedLayout type='crossfade'>
            <AnimatePresence>
                {pathId && <GameDetail pathId={pathId}/>}
            </AnimatePresence>
                {searched.length ? (
                <div className="searched">
                    <h2>Searched Games</h2>
                    <Games>
                        {searched.map(game => (
                            <Game key={game.id} name={game.name} released={game.released} id={game.id}
                                  image={game.background_image}/>
                        ))}
                    </Games>
                </div>
                ) : ''}

            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map(game => (
                    <Game key={game.id} name={game.name} released={game.released} id={game.id}
                          image={game.background_image}/>
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map(game => (
                    <Game key={game.id} name={game.name} released={game.released} id={game.id}
                          image={game.background_image}/>
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map(game => (
                    <Game key={game.id} name={game.name} released={game.released} id={game.id}
                          image={game.background_image}/>
                ))}
            </Games>
            </AnimateSharedLayout>
        </GameList>
    )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
