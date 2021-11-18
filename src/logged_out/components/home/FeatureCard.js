import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  iconWrapper: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.primary,
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    width: "100%",
  },
  portalImg: {
    objectFit: "contain",
    maxWidth: "20%",
    maxHeight: "20%",
  },
  styleCard: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    padding: theme.spacing(3) * 1.5,
  }
});

function FeatureCard(props) {
  const { classes, imageSrc, color, title, description } = props;

  return (
      <Fragment>
        <div className={classes.styleCard}>
          <div className={classes.iconWrapper}>
            <img
              alt={title}
              src={`${process.env.PUBLIC_URL}${imageSrc}`}
              className={classes.portalImg}
            />
          </div>
          <Typography variant="h6" paragraph align="center">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            {description}
          </Typography>
        </div>
      </Fragment>
  );
}

FeatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(FeatureCard);
