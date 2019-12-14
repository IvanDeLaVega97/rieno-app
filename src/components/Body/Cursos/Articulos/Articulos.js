import React from 'react';
import {MenuItem, Typography} from '@material-ui/core';
import { Link } from '@material-ui/core'

const Articulo = ({ Nombre, URL }) => (
    <Link href={URL}>
        <MenuItem style={{ textAlign: "left", color: "white", overflow:"hidden", textOverflow: "ellipsis"}}>
        <Typography variant="subtitle1" gutterBottom>{Nombre}</Typography>
    </MenuItem>
    </Link>
);

export default Articulo;

