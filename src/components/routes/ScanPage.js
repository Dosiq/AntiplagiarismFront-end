import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography, Paper } from '@mui/material';

export default function MultilineTextFields() {
  const [text, setText] = React.useState('');
  const [charCount, setCharCount] = React.useState(0);
  const [wordCount, setWordCount] = React.useState(0);
  const [spaceCount, setSpaceCount] = React.useState(0);
  const [charWithSpaceCount, setCharWithSpaceCount] = React.useState(0);
  const token = localStorage.getItem('token');

  const analyzeText = (inputText) => {
    const charCount = inputText.length;
    const words = inputText.trim().split(/\s+/);
    const wordCount = words.length;
    const spaces = inputText.match(/\s/g) || [];
    const spaceCount = spaces.length;
    const charWithSpaceCount = inputText.replace(/\s/g, "").length;

    setCharCount(charCount);
    setWordCount(wordCount);
    setSpaceCount(spaceCount);
    setCharWithSpaceCount(charWithSpaceCount);
  };

  const handleChange = (e) => {
    setText(e.target.value);
    analyzeText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(text)
    })
      .then(() => {
        console.log("posted");
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '20px',
      }}
    >
      <Box sx={{ width: '50%', marginRight: '20px' }}>
        <TextField
          id="outlined-multiline-static"
          label="Enter your text"
          multiline
          rows={25}
          value={text}
          onChange={handleChange}
          style={{ background: "white", width: '100%' }}
        />
        <Button variant="contained" onClick={handleClick} style={{ marginTop: '10px', backgroundColor: '#E98074' }}>Scan</Button>
      </Box>
      <div style={{ width: '25%'}}>
        <Paper sx={{ margin: '10px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', border: '1px solid #ccc' }}>
          <Typography variant="h6" gutterBottom>Analysis:</Typography>
          <Typography gutterBottom>Characters: {charCount}</Typography>
          <Typography gutterBottom>Words: {wordCount}</Typography>
          <Typography gutterBottom>Spaces: {spaceCount}</Typography>
          <Typography gutterBottom>Characters with Space: {charWithSpaceCount}</Typography>
        </Paper>
        
        <Paper sx={{ margin: '10px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', border: '1px solid #ccc' }}>
          <Typography variant="h6" gutterBottom>Status:</Typography>
          <Typography gutterBottom>Your reply has been sent: {}</Typography>
          <Typography gutterBottom>Your reply has been accepted: {}</Typography>
          <Typography gutterBottom>Your reply has been processed: {}</Typography>
          <Typography gutterBottom>Your reply has been received: {}</Typography>
        </Paper>

      </div>

    </Box>
  );
}
