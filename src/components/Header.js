import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="header-wrapper">
            <h1 className="header__title">{props.title}</h1>
            {/* <h4 className="header__subtitle">{props.subtitle}</h4> */}
        </div>
    </div>
);


Header.defaultProps = {
    title: 'React-toDo'
}

export default Header;