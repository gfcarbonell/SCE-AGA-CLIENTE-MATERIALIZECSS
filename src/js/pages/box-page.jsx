import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Row, Input, Button, Icon} from 'react-materialize';
//import {bindActionCreators} from 'redux';
import defaultImage from '../../media/images/png/Default-1.png';
import $ from 'jquery';

import "react-select/dist/react-select.css";
import "react-virtualized-select/styles.css";
import Select from "react-virtualized-select";

const mapStateToProps = (state, props) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {

    };
    return actions;
}
// Dummy array of test values.
const options = Array.from(new Array(1000), (_, index) => ({
    label: `Item ${index}`,
    value: index
  }));

class BoxPage extends React.Component {
    componentDidMount(){
        $('.datepicker').pickadate({
            monthsFull: [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ],
            monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
            weekdaysFull: [ 'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado' ],
            weekdaysShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
            today: 'hoy',
            clear: 'borrar',
            close: 'ok',
            firstDay: 1,
            format: 'dd/mm/yyyy',
            selectMonths: true, // Creates a dropdown to control month
            selectYears: true, // Creates a dropdown of 15 years to control year
            formatSubmit: 'yyyy/mm/dd'
        });
        let now = new Date();
        let day = ('0' + now.getDate()).slice(-2);
        let month = ('0' + (now.getMonth() + 1)).slice(-2);
        let year = now.getFullYear();
        let today = `${day}-${month}-${year}` ;
        $('#date').val(today);
    }
    state = {
        selectedOption: '',
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        // selectedOption can be null when the `x` (close) button is clicked
        if (selectedOption) {
          console.log(`Selected: ${selectedOption.label}`);
        }
    }
    render(){
        const { selectedOption } = this.state;
        return (
            <div className='container'>
                <br/>
                <div>
                    <form method='post' ref={this.setForm}  action='#' onSubmit={this.handleSubmit}>
                        <div>
                            <Row>
                                <div className='col s12 l12'>
                                    <h6 className='col s12 l12 center-left uppercase font-weight-bolder'> 
                                        Introducción de embarque:
                                    </h6>
                                </div>
                                <div className='col s12 m4 l4'>
                                    <Input s={12} l={12} label='Operador Logistico'/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                    
                                    </p>
                                </div>
                                
                                <div className='col s12 m4 l4'>
                                    <Input s={12} l={12} label='Ingreso Terminal'/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                    
                                    </p>
                                </div>
                                <div className='col s12 m4 l4'>
                                    <div className='col input-field s12 l12'>
                                        <input 
                                            className='datepicker validate' 
                                            label='Fecha' 
                                            id='date' 
                                            disabled
                                            type='date'/>
                                        <label htmlFor='date'>Fecha</label>
                                    </div>
                                    <p className='error col s12 m12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                    </p>
                                </div>
                                <div className='col s12 l12'>
                                    <Input s={12} l={12} label='Contacto'/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div className='col s12 l6'>
                                    <Input s={12} l={12} label='Naviera'/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                    
                                    </p>
                                </div>
                                <div className='col s12 l6'>
                                    <Input s={12} l={12} label='Booking N°'/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div className='row'>
                                    <div className='col s12 m6 l6'> 
                                        <div className='col s12 l12'>
                                            <h6 className='col s12 l12 center-left uppercase font-weight-bolder'> 
                                                Datos del Embarcador:
                                            </h6>
                                        </div>
                                        <div className='col s12 l12'>
                                            <Select className='input-field col s12 l12' options={options} />
                                            <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                            
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col s12 m6 l6">
                                        <div className='col s12 l12'>
                                            <h6 className='col s12 l12 center-left uppercase font-weight-bolder'> 
                                                Datos del Broker/Cliente:
                                            </h6>
                                        </div>
                                        <div className='col s12 l12'>
                                            <Input s={12} l={12} label='Nombre'/>
                                            <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div className='row'>
                                    <div className='col s12 m6 l6'> 
                                        <div className='col s12 l12'>
                                            <h6 className='col s12 l12 center-left uppercase font-weight-bolder'> 
                                                Datos del consignatario:
                                            </h6>
                                        </div>
                                        <div className='col s12 l12'>
                                            <Input s={12} l={12} label='Nombre'/>
                                            <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                            
                                            </p>
                                        </div>
                                        <div className='col s12 l12'>
                                            <Input s={12} l={12} label='Dirección'/>
                                            <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                            </p>
                                        </div>
                                        <div className='col s6 m6 l6'>
                                            <Input s={12} l={12} label='Teléfono'/>
                                            <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                            
                                            </p>
                                        </div>
                                        <div className='col s6 m6 l6'>
                                            <Input s={12} l={12} label='Fax'/>
                                            <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                            </p>
                                        </div>
                                        <div className='col s12 l12'>
                                            <Input s={12} l={12} label='Correo electrónico'/>
                                            <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                            </p>
                                        </div>
                                    </div>
                                    <div className="col s12 m6 l6">
                                        <div className='col s12 l12'>
                                            <h6 className='col s12 l12 center-left uppercase font-weight-bolder'> 
                                                Datos del notificante:
                                            </h6>
                                        </div>
                                        <div className='col s12 l12'>
                                            <Input s={12} l={12} label='Nombre'/>
                                                <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                                
                                                </p>
                                            </div>
                                        <div className='col s12 l12'>
                                            <Input s={12} l={12} label='Dirección'/>
                                            <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                            </p>
                                        </div>
                                        <div className='col s6 m6 l6'>
                                            <Input s={12} l={12} label='Teléfono'/>
                                            <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                            
                                            </p>
                                        </div>
                                        <div className='col s6 m6 l6'>
                                            <Input s={12} l={12} label='Fax'/>
                                            <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                            </p>
                                        </div>
                                        <div className='col s12 l12'>
                                            <Input s={12} l={12} label='Correo electrónico'/>
                                            <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
   
                    </form>    
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxPage);