import styles from './Card.module.css';


function Card({title, description}) {
  return (
    <div className={styles.card}>
      <h1 className={styles.header}>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

// export function Card2(){
//   return <p>Card2</p>
// }

// export let x = 10;

// export function createFullName(){}



export default Card;