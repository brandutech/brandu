import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Box,
  Button,
  IconButton,
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InstagramIcon from "@material-ui/icons/Instagram";
import WaveBorder from "../../../shared/components/WaveBorder";
import transitions from "@material-ui/core/styles/transitions";
import globalStr from "../../../shared/constants/global";

const styles = theme => ({
  footerInner: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      paddingBottom: theme.spacing(10)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(10)
    }
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
    color: theme.palette.common.white
  },
  footerLinks: {
    marginTop: theme.spacing(2.5),
    marginBot: theme.spacing(1.5),
    color: theme.palette.common.white
  },
  infoIcon: {
    color: `${theme.palette.primary.main} !important`,
    backgroundColor: `${theme.palette.secondary.main} !important`,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      fill: theme.palette.common.white
    },
  },
  socialIcon: {
    fill: `${theme.palette.primary.main}`,
    backgroundColor: `${theme.palette.secondary.main}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      fill: theme.palette.common.white
    }
  },
  link: {
    cursor: "Pointer",
    color: theme.palette.common.white,
    transition: transitions.create(["color"], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeIn
    }),
    "&:hover": {
      color: theme.palette.primary.light
    }
  },
  whiteBg: {
    backgroundColor: theme.palette.common.white
  }
});

const infos = [
  {
    icon: <WhatsAppIcon />,
    description: globalStr.CONTACTO.TELEFONO,
    href: `tel: ${globalStr.CONTACTO.TELEFONO}`,
  },
  {
    icon: <MailOutlineIcon />,
    description: globalStr.CONTACTO.CORREO,
    href: `mailto: ${globalStr.CONTACTO.CORREO}`,
  },
  {
    icon: <InstagramIcon />,
    description: globalStr.CONTACTO.INSTAGRAM_NOMBRE,
    href: globalStr.CONTACTO.INSTAGRAM_URL,
  },
];

function Footer(props) {
  const { classes, theme, width } = props;
  return (
    <footer className="lg-p-top">
      <WaveBorder
        upperColor="#FFFFFF"
        lowerColor={theme.palette.primary.main}
        animationNegativeDelay={4}
        parallaxFooter
      />
      <div className={classes.footerInner}>
        <Grid
          container
          spacing={isWidthUp("md", width) ? 10 : 5}
          className="row"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={5}>
            <Typography variant="h6" paragraph className="text-white">
              {globalStr.INFORMACION.NOMBRE_EMPRESA}
            </Typography>
            <Typography style={{ color: "#ddd" }} paragraph>
              {globalStr.INFORMACION.DESCRIPCION_EMPRESA}
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box display="flex" justifyContent="center">
              {infos.map((info, index) => (
                <Box mb={1} key={index} className="row"
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  style={{ marginRight: 60 }}
                >
                  <Box mr={1}>
                    <IconButton
                      aria-label="fingerprint"
                      className={classes.infoIcon}
                      tabIndex={-1}
                      href={info.href}
                    >
                      {info.icon}
                    </IconButton>
                  </Box>
                  <Button size="medium" variant="text" href={info.href} paragraph className="text-white">
                    {info.description}
                  </Button>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles, { withTheme: true })(Footer));
