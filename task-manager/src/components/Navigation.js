import React from 'react';
import '../StyleSheets/Navigation.css'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CancelIcon from '@material-ui/icons/Cancel';
import HomeIcon from '@material-ui/icons/Home';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { grey, yellow } from '@material-ui/core/colors';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: 500,
    
  },
});

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navigation">
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
    <Link to="/" >  <BottomNavigationAction label="My Tasks" value="My Tasks" icon={<HomeIcon />} /></Link>
    <Link to="Completed" className="link_item">   <BottomNavigationAction label="Completed" value="Completed" icon={<CheckCircleIcon />} /></Link>
    <Link to="Canceled" className="link_item"> <BottomNavigationAction label="Canceled" value="Canceled" icon={<CancelIcon />} /></Link>
    </BottomNavigation>
    </div>
  );
}