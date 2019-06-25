import React from 'react';


class App extends React.Component {

    
    state = {employees: [], term:''};

    componentDidMount() {

        this.setData()
        
    }

    setData() {
        var data = require('../data/file.json');
        this.setState({employees: data});
    }

    renderList() {
        return this.state.employees.map((e) => {
           return ( 
           <tr key={e.id}>
            <td data-label="Name">{e.first_name}</td>
            <td data-label="Name">{e.last_name}</td>
            
           </tr> 
           )
        })
    }

    onFromSubmit = (e) => {
        e.preventDefault();
        if(this.state.term) {
            const filteredEmployees = this.state.employees.filter((a) => {
                if(a['first_name'].toUpperCase().indexOf(this.state.term.toUpperCase()) > -1) {
                    return a
                }
            })
    
            this.setState({employees: filteredEmployees})
        } else {
            this.setData();
        }
        
    }

    render() {
        return (
            <div style={{ margin: '15px' }}>
                <h3 style={{ margin: '15px' }}>Employees</h3>
                <div className="ui segment">
                    <form onSubmit={this.onFromSubmit} className="ui form">
                        <div className="field">
                            <label>Employee Search</label>
                            <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                        </div>

                    </form>
                </div>
                <table class="ui celled table">
                    <thead>
                        <tr>
                            <th>Fist Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;