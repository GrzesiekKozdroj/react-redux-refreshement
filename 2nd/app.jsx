console.log('hi')
class App extends React.Component {
    state = {
        name: 'Larhendiel',
        age:34
    }
    handleChange = e => {
        this.setState({
            name:e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log('Form submitted ', this.state.name)
    }
    render(){
        return(
            <div className="app-content">
                <h1>Hello World</h1>
                <p> my name is {this.state.name}.</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("app"))