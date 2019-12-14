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
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Agrege Titulo"
                        style={{ marginBottom: 25 }}
                    />
                    <DialogContentText style={{ marginBottom: -15 }}>
                        Descripción
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="name2"
                        label="Agrege Descripción"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => AddTarea({ Titulo: 1, Des: 1 })} color="primary">
                        Publicar
                     </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
