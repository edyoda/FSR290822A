import React from 'react';
import styles from "./Pill.module.css";



class Pill extends React.Component{


    render(){

        return <button className={`${styles.pill} ${this.props.active ? styles.active : ''}`}>{this.props.children}</button>
    }
}


export default Pill;