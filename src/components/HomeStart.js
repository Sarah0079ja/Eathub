import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import cover from "../images/food_upscaled.png";

const useStyles = makeStyles((theme) => ({
  presentation: {
    display: "flex",
    width: "90%",
    margin: "auto",
    minHeight: "80vh",
    alignItems: "center",
    // eslint-disable-next-line
    ["@media (max-width:1024px)"]: {
      flexDirection: "column",
    },
  },
  introduction: {
    flex: 1,
    paddingLeft: 60,
    height: "340px",
  },
  safeFood: {
    fontSize: 64,
    fontWeight: 400,
  },
  delivery: {
    color: "#12278c",
    fontSize: 64,
    fontWeight: "bold",
    marginTop: -30,
    marginBottom: 20,
  },
  paragraph: {
    width: 400,
    fontSize: 14.5,
  },
  cover: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    height: "72vh",
  },
  coverImg: {
    height: "100%",
  },
  ctaOrder: {
    fontSize: 18,
    backgroundColor: "#157084",
    marginTop: 30,
    color: "white"
  },

  ["@media (max-width:720px)"]: {
     flexDirection: "column",
    coverImg: {
      height: "200px"
    },

    presentation: {
      display: "flex",
      width: "20%",
      margin: "auto",
      // minHeight: "40vh",
      alignItems: "center",
    
    },

    introduction: {
      flex: 1,
      paddingLeft: 20,
      height: "140px",
    },

    safeFood: {
      fontSize: 22,
      fontWeight: 200,
    },
    delivery: {
      color: "#12278c",
      fontSize: 22,
      fontWeight: "bold",
      marginTop: -10,
      marginBottom: 20,
    },
    paragraph: {
      width: 300,
      fontSize: 14.5,
    },
    // cover: {
    //   flex: 1,
    //   display: "flex",
    //   justifyContent: "center",
    //   height: "52vh",
    // },
    cover: {
      display: "column",
      justifyContent: "center",
      height: "22vh",
    }
  },
  
}));

const HomeStart = () => {
  const classes = useStyles();
  return (
    <section className={classes.presentation}>
      
      <div className={classes.introduction}>
        <Typography className={classes.safeFood} noWrap>
          Safe Food
        </Typography>
        <Typography className={classes.delivery} noWrap>
          DELIVERY
        </Typography>
        <Typography variant="body2" className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.
        </Typography>
        <Button variant="outlined" className={classes.ctaOrder}>
          ORDER NOW
        </Button>
      </div>
      <div className={classes.cover}>
        <img src={cover} alt="safe-delivery" className={classes.coverImg} />
      </div>
      
    </section>
  );
};

export default React.memo(HomeStart);
