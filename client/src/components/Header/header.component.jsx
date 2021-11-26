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
                    <Typography variant="h6" className={classes.title}>JustApp App</Typography>

                    {
                        props.auth.isAuthenticated ?
                            <React.Fragment>
                                <span>{name} : {email}</span>
                                <Link to='/add-case'>NEW</Link>
                                <Link to='/cases'>Cases</Link>
                                <button onClick={onLogoutClick}>התנתקות</button>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Link to='/home'>דף הבית</Link>
                                <Link to='/add-case'>פתיחת תיק</Link>
                                <Link to='/register/2' color="inherit">רישום עו"ד</Link>
                                <Link to='/register/1' color="inherit"> רישום ארגון</Link>
                                <Link to='/login' color="inherit">התחברות</Link>
                            </React.Fragment>

                    }
                    <Avatar alt="avatar" src="https://scontent.ftlv2-1.fna.fbcdn.net/v/t39.30808-6/245276368_110396481421457_1225751662780345070_n.png?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qCzW54oG3YMAX_vJO3o&_nc_ht=scontent.ftlv2-1.fna&oh=dd1bf278ae9a0f69567938f6cf618c22&oe=61A66B7F" className={classes.large} />
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default withRouter(connect(mapStateToProps, { logoutUser })(HeaderComponent))