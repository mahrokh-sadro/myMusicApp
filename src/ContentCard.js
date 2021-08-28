import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';


import Grid from '@material-ui/core/Grid';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleFilledSharpIcon from '@material-ui/icons/PlayCircleFilledSharp';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: 'auto',
      backgroundColor: "#2a2827",
      maxHeight: 500,
      paddingBottom: '5%',
      paddingTop: '5%',
      marginTop: '1rem',
      borderRadius: 20,

    }, subColor: {
      color: '#fff',
      textAlign: "center",
      paddingBottom: '10%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      // borderRadius: "50%"
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function ContentCard(props) {
  const classes = useStyles();


  return (

    <Card className={classes.root} elevation={4}>
      <CardHeader

        subheader={<Typography className={classes.subColor}>Playing Now</Typography>}
      />
      <CardMedia
        className={classes.media}
        image={props.song.img_src}
        title="Paella dish"
      />
      <CardContent>
        <Grid container>
          <Grid>
            <Typography variant="body2" color="error" component="p" align="left">
              <h3 >{props.song.singer}</h3>
              <subtitle1>{props.song.title}</subtitle1>
            </Typography>
          </Grid>
          <Grid align="right">

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" >
                <FavoriteIcon />
              </IconButton>
            </CardActions>

          </Grid>
        </Grid>
        <br />
        <Grid container paddingTop="12rem" alignContent="center" color="error">
          <IconButton color="secondary">
            <SkipPreviousIcon fontSize="large" color="error" />
          </IconButton>
          <IconButton elevation={10}>
            <PlayCircleFilledSharpIcon fontSize="large" color="error" />
          </IconButton>
          <IconButton >
            <SkipNextIcon fontSize="large" />
          </IconButton>
        </Grid>





      </CardContent>


    </Card>
  );
}
