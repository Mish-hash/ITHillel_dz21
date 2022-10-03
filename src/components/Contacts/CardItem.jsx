
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        border: '1px solid black',
        borderRadius: '5px',
        cursor: 'pointer',
    },
}

function CardItem(props) {
    const {name, phone, index, selectCard} = props

    return(
        <div style={styles.container} onClick={()=>{selectCard(name, phone)}}>
            <p>{index + 1} </p>
            <p>{name}</p>
            <p>{phone}</p>
        </div>
    );
}

export default CardItem;
