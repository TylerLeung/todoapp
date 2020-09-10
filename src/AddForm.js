import React, {Component} from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.content.length === 0) {
            return;
        }
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div className="row collection-item">
                <form onSubmit={this.handleSubmit}>
                    <div className="col s12">
                        <label>Add New Task: </label>
                    </div>
                    
                    <div className="col s10">
                        <input className="white-text" type="text" onChange={this.handleChange} value={this.state.content}/>
                    </div>

                    <div className="col s2"><button className = "btn-small waves-effect waves-light" type="submit" name="action">Submit
                        <i className = 'material-icons right'>send</i>
                        </button>
                    </div>  
                </form>
            </div>
        )
    }
}

export default AddTodo