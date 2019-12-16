import React, { Component } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, makeStyles, Input } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import firebase from 'firebase';


export default function FormDialog({ Titulo1, Des1 }) {
    
    const [open, setOpen] = React.useState(false);

    const [values, setValues] = React.useState({
        textmask: values,
        numberformat: setValues, 
      });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const AddTarea = ({ Titulo, Des }) => {
        const db = firebase.database().ref('Cursos/EXPERTO EN RIESGO POR LEVANTAMIENTO MANUAL DE CARGAS/Tareas/');
        db.child(Titulo).set(Des);
    }

    const useStyles = makeStyles(theme => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
            flexGrow: 1,
        },
    }));

    const Valores = ({Titlulo1}) =>{
        var Titulo = Titlulo1;
        debugger;
    }
    
    const handleChange = name => event => {
        var dato ;
        debugger;
       /* setValues({
            [name]: event.target.value,
            Valores({event})
            
        });*/
      };

    return (
        <div>
            <Fab variant="outlined" color="primary" onClick={handleClickOpen}>
                <AddIcon className={useStyles.extendedIcon} />
                Añadir Nueva Tarea
                </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Nueva Tarea</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ marginBottom: -15 }}>
                        Titulo
                    </DialogContentText>
                    <TextField
                        value={values.numberformat}
                        onChange={handleChange('text')}
                        autoFocus
                        margin="dense"
                        id="name"
                        style={{ marginBottom: 25 }}
                    />
                    <DialogContentText style={{ marginBottom: -15 }}>
                        Descripción
                    </DialogContentText>
                    <TextField
                        name="popo"
                        margin="dense"
                        id="name2"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleChange} color="primary">
                        Publicar
                     </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
