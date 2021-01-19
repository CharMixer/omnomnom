import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { sizing } from '@material-ui/system';

// Icons
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    list: {
      backgroundColor: "#444"
    },
  }),
);

const Recipes = (props : any) => {
  const classes = useStyles();

  const rp = [
    {header: 'Kødsovs', secondary: 'pasta'},
    {header: 'Nachos', secondary: 'Kylling'},
    {header: 'Test', secondary: 'Test'},
    {header: 'Test', secondary: 'Test'},
    {header: 'Test', secondary: 'Test'},
    {header: 'Test', secondary: 'Test'},
    {header: 'Test', secondary: 'Test'},
  ];

  return (
    <List className={classes.list}>
      {rp.map((r,i) => (
        <>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={r.header}
              secondary={r.secondary}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <LinkIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          {i + 1 != rp.length &&
            <Divider variant="inset" component="li" />
          }
        </>
      ))}
    </List>
  );
}


export { Recipes }
