import { Typography, Button, TextField, Grid, Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";

export const Textarea = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);

  const getMessage = (event) => {
    event.persist(); //like event.default()
    const currentInput = event.target.value;
    setInput(currentInput);
  };

  const keepOldMessage = () => {
    setMessage([...mensaje, input]);
  };

  useEffect(() => {
    let letters = input.length;
    if (letters <= 100) {
      document.title = `You have ${100 - letters} letters to use.`;
    }
    if (letters >= 100) {
      alert("No more writting !");
    }
  }, [input]);

  return (
    <Grid>
      {/* title */}
      <Typography variant="h2">Just let it flow</Typography>
      {/* input */}
      <Grid item xs={12}>
        <TextField
          onChange={getMessage}
          fullWidth
          color="secondary"
          maxRows={100}
          focused
          placeholder="Type in"
          multiline
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          disabled={input.length === 0 || input.length > 100}
          onClick={keepOldMessage}
          variant="contained"
        >
          Submit
        </Button>
      </Grid>
      {/* //messages */}
      <Grid item={12}>
        {message == "" ? (
          <Typography variant="h3">No messages 🙁</Typography>
        ) : (
          <Box>
            {message.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </Box>
        )}
      </Grid>
    </Grid>
  );
};
