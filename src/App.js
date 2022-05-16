import React, { useEffect, useState } from "react";
import {Form, TextField, Button, Icon } from "@mui/material";
import { Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import "./App.css";
import { SettingsSystemDaydreamRounded } from "@mui/icons-material";

function App() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const[location,setLocation]=useState("");
  const[dateJoined,setDateJoined]=useState("");
 

  useEffect(() => {
    let apiUrl = "https://api.github.com/users/atwijukirebrendah";
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

  return (
    <div >
      <div className="navbar">Find Github User Profile</div>
      <form type="submit" className="form" noValidate autoComplete="on" onSubmit={handleSubmit}>
        <span id="search">
          <TextField size="small" id="name" placeholder="Github User" variant="outlined" onChange={handleSearch} />
        </span>
        <Button typecontent="Search"
          variant="contained">Search</Button>
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
              <a><Icon name="user" />{location}</a>
              <a><Icon name="user" />Joined {dateJoined}</a>
            </Typography>
          </CardContent>
          <CardActions>
            <div>
            <span>
              <a><Icon name="user" />{repos} Repos</a>
              <a><Icon name="user" />{followers} Followers</a>
              <a><Icon name="user" />{following} Following</a>
            </span>
            </div>
            
           
            
          </CardActions>
        </Card>
      </div>
    </div>

  );

}

export default App;



//end

