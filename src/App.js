import React, { useEffect, useState } from "react";
import {TextField, Button, Icon } from "@mui/material";
import { Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import "./App.css";


function App() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [userInput, setUserInput] = useState("");
  const[location,setLocation]=useState("");
  const[dateJoined,setDateJoined]=useState("");

  const handleSearch = (e) => {
    setUserInput(e.target.value);
    console.log(setUserInput);
  };

  const handleSubmit = () => {
    let apiUrl = `https://api.github.com/users/${userInput}`;
    fetch(apiUrl)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setData(data);
      })
  }


  useEffect(() => {
    let apiUrl = "https://api.github.com/users/roland-sankara";
    fetch(apiUrl)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error)
      });

  }, []);


  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    bio,
    location,
    created_at,
    updated_at,

  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setBio(bio);
    setLocation(location);
    setDateJoined(created_at);

  };

  return (
    <div >
      <div className="navbar">Find Github User Profile</div>
      <form  className="form" noValidate autoComplete="on">
        <span id="search">
          <TextField size="small" id="name" placeholder="Github User" variant="outlined" onChange={handleSearch} />
        </span>
        <Button typecontent="Search"
          variant="contained" onClick={handleSubmit} >Search</Button>
          </form>
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={avatar}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {userName}
            </Typography>
            <hr />
            <Typography variant="body2" color="text.secondary">
              {name} is a {bio}
              <br/>
              <br/>
              <a href="https://github.com/"><Icon name="user" />{location}</a>
              <a href="https://github.com/"><Icon name="user" />Joined {dateJoined}</a>
            </Typography>
          </CardContent>
          <CardActions>
            <div>
            <span>
              <a href="https://github.com/"><Icon name="user" />{repos} Repos</a>
              <a href="https://github.com/"><Icon name="user" />{followers} Followers</a>
              <a href="https://github.com/"><Icon name="user" />{following} Following</a>
            </span>
            </div>
            
          </CardActions>
        </Card>
      </div>
    </div>

  );

}

export default App;





