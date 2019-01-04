import React from 'react';

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__name">{props.count + '. ' + props.optionVal}</p>
            <button 
                className="button button--remove"
                onClick={(e) => {
                    props.handleDeleteOption(props.optionVal);
            }}> 
                <div></div>
                <div></div>
            </button>
        </div>
    );
};

export default Option;

