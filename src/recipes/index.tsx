import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';
import { Divider, Avatar, Typography, IconButton } from '@material-ui/core'
import { List, ListItem, ListItemText, ListItemAvatar, ListItemSecondaryAction } from '@material-ui/core'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Paper, Grid } from '@material-ui/core';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    table: {
    },
  }),
);

const Recipes = (props : any) => {
  const classes = useStyles();

  const rp = [
    {header: 'Kødsovs', secondary: 'pasta'},
    {header: 'Nachos', secondary: 'Kylling'},
    {header: 'Test', secondary: 'Test'},
  ];

  return (
    <List component={Paper}>
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

const Recipe = (props : any) => {
  const classes = useStyles();

  function extendIngredientWithStats(ingredient : any) {
    return {
      calories: Math.round(ingredient.amount * 10),
      fat: Math.round(ingredient.amount * 2),
      carbs: Math.round(ingredient.amount * 3),
      protein: Math.round(ingredient.amount * 4),
      ...ingredient,
    }
  }

  const rp = [
    extendIngredientWithStats({ingredient: 'Kylling', amount: 0.4, unit: 'kg'}),
    extendIngredientWithStats({ingredient: 'Nachos', amount: 200, unit: 'g'}),
    extendIngredientWithStats({ingredient: 'Cheddar', amount: 100, unit: 'g'}),
    extendIngredientWithStats({ingredient: 'Salsa', amount: 1, unit: 'dl'}),
  ];

  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }

  return (
    <>
      <Typography variant="h4" component="h1">
        Nachos med kylling og cheddar
      </Typography>

      <br />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ingredient</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Calories</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rp.map((row,i) => (
              <TableRow key={row.ingredient}>
                <TableCell component="th" scope="row">
                  {row.ingredient}
                </TableCell>
                <TableCell align="right">{row.amount} {row.unit}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br />

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="1. I acknowledge that I should stop the click event propagation"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            The click event of the nested action will propagate up and expand the accordion unless
            you explicitly stop it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="2. I acknowledge that I should stop the focus event propagation"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            The focus event of the nested action will propagate up and also focus the accordion
            unless you explicitly stop it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="3. I acknowledge that I should provide an aria-label on each action that I add"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            If you forget to put an aria-label on the nested action, the label of the action will
            also be included in the label of the parent button that controls the accordion
            expansion.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}


export { Recipes, Recipe }
