import {
  Grid,
  Card,
  CardContent,

  Typography,
  makeStyles,
  Avatar,
} from '@material-ui/core';

const InfoCards = (props) => {
  const useStyles = makeStyles((theme)=>({

    cardStyle: {
      // "& .MuiGrid-spacing-xs-3":{
      //   margin:"0px"
      // },
      maxWidth: "200px",
      height: "130px",
      maxHeight: "150px",
      textAlign: 'center',
      padding: "10px 10px 0px 10px"
    }
  }))
  const classes = useStyles()
  return (
    <Card className={classes.cardStyle}>
      <CardContent>
        <Grid container justify="space-between" alignItems="center" spacing={3}>
          <Grid item >
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              {props.heading}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h5"
            >
              {props.info}
            </Typography>
            
          </Grid>
          {/* <Grid item>
            <Avatar style={props.style}>
              {props.text}
            </Avatar>
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default InfoCards;