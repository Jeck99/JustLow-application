import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from 'react-router';
import { logoutUser } from "../../redux/actions/authActions";
const mapStateToProps = state => ({
    auth: state.auth
});
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}));
function HeaderComponent(props) {
    const classes = useStyles();

    const onLogoutClick = e => {
        e.preventDefault();
        props.logoutUser(props.history);
        window.location.href = "/";
    };
    const { name, email } = props.auth.user;
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.root}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Cases App</Typography>

                    {
                        props.auth.isAuthenticated ?
                            <React.Fragment>
                                <span>{name} : {email}</span>
                                <Link to='/add-case'>NEW</Link>
                                <Link to='/cases'>Cases</Link>
                                <button onClick={onLogoutClick}>Log Out</button>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Link to='/home'>Home</Link>
                                <Link to='/register/2' color="inherit">register lawer</Link>
                                <Link to='/register/1' color="inherit">register organiztion</Link>
                                <Link to='/' color="inherit">Login</Link>
                            </React.Fragment>

                    }
                    <Avatar alt="avatar" src="pictures/1046436.jpg" className={classes.large} />
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default withRouter(connect(mapStateToProps, { logoutUser })(HeaderComponent))