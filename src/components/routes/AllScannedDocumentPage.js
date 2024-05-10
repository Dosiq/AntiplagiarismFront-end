import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, Divider, ListItemAvatar, Avatar, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import { Link } from 'react-router-dom';

const AllScannedDocumentPage = () => {
  const [jsonResponses, setJsonResponses] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchJsonResponses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getAll', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setJsonResponses(response.data);
      } catch (error) {
        console.error('Error fetching JSON responses:', error);
      }
    };

    fetchJsonResponses();
  }, []);

  const deleteClick = async (id) => {
    const confirmed = window.confirm('Вы уверены, что хотите удалить элемент?');
    if (confirmed) {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        await axios.delete(`http://localhost:8080/delete/${id}`, {
          headers: headers,
        });

        console.log(`Элемент с ID ${id} успешно удален`);
      } catch (error) {
        console.error('Ошибка при удалении элемента:', error);
      }
    }
  };


  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>All scanned documents</Typography>
      <Box sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: 'whitesmoke' }}>
        <List>
          <ListItem >
            <ListItemText primary="Response ID" />
            <ListItemText primary="Creation Time" />
            <ListItemText primary="Status" />
            <ListItemText primary="Actions" />
          </ListItem>
          <Divider />
          {Array.isArray(jsonResponses) && jsonResponses.map(response => (
            <div key={response.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: '#e7e7e7', color: '#777a77' }}>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={response.id} />
                <ListItemText primary={new Date(response.scannedDocument.creationTime).toLocaleString()} />
                <ListItemText primary={response.status} />
                <IconButton edge="end" aria-label="start" sx={{ marginRight: '10px' }}>
                  <Link to="/detail/${response.id}" state={{ some: response }} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <NextPlanIcon style={{ color: 'inherit' }} />
                  </Link>
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <Link style={{ color: 'inherit', textDecoration: 'none' }}>
                    <DeleteIcon onClick={() => deleteClick(response.id)} style={{ color: 'inherit' }} />
                  </Link>
                </IconButton>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default AllScannedDocumentPage;
