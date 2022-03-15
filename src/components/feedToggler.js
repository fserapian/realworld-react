import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

const LinkTab = (props) => {
  const navigate = useNavigate();
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        navigate(props.href);
      }}
      {...props}
    />
  );
}

const FeedToggler = ({ tagName }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Your Feed" href="/feed" />
        <LinkTab label="Global Feed" href="/" />
        {tagName && (
            <LinkTab label={`#${tagName}`} href={`/tags/${tagName}`} />
        )}
      </Tabs>
    </Box>
  );
}

export default FeedToggler;
