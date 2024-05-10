import React from 'react';
import { Container, Typography, Button, Grid, Paper, Card, CardContent, CardActions, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import ListIcon from '@mui/icons-material/List';
import SecurityIcon from '@mui/icons-material/Security';

const HomePage = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      {/* Hero Image Section */}
      <Grid container spacing={0} justifyContent="center" alignItems="center" style={{ position: 'relative', height: '80vh', marginBottom: '40px' }}>
        <img
          src="antiplaghome.webp"
          alt="Plagiarism detection illustration"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '15px',
            filter: 'brightness(50%)', // Darkens the image
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            width: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <Typography variant="h2" gutterBottom style={{ fontWeight: 'bold', color: '#EDEDED' }}>
            Добро пожаловать на сайт антиплагиата!
          </Typography>
          <Typography variant="h5" paragraph style={{ color: '#FAFAFA' }}>
            Надежный инструмент для проверки оригинальности текста.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/scan"
            style={{ boxShadow: 'none', backgroundColor: '#E98074', color: 'white', marginTop: '20px' }}
          >
            Начать сканирование
          </Button>
        </Box>
      </Grid>

      {/* Key Benefits Section */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card
            style={{
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #ffe3e3, #ffc6c6)',
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.4)',
              overflow: 'hidden',
              color: '#2C3E50',
            }}
          >
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                Быстрая проверка
              </Typography>
              <Typography variant="body1" align="center" paragraph style={{ color: '#34495E' }}>
                Мы обеспечиваем быструю и точную проверку текста на плагиат.
              </Typography>
              <Typography align="center">
                <CheckIcon style={{ color: '#00C853', fontSize: '48px' }} />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                size="medium"
                color="primary"
                component={Link}
                to="/scan"
                variant="outlined"
                style={{ borderRadius: '0px 0px 30px 30px', background: '#ffe3e3', boxShadow: 'none', border: '1px solid #2C3E50' }}
              >
                Узнать больше
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            style={{
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #dce4ff, #adc9ff)',
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.4)',
              overflow: 'hidden',
              color: '#2C3E50',
            }}
          >
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                Подробные отчеты
              </Typography>
              <Typography variant="body1" align="center" paragraph style={{ color: '#34495E' }}>
                Получайте детальные отчеты о найденных совпадениях.
              </Typography>
              <Typography align="center">
                <ListIcon style={{ color: '#2979FF', fontSize: '48px' }} />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                size="medium"
                color="primary"
                component={Link}
                to="/scanned"
                variant="outlined"
                style={{ borderRadius: '0px 0px 30px 30px', background: '#dce4ff', boxShadow: 'none', border: '1px solid #2C3E50' }}
              >
                Узнать больше
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            style={{
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #e3ffd6, #c6ffc4)',
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.4)',
              overflow: 'hidden',
              color: '#2C3E50',
            }}
          >
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                Безопасность данных
              </Typography>
              <Typography variant="body1" align="center" paragraph style={{ color: '#34495E' }}>
                Мы гарантируем конфиденциальность и безопасность ваших данных.
              </Typography>
              <Typography align="center">
                <SecurityIcon style={{ color: '#FF1744', fontSize: '48px' }} />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                size="medium"
                color="primary"
                component={Link}
                to="/signin"
                variant="outlined"
                style={{ borderRadius: '0px 0px 30px 30px', background: '#e3ffd6', boxShadow: 'none', border: '1px solid #2C3E50' }}
              >
                Узнать больше
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Information Section */}
      <Grid container justifyContent="center" style={{ marginTop: '40px' }}>
        <Grid item xs={12} md={8}>
          <Paper
            style={{
              padding: '40px',
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #fff5e3, #ffebc6)',
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.4)',
              color: '#2C3E50',
            }}
          >
            <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
              Как использовать результаты проверки на плагиат?
            </Typography>
            <Typography variant="body1" paragraph style={{ color: '#34495E' }}>
              После завершения проверки на плагиат вы получите подробный отчет о найденных совпадениях. Этот отчет поможет вам:
            </Typography>
            <ul style={{ color: '#34495E' }}>
              <li>Исправить обнаруженные совпадения, чтобы сделать ваш контент уникальным.</li>
              <li>Проверить оригинальность вашего текста перед публикацией, чтобы избежать проблем с авторскими правами.</li>
              <li>Улучшить качество вашего контента, исключив заимствования и плагиат.</li>
            </ul>
            <Typography variant="body1" paragraph style={{ color: '#34495E' }}>
              После исправления найденных совпадений вы сможете быть уверены в том, что ваш контент уникален и соответствует вашим стандартам качества.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
