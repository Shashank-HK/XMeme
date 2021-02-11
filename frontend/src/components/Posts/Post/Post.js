import React from 'react';
import {Card, CardActions, CardContent, CardMedia,Typography, Button} from '@material-ui/core';
import { Overlay,Form} from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import { useState, useRef } from "react";
import useStyles from './styles';
import axios from 'axios';
import {BACKEND_URL} from '../../../url.js';
const Post = ({post}) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const target = useRef(null);

    //const [oldcaption, setc] = useState(post.caption);
    //const [oldurl, setu] = useState(post.url);
    const [newcaption, setCapt] = useState("");
    const [newurl, seturl] = useState("");

    function checkURL(url) {
        return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    const onSubmit = async (e) => {
    let updatedObject= {};
        e.preventDefault()
        if (newurl=="" || checkURL(newurl)){
        if (newcaption!=="" && newurl!==""){
            updatedObject = {
                caption: newcaption,
                url: newurl
            };
        }
        else if (newurl!==""){
            updatedObject = {
                url: newurl
            };
        }
        else if(newcaption!==""){
            updatedObject = {
            caption: newcaption,
            };
        }

        await axios({
            method: 'PATCH',
            url: `${BACKEND_URL}/${post.id}`,
            headers: {
              'Content-Type': 'application/json',
            },
            data: updatedObject
            })
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
            setCapt('');
            seturl('');
        }
        else{
            seturl('');
            alert('Enter valid URL');
        }
    } 


    return(
        <>
        <Card className={classes.card}>
            <CardMedia square image={post.url} 
            alt="No Image"
            className={classes.media}>
            </CardMedia>
            <CardContent className={classes.content}>
            <Typography className={classes.caption} gutterBottom variant="h6" component="h2">
            {post.caption}
            </Typography>
            <Typography className={classes.name} variant="body1" color="secondary" component="p">
            {post.name}
            </Typography>
            <Button ref={target} className={classes.button} onClick={() => setShow(!show)}><EditIcon fontSize="small"/></Button>
            <Overlay target={target.current} show={show} placement="top">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                <div
                    {...props}
                style={{
                backgroundColor: 'rgba(255, 100, 100, 0.9)',
                padding: '2px 10px',
                color: 'white',
                textAlign:'center',
                borderRadius: 3,
                ...props.style,
                }}
                >
                <h5 style={{marginTop:5,}}>Edit Meme</h5>
                <Form onSubmit={onSubmit}>


                <div className="form-group">
                <label for="newcaption"  class="col-4">
                    Caption
                </label>
                <input type="text" id="newcaption" name="caption" value={newcaption} placeholder="Caption for the meme" onChange={(e) => {
                setCapt(e.target.value)}}></input>
                </div>
                <div className="form-group">
                <label for="newurl" class="col-4">
                   URL
                </label>
                <input type="text" id="newurl" name="url" value={newurl} placeholder="URL (.jpg/.png/.gif)" onChange={(e) => {
                seturl(e.target.value)}}></input>
                </div>
                <Button  className={classes.subbutton} variant="contained" type = "submit"  color="primary">Submit</Button>

                </Form>
                </div>
            )}
            </Overlay>
            </CardContent>
        </Card>
        </>
    );
    }

export default Post;