import React, {Component} from 'react';
import axios from 'axios'

class Results extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
          <li>{this.props.info}</li>
        )
    }
}

export default Results;
