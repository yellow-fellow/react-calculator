import React, { Component } from 'react';

class Description extends Component {
    render () {
        return (
            <div align = 'center' style = {{backgroundColor: 'white', border:"3px solid black", borderRadius: 10}}>
                <img  style = {{height:'50px' , width:'50px', marginRight: '10px'}} src = 'https://www.clipartkey.com/mpngs/m/90-904702_little-part-of-the-kawaii-cute-animals-cartoon.png'></img>
                <span style = {{fontSize: '30px'}}><b>Shaohang's Calculator</b></span>
                <img  style = {{height:'50px' , width:'50px', marginLeft: '10px'}} src = 'https://www.citypng.com/public/uploads/preview/sleeping-fox-cartoon-cute-animal-11582137433wmsqspfc9b.png'></img>
            </div>
        );
    };
}

export default Description;