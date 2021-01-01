import React from 'react';
import {
  Box,
  Button,
} from '@material-ui/core';
import { ToolbarWrapper } from './styles'

interface ToolbarI {
  link: () => void
  title: string
}

const Toolbar = ({ link, title }: ToolbarI) => {
  return (
    <ToolbarWrapper>
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          color="primary"
          variant="contained"
          onClick={link}
        >
          {title}
        </Button>
      </Box>
    </ToolbarWrapper>
  );
};

export default Toolbar
