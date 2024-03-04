import styles from './ProductCard.module.css';

function ProductCard(){
    return (
        <div className={styles.container}>
            <div className={styles.card1}>
                <img className={styles.photo} src="src/assets/card1.png" alt="" />
                <h3>Roasted Turkey with vegetables</h3>
                <div className={styles.minicontainer}>
                    <p className={styles.price}>$30,00</p>
                    {/* trabalhar com este botão abaixo */}
                    <button><img className={styles.plus} src="src/assets/plus.png" alt="" /></button>                 
                </div>
            </div>                    
            <div className={styles.card2}>
                <img className={styles.photo} src="src/assets/card2.png" alt="" />
                <h3>Red Fruits velvet cake</h3>
                <div className={styles.minicontainer}>
                    <p className={styles.price}>$10,00</p>
                    <img className={styles.plus} src="src/assets/plus.png" alt="" />                    
                </div>
            </div>                    
            <div className={styles.card3}>
                <img className={styles.photo} src="src/assets/card3.png" alt="" />
                <h3>Christmas Pizza</h3>
                <div className={styles.minicontainer}>
                    <p className={styles.price}>$7,00</p>
                    <img className={styles.plus} src="src/assets/plus.png" alt="" />                    
                </div>
            </div>                    
        </div>
    )
}

export default ProductCard;