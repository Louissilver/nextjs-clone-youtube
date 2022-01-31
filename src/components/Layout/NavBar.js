import { makeStyles } from '@mui/styles';
import {
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Subscriptions from '@mui/icons-material/Subscriptions';
import Whatshot from '@mui/icons-material/Whatshot';

import VideoLibrary from '@mui/icons-material/VideoLibrary';
import History from '@mui/icons-material/History';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 64px)',
    borderRight: 'none',
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3),
  },
  listItemText: {
    fontSize: 14,
  },
}));

const primaryMenu = [
  { id: 1, label: 'Início', path: '/', icon: HomeIcon },
  { id: 2, label: 'Em alta', path: '/trendding', icon: Whatshot },
  {
    id: 3,
    label: 'Inscrições',
    path: 'subscriptions',
    icon: Subscriptions,
  },
];

const secondaryManu = [
  { id: 1, label: 'Biblioteca', icon: VideoLibrary },
  { id: 2, label: 'Histórico', icon: History },
];

function NavBar() {
  const classes = useStyles();
  const router = useRouter();

  const isSelected = (item) => router.pathname === item.path;

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {secondaryManu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Box mx={4} my={2}>
        <Typography variant="body2">
          Faça login para curtir vídeos, comentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Fazer login
          </Button>
        </Box>
      </Box>
    </Box>
  );
  return (
    <Hidden mdDown>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  );
}

export default NavBar;
