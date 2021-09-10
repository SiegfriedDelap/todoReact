import React from "react";
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd})=>{
    return(
        <div className="jumbotron text-center mt-5">
            <h2>{counter}</h2>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-around">
                        <button className ="btn btn-primary btn-lg mr-1" onClick={dec}> - </button>
                        <button className ="btn btn-primary btn-lg mr-1" onClick={rnd}> RANDOM </button>
                        <button className ="btn btn-primary btn-lg mr-1" onClick={inc}> + </button>  
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return{
        counter: state
    }
};

const mapDispatchToProps = (dispatch)=>{

    return bindActionCreators(actions, dispatch);

};

//можно передать объект actions и тогда коннект выполнит байинд и будет как мапдиспатчтупропс

export default connect(mapStateToProps, mapDispatchToProps)(Counter);