import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      style={{ marginTop: "2rem" }}
    >
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <br></br>
        <TextField
          id="standard-multiline-flexible"
          label="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <br></br>
        <TextField
          style={{ width: "300px" }}
          id="standard-multiline-static"
          label="Short Message"
          name="message"
          multiline
          rows={4}
          value={state.message}
          onChange={handleChange}
        />
      </div>
      <br></br>
      <Button />
    </form>
  );
}
