import React from 'react';
//Styling and Animation
import styled from "styled-components";
import {motion} from "framer-motion";
//Redux
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {smallImage} from "../util";
//Images
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
//Star
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'


export function GameDetail({pathId}) {
    const navigate = useNavigate()
    //Exit detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto'
            navigate('/')
        }
    }

    //GET platform images
    const getPlatform = (platform) => {
        switch (platform) {
            case 'PlayStation 4':
                return playstation
            case 'PlayStation 3':
                return playstation
            case 'Xbox 360':
                return xbox
            case 'Xbox One':
                return xbox
            case 'PC':
                return steam
            case 'Nintendo Switch':
                return nintendo
            case 'macOS':
                return apple
            default:
                return gamepad
        }
    }

    //Star logic

    const getStars = () => {
        const stars = []
        const rating = Math.floor(game.rating)
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img alt='star' key={i} src={starFull}></img>)
            } else {
                stars.push(<img alt='star' key={i} src={starEmpty}></img>)

            }
        }
        return stars
    }


    const {screen, game, isLoading} = useSelector(state => state.detail)
    return (
        <>
            {!isLoading && (
                <CardShadow className='shadow' onClick={exitDetailHandler}>
                    <Detail layoutId={pathId}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 leyoutid={`title ${pathId}`}>{game.name}</motion.h3>
                                <p>Rating: {game.rating}</p>
                                {getStars()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms?.map(data => (
                                        // <img key={data.platform.id} src={getPlatform(data.platform.name)}> </img>
                                        <img key={data.platform.id} src={getPlatform(data.platform.name)}
                                             alt={data.platform.name}></img>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)}
                                        alt="image"/>
                        </Media>
                        <Description>
                            <p>{smallImage(game.description_raw, 1280)}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results?.map(screen => (
                                <img src={screen.image} key={screen.id} alt="image"/>
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  z-index: 10;
  left: 10%;
  color: black;

  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;

  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  margin: 3rem 0rem
`;