import React from 'react';
import {
  Box,
  Drawer,
  List,
  makeStyles
} from '@material-ui/core';
import FilterIcon from '@material-ui/icons/Filter';
import StorefrontIcon from '@material-ui/icons/Storefront';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import NavItem from './NavItem';

const items = [
  {
    href: '/admin/posts',
    icon: FilterIcon,
    title: 'Posts'
  },
  {
    href: '/admin/products',
    icon: StorefrontIcon,
    title: 'Products'
  },
  {
    href: '/admin/orders',
    icon: MonetizationOnIcon,
    title: 'Orders'
  },
  {
    href: '/admin/themes',
    icon: PlaylistAddIcon,
    title: 'Themes'
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    height: '100%'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = () => {
  const classes = useStyles();

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </>
  );
};

export default NavBar;