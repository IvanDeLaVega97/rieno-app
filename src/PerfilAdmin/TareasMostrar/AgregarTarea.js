import React, { Component } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, makeStyles, Input } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import firebase from 'firebase';


export default function FormDialog({ Titulo1, Des1 }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
 
    const AddTarea = ( ) => {
        debugger;
        const db = firebase.database().ref('Cursos/EXPERTO EN RIESGO POR LEVANTAMIENTO MANUAL DE CARGAS/Tareas/');

        db.child(document.getElementById("name").value).set(document.getElementById("outlined-multiline-static").value);
    }

    const useStyles = makeStyles(theme => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
            flexGrow: 1,
        },
    }));

    return (
        <div>
            <Fab variant="outlined" color="primary" onClick={handleClickOpen}>
                <AddIcon className={useStyles.extendedIcon} />
                Añadir Publicación
                </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Nueva Publicación</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ width: 550, marginBottom: -15 }}>
                        Titulo
                    </DialogContentText>
                    <TextField
                        onChange={console}
                        autoFocus
                        margin="dense"
                        id="name"
                        style={{ width: 550, marginBottom: 25 }}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Descripción"
                        multiline
                        rows="4"
                        variant="outlined"
                        style={{ width: 550}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={()=>AddTarea()} color="primary">
                        Publicar
                     </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
