import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const TMDB_POSTER_URL = 'https://image.tmdb.org/t/p/w154';

const useStyles = makeStyles({
  root: {
    minWidth: 300
  },
  media: {
    width: 300,
    height: 250,
  },
});

const CardHolder = (props: any) => {
  const styles = useStyles();
  const { posterPath } = props;

  return (
    <Card className={styles.root}>
      <CardContent>
        <CardMedia
            className={styles.media}
            image={`${TMDB_POSTER_URL}${posterPath}`}
            title="Contemplative Reptile"
          />
      </CardContent>
    </Card>
  );
};

export default CardHolder;
