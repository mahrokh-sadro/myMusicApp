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
import ShareIcon from '@material-ui/icons/Share';

import Grid from '@material-ui/core/Grid';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
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

export default function RecipeReviewCard() {
  const classes = useStyles();


  return (
    <Card className={classes.root} elevation={4}>
      <CardHeader

        subheader={<Typography className={classes.subColor}>Playing Now</Typography>}
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        title="Paella dish"
      />
      <CardContent>
        <Grid container>
          <Grid>
            <Typography variant="body2" color="error" component="p" align="left">
              <h3 >singer name</h3>
              <subtitle1>song name</subtitle1>
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
          <IconButton >
            <PlayCircleFilledSharpIcon fontSize="large" color="error" />
          </IconButton>
          <IconButton >
            <SkipNextIcon fontSize="large" />
          </IconButton>
        </Grid>





      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions> */}

    </Card>
  );
}
