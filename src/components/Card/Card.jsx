import React, {useState} from 'react';
import classNames from 'classnames';
import variant1 from './Variant1.module.css';
import variant2 from './Variant2.module.css';
import variant3 from './Variant3.module.css';
import variant4 from './Variant4.module.css';
import styles from './Card.module.css';


const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phone });
        onClose(); 
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Введите ваши данные</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Имя" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="tel" 
                        placeholder="Номер телефона" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                    <button type="submit">Отправить</button>
                    <button type="button" onClick={onClose}>Закрыть</button>
                </form>
            </div>
        </div>
    );
};

const Card = ({ title, price, speed, variant}) => {
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cardId = title;

    const handleClick = () => {
        setSelectedCardId(cardId);
        setIsModalOpen(true); 
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = (data) => {
        console.log('Данные отправлены:', data);
        handleModalClose();
    };
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
        <div onClick={handleClick} className={classNames(styles.card , selectedStyles.card)}>
                <h4 className={classNames(styles.cardTitle, selectedStyles.cardTitle)}>Безлимитный <span> {title}</span></h4>
                <p className={classNames(styles.cardPrice, selectedStyles.cardPrice)}>
                    руб <span className={classNames(styles.price)}>{price}</span>  /мес
                </p>
                <p className={classNames(styles.cardSpeed)}> до {speed} Мбит/сек</p>
                <p className={classNames(styles.cardInfo)}> Объем включенного трафика не ограничен</p>
                <div className={classNames(styles.buttonWrapper)}>
                    <button className={classNames(styles.cardAdd)}>Выбрать тариф</button>
                </div>
                <Modal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleFormSubmit} />
        </div>
    );
}


export default Card;
