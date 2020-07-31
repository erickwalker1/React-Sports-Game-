let rootElement = document.getElementById('root')


class Team extends React.Component {
    constructor (props) {
        super (props)


        this.state = {
            shotsTaken: 0,
            score: 0
        }
    }

    render () {
        return <h2>{this.state.score}</h2>
    }
}


function App () {
    return (
        <div>
            <h2><Team /></h2>
        </div>
    )
}


ReactDOM.render(
    <App />,
    rootElement
)
