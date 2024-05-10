import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SearchResultBlock from '../elements/SearchResultBlock';
import { useLocation } from 'react-router-dom';

export default function ScannedDocumentPage() {

  const getBorderColor = () => {
    if (state && state.some) {
      const aggregatedScore = state.some.results.score.aggregatedScore;
      console.log(aggregatedScore + "aggregatedScore3");
      if (aggregatedScore >= 60) {
        return '#FF0000'; // Красный цвет для Aggregated Score от 60 до 100
      } else if (aggregatedScore >= 40) {
        return '#FFFF00'; // Желтый цвет для Aggregated Score от 40 до 60
      } else {
        return '#00FF00'; // Зеленый цвет для Aggregated Score меньше 40
      }
    }
    return '#000000'; // Возвращаем черный цвет по умолчанию, если Aggregated Score отсутствует
  };
  
  // Функция для вычисления процента уникальности текста
  const calculateUniqueness = () => {
    if (state && state.some) {
      const aggregatedScore = state.some.results.score.aggregatedScore;
      return 100 - aggregatedScore; // Уникальность = 100 - Aggregated Score
    }
    return 0; // Возвращаем 0, если Aggregated Score отсутствует
  };

  // Get state from location
  const { state } = useLocation();

  // Initialize state variables
  const [text, setText] = useState('');
  const [chartData, setChartData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Update state variables if state exists
    if (state) {
      setText(state.some?.text?.text || ''); // Null check for nested properties
      setChartData([
        { id: 0, value: state.some.results.score.identicalWords, label: 'Identical Words' },
        { id: 1, value: state.some.results.score.minorChangedWords, label: 'Minor Changed Words' },
        { id: 2, value: state.some.results.score.relatedMeaningWords, label: 'Related Meaning Words' },
        { id: 3, value: state.some.results.score.aggregatedScore, label: 'Aggregated Score' },
      ]);
      setSearchResults(state.some.results.internet || []);
    }
  }, [state]); // Watch for changes in 'state'

  // Calculate total words, spaces, and characters
  const totalWords = text.trim().split(/\s+/).length;
  const totalSpaces = text.trim().split(/\S/).length - 1;
  const totalCharacters = text.trim().length;

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
              label="Your text"
              multiline
              rows={31}
              value={text}
              style={{ background: "white" }}
              readOnly
            />
          </div>
        </div>

        <div style={{ margin: "8px" }}>
          <Card variant="outlined" style={{ borderTop: `4px solid ${getBorderColor()}` }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ color: '#E98074' }}>
                Uniqueness: {calculateUniqueness()}%
              </Typography>
              {/* Render your chart here */}
              {/* For example, render a simple text representation of chart data */}
              {chartData.map((dataItem) => (
                <Typography key={dataItem.id} color="textSecondary">
                  {dataItem.label}: {dataItem.value}
                </Typography>
              ))}
            </CardContent>
          </Card>

          <Card variant="outlined" style={{ marginTop: '20px', borderTop: `4px solid ${getBorderColor()}` }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ color: '#E98074' }}>
                SEO text analysis
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Total words: {totalWords}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Total spaces: {totalSpaces}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Total characters: {totalCharacters}
              </Typography>
            </CardContent>
          </Card>
          <div style={{ maxHeight: '450px', overflowY: 'auto', marginTop: '8px', border: '1px solid #ccc' }}>
            {searchResults.map((result, index) => (
              <SearchResultBlock key={index} data={result} />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
}

