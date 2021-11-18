import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CloudIcon from "@material-ui/icons/Cloud";
import MeassageIcon from "@material-ui/icons/Message";
import CancelIcon from "@material-ui/icons/Cancel";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";

const iconSize = 30;

const features = [
  {
    title: "Páginas web",
    description: "Necesitas mostrar tus servicios, trabajos realizados y una manera fácil para puedan contactar, estas en el lugar correcto.",
    imageSrc: '/images/logged_out/sitio-web.png',
    mdDelay: "0",
    smDelay: "0"
  },
  {
    title: "Tiendas Online",
    description: 'Tiendas online de última generación. Aumenta las ventas con tiendas online profesionales construidas para vender.',
    imageSrc: '/images/logged_out/tienda-online.png',
    mdDelay: "200",
    smDelay: "200"
  },
];

function FeatureSection(props) {
  const { width, id } = props;
  return (
    <div id={id} style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" style={{ marginBottom: 20, fontWeight: 700 }}>
          Servicios
        </Typography>
        <Typography variant="h5" align="center" style={{ marginBottom: 50 }}>
          En Brandu nos especializamos en desarrollar páginas web y tiendas online.
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (
              <Grid
                item
                xs={6}
                md={6}
                data-aos="zoom-in-up"
                data-aos-delay={ isWidthUp("md", width) ? element.mdDelay : element.smDelay}
                key={element.title}
              >
                <FeatureCard
                  title={element.title}
                  subtitle={element.subtitle}
                  description={element.description}
                  imageSrc={element.imageSrc}
                  color={element.color}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
