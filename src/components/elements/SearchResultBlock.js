import React from 'react';
import { Card, CardContent, Typography, Link, Divider } from '@mui/material';

const SearchResultBlock = ({ data }) => {
  return (
    <Card sx={{ marginBottom: '20px', maxWidth: 500 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <Link href={data.url} target="_blank" rel="noopener noreferrer" color="primary" underline="none">
            {data.title}
          </Link>
        </Typography>
        <Typography variant="body1" gutterBottom>
          {data.url}
        </Typography>
        <Divider />
        <div style={{ marginTop: '10px' }}>
          <Typography variant="body2" color="textSecondary">
            <strong>Matched words:</strong> {data.matchedWords}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Identical words:</strong> {data.identicalWords}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Similar words:</strong> {data.similarWords}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Paraphrased words:</strong> {data.paraphrasedWords}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Total words:</strong> {data.totalWords}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchResultBlock;
