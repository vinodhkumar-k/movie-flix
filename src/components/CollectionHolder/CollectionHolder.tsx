import React, { useEffect } from 'react';
import axios from 'axios';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import Card from '../CardHolder/CardHolder';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: "hidden",
    display: "block",
    width: "100%"
  },
  button: {
    padding: 0,
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '50px',
    color: 'white',
    border: 0,
    position: 'absolute',
    zIndex: 1,
    top: 0,
    outline: '0 none',
    opacity: 1,
    borderRadius: 0
  },
  previousButton: {
    left: 0
  },
  nextButton: {
    right: 0
  }
});

const CollectionHolder = (props: {filter: string}) => {
  const styles = useStyles();
  const theme = useTheme();
  useEffect(() => { fetchNowPlayingMovies() }, []);
  const [activeStep, setActiveStep] = React.useState(0);
  const [movies, setMovies] = React.useState([]);
  // const maxSteps = tutorialSteps.length;
  const maxSteps = 0;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const fetchNowPlayingMovies = () => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=deba4a8e1506a296d5fb0b62792ccce2&language=en-US&page=1').then((res: any) => {
      setMovies(res.data.results);
    });
  }

  const renderCards = (movies: any) => {
    return movies.map((movie: any) => 
      <Card key={movie.id}
        id={movie.id}
        posterPath={movie["poster_path"]} />
    );
  }

  return (
    <div className={styles.root}>
      <div style={{ display: "flex", width: '100%' }}>
        <Button size="small" onClick={handleBack} className={`${styles.button} ${styles.previousButton}`} disabled={activeStep === 0}>
          {theme.direction === "rtl" ? (<KeyboardArrowRight />) : (<KeyboardArrowLeft />)}
        </Button>
        {renderCards(movies)}
        <Button size="small" onClick={handleNext} className={`${styles.button} ${styles.nextButton}`} disabled={activeStep === maxSteps - 1}>
          {theme.direction === "rtl" ? (<KeyboardArrowLeft />) : (<KeyboardArrowRight />)}
        </Button>
      </div>
    </div>
  );
}

export default CollectionHolder;
