import React from 'react';
import Post from './Post/Post.js';
import { useState, useEffect } from "react";
import axios from 'axios';
import useStyles from './styles';
import { Grid } from '@material-ui/core';

import {BACKEND_URL} from '../../url.js';

const Posts = () => {
    const [posts, setPosts] = useState([])
    const classes = useStyles();

    useEffect(() => {
         const interval = setInterval( () => {
            axios
            .get(BACKEND_URL)
            .then((response) => response.data)
            .then((memesData) => {
                console.log(memesData);
                setPosts(memesData);
            })
          .catch((error) => console.log(error));
        },1000);
        return () => clearInterval(interval);
      }, []);

    return(
        <>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post}/>
                    </Grid>
                ))}
            </Grid>
        </>
    );
    }
    
export default Posts;