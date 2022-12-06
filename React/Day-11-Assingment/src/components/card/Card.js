import React from 'react';
import styles from './Card.module.css'

const MONTH = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC"
]

class Card extends React.Component{

    render(){
        const date = new Date(this.props.postedOn);
     

        return <div className={styles.card}>
            <img className={styles.image} src={this.props.image}/>
            <div className={styles.content}>
                <p className={styles.title}>{  `${this.props.title.substring(0,40)}...'`}</p>
                <span className={styles.author}>{  `${this.props.author}`} </span>
                <span className={styles.postedOn}>{ `| ${date.getDate()} ${MONTH[date.getMonth()]} ${date.getFullYear()}`  }</span>
                <p className={styles.description}>{this.props.description.substring(0,150)+'...'}</p>
                
            </div>
        </div>
    }
}


export default Card;