import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import SearchResultBlock from './SearchResultBlock';


export default function MultilineTextFields() {

  const [text, setText] = React.useState('');
  const [chartData, setChartData] = React.useState([
    { id: 0, value: 100, label: 'Identical Words' },
    { id: 1, value: 100, label: 'Minor Changed Words' },
    { id: 2, value: 100, label: 'Related Meaning Words' },
    { id: 3, value: 100, label: 'Aggregated Score' },
  ]);
  const [searchResults, setSearchResults] = React.useState([])

  const handleClick = (e) => {
    e.preventDefault()
    fetch(
      "http://localhost:8080/submit", {
      method: "POST",
      headers: { "Content-Type": "applicaion/json" },
      body: JSON.stringify(text)
    }).then(() => {
      console.log("posted")
    })
    console.log(text)
  }

  const getResult = () => {
    fetch("http://localhost:8080/get")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setChartData(prevChartData => [
          { ...prevChartData[0], value: data.score.identicalWords },
          { ...prevChartData[1], value: data.score.minorChangedWords },
          { ...prevChartData[2], value: data.score.relatedMeaningWords },
          { ...prevChartData[3], value: data.score.aggregatedScore }
        ]);
        setSearchResults(data.internet);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '120ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Enter Your text"
              multiline
              rows={31}
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ background: "white" }}
            />
          </div>
          <Button variant="contained" onClick={handleClick}>Scan</Button>
        </div>

        <div style={{ margin: "8px" }}>
          <div style={{ background: 'white' }}>
            <PieChart
              series={[{
                data: chartData,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              }]}
              width={400}
              height={300}
            />
          </div>
          <div style={{ maxHeight: '450px', overflowY: 'auto', marginTop: '8px' }}>
            {searchResults.map((result, index) => (
              <SearchResultBlock key={index} data={result} />
            ))}
          </div>
          <Button variant="contained" onClick={getResult}>GetResult</Button>
        </div>
      </div>
    </Box>
  );
}
