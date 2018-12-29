import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const Title = ({ text }) => {
  return (
      <Typography variant="h5" gutterBottom>{text}</Typography>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
