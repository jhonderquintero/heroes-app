import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { DrawerList } from './DrawerList';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

export default function TemporaryDrawer() {
const useStyles = makeStyles({
    list: {
    width: 250,
    },
    fullList: {
    width: 'auto',
    },
});

const classes = useStyles();
const [state, setState] = React.useState({
    right: false,
});

const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
    }

    setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
    <div
    className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
    })}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
    >
    <DrawerList />
    </div>
);

return (
    <div>
    {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} variant='contained' color='primary'>
                <MenuOpenIcon />
            </Button>

            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
            </Drawer>
        </React.Fragment>
    ))}
    </div>
);
}