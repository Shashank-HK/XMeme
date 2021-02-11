import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Grid,AppBar,Divider} from '@material-ui/core';
import { Helmet } from 'react-helmet'

import Posts from './components/Posts/Posts.js';
import MemeForm from './components/Form/Form.js';
import useStyles from './styles';
const App = () => {
  const classes = useStyles();
  return(
    <Container className={classes.root} maxwidth="lg">
      <Helmet><title>XMeme</title></Helmet>
      <AppBar className={classes.appBar} position="static" color="inherit">
      <h1 className={classes.heading} align="center">
          XMeme
      </h1>
      </AppBar>
      
      <Grid className={classes.grid} container justify="space-between" alignItems="stretch" spacing={3}>
      <Grid className={classes.formgrid} item xs={12} sm={4}>
      <MemeForm />
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid className={classes.memegrid} item xs={12} sm={7}>
      <Posts />
      </Grid>
      </Grid>
    </Container>
  );
}
export default App;
