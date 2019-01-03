import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from "@material-ui/core/FormHelperText";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from "@material-ui/core/IconButton";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class InputField extends React.Component {

    constructor(props) {
    super(props);
        this.state = {
            showPassword: false,
        };
    }


    getIconForInput = (start,type) => {
        if(!type && start)
            return <InputAdornment position="start"><AccountCircle /></InputAdornment>
        else if(type && !start){
            return <InputAdornment position="start">
                <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}>
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        }
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render() {
        const {
            _id,
            displayName,
            type,
            onChange,
            placeholder,
            required, // By default is true, if equals false than ignore
            icon,
            focusInput,
            error,
            defaults,classes } = this.props;
        return (
            <FormControl fullWidth={true} required={required !== false} error={!!error}>
                {defaults.showLabels && <InputLabel>{displayName}</InputLabel>}
                <Input
                    autoFocus={focusInput}
                    placeholder={defaults.showPlaceholders ? placeholder : ''}
                    type={(this.state.showPassword || !type)?null:type}
                    error={Boolean(error)}
                    onChange={(e) => onChange(e, _id)}
                    onBlur={(e) => onChange(e, _id)}
                    startAdornment={this.getIconForInput(true,type)}
                    endAdornment={this.getIconForInput(false,type)}
                /> <br/>
                {error && <FormHelperText color='red' >{error.errStr}</FormHelperText>}
            </FormControl>
        )
    }
}

const iconMapper = {
  username: 'user',
  email: 'mail',
  password: 'lock',
  confirmPassword: 'unlock alternate',
  currentPassword: 'unlock alternate',
  fullName: 'info'
}

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        flexBasis: 200,
    },
});


InputField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputField);
