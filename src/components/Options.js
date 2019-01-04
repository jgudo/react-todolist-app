import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">My Tasks</h3>
            <button 
                className="button button--link"
                onClick={props.handleDeleteAll}>
                Remove All
            </button>
        </div>

        {props.options.map((val, index) => (
            <Option 
                    key={val} 
                    count={index+1}
                    optionVal={val} 
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
        {props.options.length === 0 && <p className="widget__message">You don't have any task</p>}    
    </div>
);


export default Options;