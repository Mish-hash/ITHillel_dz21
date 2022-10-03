import React from "react";
import { Link } from "react-router-dom";

const styles = {
    menu: {
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
    menuItem: {
        margin: '5px'
    }
}

export default function Header() {

    return(
        <React.Fragment>
            <h1>ДЗ 21. React</h1>
            <div style={styles.menu}>
                <Link style={styles.menuItem} to="/">Welcome</Link>
                &nbsp;
                <Link style={styles.menuItem} to="contacts">Contacts</Link>
            </div>
            <hr/>
        </React.Fragment>
    )
}
