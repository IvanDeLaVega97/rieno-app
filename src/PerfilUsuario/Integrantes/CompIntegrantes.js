import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

class CompIntegrantes extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.Email = props.Email;
        this.Apellidos = props.Apellidos;
        this.Contraseña = props.Contraseña;
        this.Doctorado = props.Doctorado;
        this.Institucion = props.Institucion;
        this.Licenciatura = props.Licenciatura;
        this.LineaInvestigacion = props.LineaInvestigacion;
        this.LineaGeneracion = props.LineaGeneracion;
        this.Nombre = props.Nombre;
        this.Pais = props.Pais;
        this.Telefono = props.Telefono;
        this.cuerpoacademico = props.cuerpoacademico;
    }
    
    render() {
        return (
            <div>
                <ExpansionPanel style={{backgroundColor:"white", border: "black 1px solid", borderBottomRightRadius: "20px", borderBottomLeftRadius:"20px"}}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              
              <Typography className={useStyles.heading}>{this.Email}</Typography>
              <Checkbox />
            </ExpansionPanelSummary>
            <Divider/>
            <ExpansionPanelDetails>
                <div>
            <ExpansionPanelDetails>
              <Typography >Apellidos: 
                {this.Apellidos}
                <br/>
                <Divider/>
              </Typography>
              </ExpansionPanelDetails>
              </div>
            
              <ExpansionPanelDetails>
              <Typography >Contraseña: 
              {this.Contraseña}
                <br/>
                <Divider/>
              </Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
              <Typography> Doctorado: 
              {this.Doctorado}
                <br/>
                <Divider/>
              </Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
              <Typography> Institucion: 
              {this.Institucion}
                <br/>
                <Divider/>
              </Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
              <Typography> Licenciatura: 
              {this.Licenciatura}
                <br/>
                <Divider/>
              </Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
              <Typography> Linea de Investigacion: 
              {this.LineaInvestigacion}
                <br/>
                <Divider/>
              </Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
              <Typography>Linea de Generacion:
              {this.LineaGeneracion}
                <br/>
                <Divider/>
              </Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
              <Typography>Pais: 
              {this.Pais}
                <br/>
                <Divider/>
              </Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
              <Typography>Telefono: 
              {this.Telefono}
                <br/>
                <Divider/>
              </Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
              <Typography>cuerpo academico:
              {this.cuerpoacademico}
                <br/>
                <Divider/>
              </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanelDetails>
          </ExpansionPanel>
                <Divider />
            </div>
        );
    }
}

export default CompIntegrantes;