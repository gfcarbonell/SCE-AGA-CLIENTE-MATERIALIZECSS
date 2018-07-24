import React from 'react';
import {connect} from 'react-redux';
import {Row, Input, Button, Icon} from 'react-materialize';
import {bindActionCreators} from 'redux';
import $ from 'jquery';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

//Actions 
import {getSCEManagers} from '../actions/sce-manager';


const mapStateToProps = (state, props) => {
    return {
        SCEManagerData:state.SCEManagerReducer,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        getSCEManagers:bindActionCreators(getSCEManagers, dispatch)
    };
    return actions;
}



class BoxPage extends React.Component {

    componentWillMount(){
        this.props.getSCEManagers();

    }

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
        celsius: 0
    }

    handleOnChange = (value) => {
        this.setState({
            celsius: value
        })
    }
    render(){
        let { celsius } = this.state
        const horizontalLabels = {
            '-10': 'Bajo',
            '0': 'Medio',
            '10': 'Alto'
        }
        const formatCelsius = value => value + ' C°'
        return (
            <div className='container'>
                
                <br/>
                <div>
                    <form method='post' ref={this.setForm}  action='#' onSubmit={this.handleSubmit}>
                        <div>
                            {/* 
                                Main
                            */}
                            <Row>
                                <div className='col s12 m12 l12'>
                                    <div className='col s12 m8 l8'>
                                        <Input s={12} l={12} type='select' label='Persona Encargada'>
                                            <option> Persona Encargada 1 </option>
                                            <option> Persona Encargada 2 </option>
                                            <option> Persona Encargada 3 </option>
                                        </Input>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div> 
                                    <div className='col s12 m4 l4'>
                                        <Input s={12} l={12} type='text' label='Número PackingList'/>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div> 
                                </div> 
                            </Row>
                            <Row>
                                <div className='col s12 m12 l12'>
                                    <div className='col s12 m4 l4'>
                                        <Input s={12} l={12} type='select' label='Operador Logistico'>
                                            <option> Operador 1 </option>
                                            <option> Operador 2 </option>
                                            <option> Operador 3 </option>
                                        </Input>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div> 
                                    <div className='col s12 m4 l4'>
                                        <Input s={12} l={12} type='select' label='Ingreso a Terminal'>
                                            <option> Terminal 1 </option>
                                            <option> Terminal 2 </option>
                                            <option> Terminal 3 </option>
                                        </Input>
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
                                    <div className='col s12 l8'>
                                        <Input s={12} l={12} label='Contacto'/>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                        </p>
                                    </div>
                                    <div className='col s6 l2'>
                                        <Input s={12} l={12} type='select' label='Naviera'>
                                            <option> Naviera 1 </option>
                                            <option> Naviera 2 </option>
                                            <option> Naviera 3 </option>
                                        </Input>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div>
                                    <div className='col s6 l2'>
                                        <Input s={12} l={12} label='Booking N°'/>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                        </p>
                                    </div>
                                </div>
                            </Row>
                            
                            <Row>
                                {/* 
                                    Datos del Embarcador
                                */}
                                <div className='col s12 m6 l6 border-gray-right-1'> 
                                    <div className='col s12 l12'>
                                        <h6 className='col s12 l12 left-align uppercase font-weight-bolder'> 
                                            Datos del Embarcador:
                                        </h6>
                                    </div>
                                    <div className='col s12 l12'>
                                        <Input s={12} l={12} type='select' label='Embarcador'>
                                            <option> Embarcador 1 </option>
                                            <option> Embarcador 2 </option>
                                            <option> Embarcador 3 </option>
                                        </Input>
                                        <div className='card col s12 m12 l12 z-depth-3 border-gray-1'>
                                           <div className='card-content black-text'>
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p className='fot'> Empresa </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> OAG GLOBAL INC </p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> Dirección </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> 7110 N.FRESNO AT...</p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> Teléfono </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> (511) 201-5300 </p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> Fax </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> (511) 201-5307 </p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> E-Mail </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> docs@jkfresh.com </p>
                                                    </li> 
                                                </ul>  
                                            </div>
                                        </div>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div>
                                </div>
                                {/* 
                                    Datos del Broker/Cliente
                                */}
                                <div className="col s12 m6 l6">
                                    <div className='col s12 l12'>
                                        <h6 className='col s12 l12 left-align uppercase font-weight-bolder'> 
                                            Datos del Broker/Cliente:
                                        </h6>
                                    </div>
                                    <div className='col s12 l12'>
                                        <Input s={12} l={12} type='select' label='Broker/Cliente'>
                                            <option> Broker/Cliente 1 </option>
                                            <option> Broker/Cliente 2 </option>
                                            <option> Broker/Cliente 3 </option>
                                        </Input>
                                        <div className='card col s12 m12 l12 z-depth-3 border-gray-1'>
                                           <div className='card-content black-text'>
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p className='fot'> Empresa </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> OAG GLOBAL INC </p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> Dirección </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> 7110 N.FRESNO AT...</p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> Teléfono </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> (511) 201-5300 </p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> Fax </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> (511) 201-5307 </p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> E-Mail </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> docs@jkfresh.com </p>
                                                    </li> 
                                                </ul>  
                                            </div>
                                        </div>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                {/* 
                                    Datos del consignatario
                                */}
                                <div className='col s12 m6 l6 border-gray-right-1'> 
                                    <div className='col s12 l12'>
                                        <h6 className='col s12 l12 left-align uppercase font-weight-bolder'> 
                                            Datos del consignatario:
                                        </h6>
                                    </div>
                                    <div className='col s12 l12'>
                                        <Input s={12} l={12} type='select' label='Consignatario'>
                                            <option> Consignatario 1 </option>
                                            <option> Consignatario 2 </option>
                                            <option> Consignatario 3 </option>
                                        </Input>
                                        <div className='card col s12 m12 l12 z-depth-3 border-gray-1 border-gray-1'>
                                           <div className='card-content black-text'>
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p className='fot'> Empresa </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> OAG GLOBAL INC </p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> Dirección </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> 7110 N.FRESNO AT...</p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> Teléfono </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> (511) 201-5300 </p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> Fax </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> (511) 201-5307 </p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> E-Mail </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> docs@jkfresh.com </p>
                                                    </li> 
                                                </ul>  
                                            </div>
                                        </div>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div>
                                </div>
                                {/* 
                                    Datos del notificante
                                */}
                                <div className="col s12 m6 l6">
                                    <div className='col s12 l12'>
                                        <h6 className='col s12 l12 left-align uppercase font-weight-bolder'> 
                                            Datos del notificante:
                                        </h6>
                                    </div>
                                    <div className='col s12 l12'>
                                        <Input s={12} l={12} type='select' label='Notificante'>
                                            <option> Notificante 1 </option>
                                            <option> Notificante 2 </option>
                                            <option> Notificante 3 </option>
                                        </Input>
                                        <div className='card col s12 m12 l12 z-depth-3 border-gray-1'>
                                           <div className='card-content black-text'>
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p className='fot'> Empresa </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> OAG GLOBAL INC </p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> Dirección </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> 7110 N.FRESNO AT...</p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> Teléfono </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> (511) 201-5300 </p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> Fax </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> (511) 201-5307 </p>
                                                    </li> 
                                                </ul>  
                                                <ul className='row'>
                                                    <li className='col m2 l3'>
                                                        <p> E-Mail </p>
                                                    </li> 
                                                    <li className='col m1 l1'>:</li> 
                                                    <li className='col m9 l8'>
                                                        <p className='left-align'> docs@jkfresh.com </p>
                                                    </li> 
                                                </ul>  
                                            </div>
                                        </div>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                {/* 
                                    Aduana Peruana
                                */}
                                <div className='col s12 m12 l12'> 
                                    <h6 className='col s12 l12 center-align uppercase font-weight-bolder'>Aduana Peruana</h6>
                                </div>
                            </Row>
                            <Row>
                                <div className='col s12 m6 l6 border-gray-right-1'> 
                                    <div className='col s12 l12'>
                                        <h6 className='col s12 l12 left-align uppercase font-weight-bolder'> 
                                            Consignee to order:
                                        </h6>
                                    </div>
                                    <div className='col s6 m6 l6'>
                                        <Input s={12} l={12} label='Nave y Viaje'/>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div>
                                    <div className='col s6 m6 l6'>
                                        <Input s={12} l={12} type='select' label='Condición Flete'>
                                            <option> Condición Flete 1 </option>
                                            <option> Condición Flete 2 </option>
                                            <option> Condición Flete 3 </option>
                                        </Input>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                        </p>
                                    </div>
                                    <div className='col s12 m12 l6'>
                                        <Input s={12} l={12} type='select' label='Regimém'>
                                            <option> Regimém 1 </option>
                                            <option> Regimém 2 </option>
                                            <option> Regimém 3 </option>
                                        </Input>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                        </p>
                                    </div>
                                    <div className='col s12 m12 l6'>
                                        <Input s={12} l={12} type='select' label='Partida Arancelaria'>
                                            <option> Partida Arancelaria 1 </option>
                                            <option> Partida Arancelaria 2 </option>
                                            <option> Partida Arancelaria 3 </option>
                                        </Input>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                        </p>
                                    </div>
                                </div>
                                <div className='col s12 m6 l6'> 
                                    <div className='col s12 l12'>
                                        <h6 className='col s12 l12 left-align uppercase font-weight-bolder'> 
                                            Notify to order:
                                        </h6>
                                    </div>
                                    <div className='col s12 l6'>
                                        <Input s={12} l={12} type='select' label='Puerto Embarque'>
                                            <option> Puerto Embarque 1 </option>
                                            <option> Puerto Embarque 2 </option>
                                            <option> Puerto Embarque 3 </option>
                                        </Input>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div>
                                    <div className='col s12 l6'>
                                        <Input s={12} l={12} type='select' label='Puerto Destino'>
                                            <option> Puerto Destino 1 </option>
                                            <option> Puerto Destino 2 </option>
                                            <option> Puerto Destino 3 </option>
                                        </Input>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div>
                                    <div className='col s12 m6 l6'>
                                        <div className='col input-field s12 l12'>
                                            <input 
                                                className='datepicker validate' 
                                                type='date'/>
                                            <label htmlFor='date'>E.T.D Pisco</label>
                                        </div>
                                        <p className='error col s12 m12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                        </p>
                                    </div>
                                    <div className='col s12 m6 l6'>
                                        <div className='col input-field s12 l12'>
                                            <input 
                                                className='datepicker input-field s12 l12 validate' 
                                                type='date'/>
                                            <label htmlFor='date'>E.T.A Destino</label>
                                        </div>
                                        <p className='error col s12 m12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                        </p>
                                    </div>
                                    <div className='col s12 m12 l12'>
                                        <Input s={12} l={12} name='group1' type='checkbox' value='true' label='Certificados Fitosanitarias/Origen' />
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div className="col s12 m12 l12">
                                    <div className='col s12 l12'>
                                        <h6 className='col s12 l12 left-align uppercase font-weight-bolder'> 
                                           INGRESAR CARGA: 
                                        </h6>
                                    </div>
                                </div>
                                <div className='col s12 m12 l12'>
                                    <div className='col s12 m6 l3'>
                                        <Input s={12} l={12} type='select' label='Producto'>
                                            <option> Producto 1 </option>
                                            <option> Producto 2 </option>
                                            <option> Producto 3 </option>
                                        </Input>
                                        <p className='error col s12 m12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                        </p>
                                    </div> 
                                    <div className='col s12 m6 l3'>
                                        <Input s={12} l={12} type='select' label='Marca'>
                                            <option> Marca 1 </option>
                                            <option> Marca 2 </option>
                                            <option> Marca 3 </option>
                                        </Input>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div>
                                    <div className='col s12 m6 l2'>
                                        <Input s={12} l={12} type='select' label='Tipo de Caja'>
                                            <option> Tipo de Caja 1 </option>
                                            <option> Tipo de Caja 2 </option>
                                            <option> Tipo de Caja 3 </option>
                                        </Input>
                                        <p className='error col s12 m12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                        </p>
                                    </div> 
                                    <div className='col s12 m6 l2'>
                                        <Input s={12} l={12} type='number' label='N° de Caja(s)'/>
                                        <p className='error col s12 m12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                        </p>
                                    </div> 
                                    <div className='col s12 m12 l2'>
                                        <label className='col s12 m12 l12' htmlFor='add-item'>
                                            <p className='padding-simple-bottom center-align'>
                                            .: Click para agregar :.
                                            </p>
                                        </label>
                                        <Button className='col s12 m12 l12' waves='light' id='add-item' >Agregar <Icon right>send</Icon></Button>
                                    </div> 
                                </div>
                            </Row>
                            {/* 
                                DESCRIPCIÓN DE LA CARGA
                            */}
                            <Row>
                                <div className="col s12 m12 l12">
                                    <div className='col s12 l12'>
                                        <h6 className='col s12 l12 left-align uppercase font-weight-bolder'> 
                                            DESCRIPCIÓN DE LA CARGA
                                        </h6>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div className='col s12 m12 l12'> 
                                    <div className=''>
                                        <table className='responsive-table highlight centered'>
                                            <thead className='z-depth-3'>
                                                <tr>
                                                    <th>VARIEDAD</th>
                                                    <th>PESO CAJA (KG)</th>
                                                    <th>TIPO DE CAJA</th>
                                                    <th>CANTIDAD DE CAJA(S)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>FLAME</td>
                                                    <td>8.20</td>
                                                    <td>CAJAS DE CARTON</td>
                                                    <td>1.800</td>
                                                </tr>
                                                <tr>
                                                    <td>FLAME</td>
                                                    <td>8.20</td>
                                                    <td>CAJAS DE CARTON</td>
                                                    <td>1.800</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td className='font-weight-bolder'>TOTAL</td>
                                                    <td className='border-gray-1 font-weight-bolder'>3.600</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div className="col s12 m12 l12">
                                    <div className='col s12 l12'>
                                        <h6 className='col s12 l12 left-align uppercase font-weight-bolder'> 
                                        PLANTA Y DIRECCIÓN DE LLENADO
                                        </h6>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div className="col s12 m12 l12">
                                    <div className='col s12 l6'>
                                        <Input s={12} l={12} type='select' label='Fundo(s)'>
                                            <option> one </option>
                                            <option> two </option>
                                            <option> three </option>
                                        </Input>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div>
                                </div>
                            </Row> 
                            <Row>
                                <div className="col s12 m12 l12">
                                    <div className='col s12 l12'>
                                        <h6 className='col s12 l12 left-align uppercase font-weight-bolder'> 
                                           FECHA DE DESPACHO
                                        </h6>
                                    </div>
                                </div>
                                <div className='col s12 m12 l12'>
                                    <div className='col s12 m6 l3'>
                                        <div className='col input-field s12 l12'>
                                            <input 
                                                className='datepicker validate' 
                                                type='date'/>
                                            <label htmlFor='date'>Ingreso a Planta</label>
                                        </div>
                                        <p className='error col s12 m12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                        </p>
                                    </div> 
                                    <div className='col s12 m6 l3'>
                                        <Input s={12} l={12} type='time' label='Hora de llenado'/>
                                        <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                        </p>
                                    </div>
                                    <div className='col s12 m6 l3'>
                                        <div className='col input-field s12 l12'>
                                            <input 
                                                className='datepicker validate' 
                                                type='date'/>
                                            <label htmlFor='date'>Salidad Ica</label>
                                        </div>
                                        <p className='error col s12 m12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                        </p>
                                    </div> 
                                    <div className='col s12 m6 l3'>
                                        <div className='col input-field s12 l12'>
                                            <input 
                                                className='datepicker validate' 
                                                type='date'/>
                                            <label htmlFor='date'>Ingreso al Terminal</label>
                                        </div>
                                        <p className='error col s12 m12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                        </p>
                                    </div> 
                                </div>
                            </Row>
                            <Row>
                                <div className='col s12 m12 l12'>
                                    <div className='col s12 l12'>
                                        <h6 className='col s12 l12 left-align uppercase font-weight-bolder'> 
                                            PARÁMETROS
                                        </h6>
                                    </div>
                                </div>
                                <div className='col s12 m12 l6'> 
                                    <div className='col s12 m12 l12'>
                                        <div className='margin-bottom-1 '>
                                            <p className='center-align font-weight-bolder'> Temperatura </p>
                                        </div>
                                        <Slider
                                            className='switch col input-field s12 l12'
                                            min={-10}
                                            max={10}
                                            labels={horizontalLabels}
                                            value={celsius}
                                            orientation='horizontal'
                                            onChange={this.handleOnChange}
                                        />
                                        <div className='col input-field s12 m12 l12'>
                                            <p className='center-align font-weight-bolder'>{formatCelsius(celsius)} </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='col s12 m12 l6'> 
                                    <div className='col s12 m12 l12'>
                                        <div className='margin-bottom-1 '>
                                            <p className='center-align font-weight-bolder'> Estado </p>
                                        </div>
                                    </div>
                                    <div className='col s12 m12 l12'>
                                        <div className='switch col s6 m6 l6'>
                                            <p className='left-align font-weight-bolder'>
                                                Ventilación
                                            </p>
                                        </div>
                                        <div className='switch col s6 m6 l6'>
                                            <label className='d-flex justify-content-flex-end'>
                                                Off 
                                                <input type='checkbox'/>
                                                <span className='lever'></span>
                                                On 
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col s12 m12 l12'>
                                        <div className='switch col s6 m6 l6'>
                                            <p className='left-align font-weight-bolder'>
                                                Humedad
                                            </p>
                                        </div>
                                        <div className='switch col s6 m6 l6'>
                                            <label className='d-flex justify-content-flex-end'>
                                                Off
                                                <input type='checkbox' />
                                                <span className='lever'></span>
                                                On
                                            </label>
                                        </div>
                                    </div>

                                    <div className='col s12 m12 l12'>
                                        <div className='switch col s6 m6 l6'>
                                            <p className='left-align font-weight-bolder'>
                                                Quest
                                            </p>
                                        </div>
                                        <div className='switch col s6 m6 l6'>
                                            <label className='d-flex justify-content-flex-end'>
                                                Off
                                                <input type='checkbox' value='1'/>
                                                <span className='lever'></span>
                                                On
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div className='col s12 m12 l12'>
                                    <div className='col s12 m4 l4'>
                                    </div>
                                    <div className='col s12 m4 l4'>
                                        <a className='col input-field s12 m12 l12 waves-effect waves-light btn red'>
                                            <i className='material-icons right'>send</i>Guardar
                                        </a>
                                    </div>
                                    <div className='col s12 m4 l4'>
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