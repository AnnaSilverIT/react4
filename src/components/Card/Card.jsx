import React from 'react';
import classNames from 'classnames';
import variant1 from './Variant1.module.css';
import variant2 from './Variant2.module.css';
import variant3 from './Variant3.module.css';
import variant4 from './Variant4.module.css';
import styles from './Card.module.css';

const Card = ({ title, price, speed, variant }) => {
    let selectedStyles;
    switch (variant) {
        case 'variant1':
            selectedStyles = variant1;
            break;
        case 'variant2':
            selectedStyles = variant2;
            break;
        case 'variant3':
            selectedStyles = variant3;
            break;
        case 'variant4':
            selectedStyles = variant4;
            break;
        default:
            selectedStyles = styles;
    }

    return (
        <div className={classNames(styles.card , selectedStyles.card)}>
                <h4 className={classNames(styles.cardTitle, selectedStyles.cardTitle)}>Безлимитный <span> {title}</span></h4>
                <p className={classNames(styles.cardPrice, selectedStyles.cardPrice)}>
                    руб <span className={classNames(styles.price)}>{price}</span>  /мес
                </p>
                <p className={classNames(styles.cardSpeed)}> до {speed} Мбит/сек</p>
                <p className={classNames(styles.cardInfo)}> Объем включенного трафика не ограничен</p>
                <div className={classNames(styles.buttonWrapper)}>
                    <button className={classNames(styles.cardAdd)}>Выбрать тариф</button>
                </div>
        </div>
    );
}


export default Card;
