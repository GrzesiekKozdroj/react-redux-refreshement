console.log('hi')
class App extends React.Component {
    state = {
        name: 'Larhendiel',
        age:34
    }
    handleClick = e => {
        console.log(e.target)
        console.log(this.state)
        this.setState({name:'Yoda'})
    }
    handleMouseOver = (e) => {
        console.log(e.target)
    }
    copyHandler = () => {
        console.log('Try being original for once')
    }
    render(){
        return(
            <div className="app-content">
                <h1>Hello World</h1>
                <p> my name is {this.state.name} and I'm {this.state.age} years old.</p>
                <button onClick={this.handleClick}>click me</button>
                <button onMouseOver={this.handleMouseOver}>over me</button>
                <p onCopy={this.copyHandler}>Lorem ipsum o Dolores</p>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("app"))