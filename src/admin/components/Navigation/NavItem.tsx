import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import {
  Button,
  ListItem,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%'
  },
  icon: {
    marginRight: '10px'
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    '& $title': {
      fontWeight: 'bold'
    },
    '& $icon': {
    }
  }
}));

const NavItem = ({
  href,
  icon: Icon,
  title,
  ...rest
}: any) => {
  const classes = useStyles();

  return (
    <ListItem
      disableGutters
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={href}
      >
        {Icon && (
          <Icon
            className={classes.icon}
            size="20"
          />
        )}
        <span className={classes.title}>
          {title}
        </span>
      </Button>
    </ListItem>
  );
};

export default NavItem;