import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';

const Feed = ({ articles }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {articles.map((article) => (
        <Card sx={{ minWidth: 275, mb: 3 }} key={article.id}>
          <CardContent>
            <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Link
                to={`profiles/${article.author.username}`}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <img
                  src={article.author.image}
                  alt=""
                  style={{ width: '2rem', borderRadius: '50%' }}
                />
              </Link>
              <Link
                to={`profiles/${article.author.username}`}
                style={{ color: '#000', textDecoration: 'none' }}
              >
                <Typography>{article.author.username}</Typography>
              </Link>
            </Box>
            <Typography variant="caption">{article.createdAt}</Typography>
            <Typography variant="h5">{article.title}</Typography>
            <Typography variant="p" style={{ color: '#777' }}>
              {article.description}
            </Typography>
          </CardContent>
          <CardActions
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Link to={`articles/${article.slug}`}>
              <Button size="small">Learn More</Button>
            </Link>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              {article.tagList.map((tag, index) => (
                <Paper
                  elevation={0}
                  variant="outlined"
                  xs={{ padding: '1rem' }}
                  key={index}
                >
                  {tag}
                </Paper>
              ))}
            </Box>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Feed;
