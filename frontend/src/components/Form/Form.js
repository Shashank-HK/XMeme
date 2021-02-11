import React from 'react';
import { Container } from '@material-ui/core';
import { Button,Form } from 'react-bootstrap';
import useStyles from './styles';
import { useState, useEffect } from "react";
import axios from 'axios';
import {BACKEND_URL} from '../../url.js';

const MemeForm = () => {
    const [name, setName] = useState("");
    const [caption, setCaption] = useState("");
    const [url, setUrl] = useState("");
    const classes = useStyles();

    function checkURL(url) {
        return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        if (checkURL(url)){

        const userObject = {
            name: name,
            caption: caption,
            url: url
        };

        await axios({
            method: 'POST',
            url: BACKEND_URL,
            headers: {
              'Content-Type': 'application/json',
            },
            data: userObject
            })
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
            setName('');
            setCaption('');
            setUrl('');
        }
        else{
            setUrl('');
            alert('Enter valid URL');
        }
    } 

    

    return(
    <>
    <Container className={classes.formcontainer} maxWidth="lg">
        <h2 className={classes.head}> Post your Meme!! </h2>
        <h5 className={classes.subhead}> Feel free to post your memes here! </h5>
        <Form className={classes.memeform} onSubmit={onSubmit}>
            <div className="form-group">
            <label for="uname"  class="col-5">
                Name
            </label>
            <input type="text" id="uname" name="name" placeholder="Enter your name" value={name} onChange={(e) => {
            setName(e.target.value)}} required></input>
            </div>
            <div className="form-group">
            <label for="capt" class="col-5">
                Caption
            </label>
            <input type="text" id="capt" name="caption" placeholder="Caption for the meme" value={caption} onChange={(e) => {
            setCaption(e.target.value)}} required></input>
            </div>
            <div className="form-group">
            <label for="img-url" class="col-5">
                Image/Gif URL
            </label>
            <input type="text" id="img-url" name="url" placeholder="Enter URL (.jpg/.png/.gif)" value={url} onChange={(e) => {
            setUrl(e.target.value)}} required></input>
            </div>
            <div className={classes.buttonSubmit}>
            <Button type = "submit"  class="btn btn-primary">Submit</Button>
            </div>
        </Form>
    </Container>
                </>
    )
}

export default MemeForm;