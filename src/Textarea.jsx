import {
  Typography,
  Button,
  TextField,
  Box,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
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
    setMessage([...message, input]);
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
    <>
      {/* input */}
      <Card
        sx={{ minWidth: 375, backgroundColor: "#bdc3c7" }}
        variant="outlined"
      >
        <CardContent>
          <Typography variant="h4">Just let it flow</Typography>
          <TextField
            onChange={getMessage}
            fullWidth
            color="primary"
            maxRows={100}
            focused
            placeholder="Type in"
            multiline
            variant="outlined"
          />
        </CardContent>
        <CardActions>
          <Button
            disabled={input.length === 0 || input.length > 100}
            onClick={keepOldMessage}
            variant="contained"
            size="small"
            color="primary"
          >
            Submit
          </Button>
        </CardActions>
      </Card>
      {/* message */}
      <Card
        sx={{ marginTop: 5, padding: 5, backgroundColor: "#bdc3c7" }}
        variant="outlined"
      >
        {message == "" ? (
          <Typography variant="h6">No messages 🙁</Typography>
        ) : (
          <Box sx={{ marginBottom: 10, textAlign: "left" }}>
            {message.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </Box>
        )}
      </Card>
    </>
  );
};
