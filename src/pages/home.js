import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Container, Typography} from "@material-ui/core";

import HomeStart from "../components/HomeStart";
import SearchBar from "../components/SearchBar";
import Spinner from "../util/spinner/spinner";
import RestaurantContent from "../components/RestaurantContent";

const useStyles = makeStyles(() => ({
  center: {
    textAlign: "center",
  },
  SearchBar: {
    justifyContent: "center",
    alignContent: "center",
    margin: "30px 0px 20px 80px",
  },

}));

const Home = () => {
  const classes = useStyles();
  const { loading } = useSelector((state) => state.data);
  const {
    account: { role },
    authenticated,
  } = useSelector((state) => state.auth);
  const [locationStatus, setLocationStatus] = useState(
    localStorage.getItem("location") ? true : false
  );

  let restaurantMarkup = loading ? <Spinner /> : <RestaurantContent />;
  return (
    <Grid item lg={12} xs={12}>
      <>
        {authenticated && role === "ROLE_SELLER" ? (
          <Redirect to="/seller/dashboard" />
        ) : (
          <>
            <HomeStart />
            <Container>
              <Grid container direction="column">
                <Grid item xs={12} sm={6} className={classes.center}>
                  <Typography variant="h7" className={classes.center} noWrap>
                    Your favourite food, delivered with EatHub&nbsp;&nbsp;
                    <span style={{ fontSize: 40 }}>🍽</span>
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={classes.SearchBar}
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <SearchBar page="home" action={setLocationStatus} />
                </Grid>
                <Grid item container>
                  <Grid item xs={false} sm={1} />
                  <Grid item xs={12} sm={10}>
                    {locationStatus ? (
                      restaurantMarkup
                    ) : (
                      <Typography
                        variant="body1"
                        className={classes.center}
                        noWrap
                      >
                        Enter your location to view nearby restaurants
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={false} sm={1} />
                </Grid>
              </Grid>
            </Container>
          </>
        )}
      </>
    </Grid>
  );
};

export default Home;
