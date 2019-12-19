import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from '@material-ui/core';
import SubirArchivosCursos from './SubirArchivosCursos/SubirArchivosCursos'

class Cursos extends Component {
    constructor(props) {
        super(props);
        this.TareaTitulo = props.TareaTitulo;
        this.TareaDes = props.TareaDes;
    }

    render() {
        const useStyles = makeStyles(theme => ({
            root: {
              width: '100%',
            },
            heading: {
              fontSize: theme.typography.pxToRem(15),
              fontWeight: theme.typography.fontWeightRegular,
            },
          }));

        return (
            <ExpansionPanel style={{backgroundColor:"white", border: "black 1px solid", borderBottomRightRadius: "20px", borderBottomLeftRadius:"20px"}}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={useStyles.heading}>{this.TareaTitulo}</Typography>
            </ExpansionPanelSummary>
            <Divider/>
            <ExpansionPanelDetails>
              <Typography>
                {this.TareaDes}
              </Typography>
              <SubirArchivosCursos/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
    }
}

export default Cursos;