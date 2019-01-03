import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const styles1 = theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
});

function MySnackbarContent(props) {
    const { classes, className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];
    return (
        <SnackbarContent
            className={classNames(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={<span id="client-snackbar" className={classes.message}>

          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
            }
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={onClose}
                >
                    <CloseIcon className={classes.icon}  />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

MySnackbarContent.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});

class Errors extends React.Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        //state = {
          //  open: true,
        //};
        if(props.errors.length > 0) this.state = { open: true}; // this.setState({ open: true });
    }

    handleClose = (event, reason) => {
        //if (reason === 'clickaway') {
           // return;
        //}
        this.setState({ open: false});
    };

    componentDidUpdate(){
        if(this.props.errors.length > 0) this.state = { open: true};
    }

    render() {
            const {classes, errors} = this.props;

            return (
                <Snackbar
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                >
                    <MySnackbarContentWrapper
                        onClose={this.handleClose}
                        variant="warning"
                        message={errors.map((err, i) => (<b key={i}>{err.errStr}<br/></b>))}
                    />
                </Snackbar>
            )
        }
}

//                (errors.length > 0)?<MySnackbarContentWrapper
//                     variant="warning"
//                     onClose={this.handleClose}
//                     className={classes.margin}
//                     message={errors.map((err, i) => (<b key={i}>{err.errStr}<br/></b>))}
//                 />:''

//TODO 1. The old Errors component was only displayed when errors exist - how this is done in a snackbar?
//TODO 2. How tho close the snackbard when hitting the X
// //   https://material-ui.com/api/snackbar
//<Message
//    warning
//    visible={errors.length > 0} //TODO see here: errors.length >0!
//    content={errors.map((err, i) => (<b key={i}>{err.errStr}<br /></b>))}
///>
//Errors.propTypes = {
//    classes: PropTypes.object.isRequired,
//};

Errors.propTypes = {
  errors: PropTypes.array.isRequired
}

export default withStyles(styles2)(Errors);
//export default Errors
