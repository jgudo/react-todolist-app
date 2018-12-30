class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options : props.options
        }
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options: options }));
            }
        } catch(e) {
            console.log(e);
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    handleDeleteAll() {
        this.setState(()=> ({ 
            options: [] 
        }));
    }

    handleDeleteOption(option) {
        console.log(option);
        this.setState((prevState) => ({
            options: prevState.options.filter((val) => option !== val)
        }));    
    }

    handlePick() {
        let random = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[random];

        alert(option);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Can\'t be blank'; 
        } else if(this.state.options.indexOf(option) > -1) {
            return 'Already exists';
        }

        this.setState((prevState) => ({
             options: prevState.options.concat(option) 
        }));
    }



    render() {
        const subtitle = 'Put Your Life in the Hands of Computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOption={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteAll={this.handleDeleteAll}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision App'
}


const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOption}>What Should I Do?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            
            <button onClick={props.handleDeleteAll}>Remove All</button>
            {props.options.map((val) => (
                <Option 
                        key={val} 
                        optionVal={val} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))}
            {props.options.length === 0 && <p>You don't have a list</p>}    
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionVal}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionVal);
            }}> 
                Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {error}
        });

        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" placeholder="Enter your option"/>
                 <button >Add Option</button>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp  />, document.getElementById('app'));