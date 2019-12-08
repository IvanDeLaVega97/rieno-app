import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer style={{backgroundColor:"black", height: 100}}>
                <div style={{backgroundColor:"black", height: "100%"}}>
                    <p style={{textAlign: "center", color:"white", font: "100%"}}> Copyright 2019</p>
                </div>
            </footer>
        );
    }
}

export default Footer;