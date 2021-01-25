import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { TopBar, NavDrawer, DRAWER_WIDTH } from '../common/NavBar';
import { Home } from '../home';
import { Recipes, Recipe } from '../recipes';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App(props : any) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <TopBar handleDrawerToggle={handleDrawerToggle} />
        <BrowserRouter>
          <NavDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
          <main className={classes.content}>
            <div className={classes.toolbar} />

            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/recipes"><Recipes /></Route>
              <Route exact path="/recipes/show"><Recipe /></Route>
            </Switch>

          </main>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export { App, DRAWER_WIDTH };
