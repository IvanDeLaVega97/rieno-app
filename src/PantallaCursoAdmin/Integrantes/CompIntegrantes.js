import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

class CompIntegrantes extends Component {
    constructor(props) {
        super(props);
        this.Inscrito = props.Inscrito;
    }
    render() {
        return (
            <div>
                <ListItem button>
                    <ListItemText primary={this.Inscrito} />
                </ListItem>
                <Divider />
            </div>
        );
    }
}

export default CompIntegrantes;