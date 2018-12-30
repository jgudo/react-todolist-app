import React from 'react';
import {connect } from 'react-redux';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';
import {addOption, removeOption , setOptions, removeAllOptions} from '../redux/configureStore';

class TodoListReactApp extends React.Component  {

    state = {
        modalIsOpen: false,
        selected: undefined
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.props.setOptions(options);
            }
        } catch(e) {
            console.log(e);
        } 
    }

    handleDeleteAll = () => {
        this.props.removeAllOptions();
    }

    handleDeleteOption = (option) => {
        this.props.removeOption(option);
    }

    handlePick = () => {
        let random = Math.floor(Math.random() * this.props.options.length);
        let option = this.props.options[random];
         this.setState(() => ({
            selected: option
        }));
        
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Can\'t be blank'; 
        } else if(this.props.options.indexOf(option) > -1) {
            return 'Already exists';
        }
        this.props.addOption(option);
    }

    handleCloseModal = () => {
        this.setState( (prevState) => {
            if(prevState.selected) {
                return {
                    selected: undefined
                }
            }
        });
    }
    
    render() {
        const subtitle = 'Put Your Life in the Hands of Computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOption={this.props.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.props.options}
                            handleDeleteAll={this.handleDeleteAll}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>

                </div>
                <OptionModal
                    selectedOption={this.state.selected} 
                    handleCloseModal={this.handleCloseModal}
                />
    
            </div>
        );
    }    
}

TodoListReactApp.defaultProps = {
    options: []
}

const mapStateToProps = (state) => ({
    options: state.options,
    selectedOption: state.selectedOption
});

const mapDispatchToProps = (dispatch) => ({
    addOption: (option) => dispatch(addOption(option)),
    removeOption: (option) => dispatch(removeOption(option)),
    selectOption: () => dispatch(selectOption()),
    setOptions: (items) => dispatch(setOptions(items)),
    removeAllOptions: () => dispatch(removeAllOptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListReactApp)


