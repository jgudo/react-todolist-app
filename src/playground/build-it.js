class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    toggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
        console.log(this.state.visibility);
           
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && <p>This is your details</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// let rootDiv = document.getElementById('app');
// let visible = false;

// const toggle = (e) => {
//     visible = !visible;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggle}>{visible ? 'Hide Details' : 'Show Details'}</button>
//             { visible && <p>This is your detail</p>}
//         </div>
        
//     );

//     ReactDOM.render(template, rootDiv);


// }

// render();