import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Main Components 
import Header from './components/header/containers/header';
import Footer from './components/footer/containers/footer';
import NavBar from './components/nav-bar/containers/nav-bar';
import NavBarItem from './components/nav-bar/items/nav-bar-item';
//Logo Entity
import logo from '../media/images/png/AGA.png'; 
import BoxPage from './pages/box-page';

const header = {
    logo:{
        src: logo,
        alt:this.title
    },
    entity: 'Agricola Andrea S.A.C.',
    slogan: ''
}

const footer = {
    entity:'Agricola Andrea',
    year: 2018,
    website: 'www.agricolaandrea.com'
}

const mapStateToProps = (state, props) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {

    };
    return actions;
}


class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <Header header={header} style={style.header}/>
                <NavBar style={style.navBar}>
                    <NavBarItem to={'/'}>Página Principal</NavBarItem>
                    <NavBarItem to={'/boxes'}>Página Principal</NavBarItem>
                    <NavBarItem to={'/login'}>Login</NavBarItem>
                </NavBar>
                <section>
                    <main>
                        <Switch >
                            <Route exact path='/' component={BoxPage} />
                            <Route path='/login' component={()=><li> Hola </li>} />
                        </Switch>
                    </main>
                </section>  
                <Footer footer={footer} style={style.footer}/>
            </div>
        );
    }
}

const style = {
    header:{
        background:'#7cb342', 
        borderBottom:'1px solid white'
    },
    footer:{
        background:'#7cb342', 
        borderTop:'1px solid white'
    },
    navBar:{
        background:'#558b2f', 
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
