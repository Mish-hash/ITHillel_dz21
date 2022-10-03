import React from 'react';
import CardItem from './CardItem';
import styles from './Contacts.module.scss';

const contacts = [
    {
        name: 'Jon',
        phone: '+380123456789'
    },
    {
        name: 'Alice',
        phone: '+380123123123'
    },
    {
        name: 'Bob',
        phone: '+380123213543'
    }
]

class Contacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selectContact: null};
        this.contacts = contacts;
        this.selectCard = this.selectCard.bind(this);
    }

    selectCard(name, phone) {
        this.setState({
            selectContact: {
                name: name,
                phone: phone
            }
        })
    }


    render() {
        return (
            <div>
                <h3>Contacts list</h3>
                <div className={styles.selectCard}>
                    {this.state.selectContact && (
                        <React.Fragment>
                            <p className={styles.selectName}>{this.state.selectContact.name}</p>
                            <p className={styles.selectPhone}>{this.state.selectContact.phone}</p>
                        </React.Fragment>
                    )}
                </div>
                <div className={styles.cardList}>
                    {this.contacts.map((el, indx) => (<CardItem selectCard={this.selectCard} name={el.name} phone={el.phone} index={indx} key={`card_${el.phone}`}/>))}
                </div>
            </div>
        )
    }
}

export default Contacts;
