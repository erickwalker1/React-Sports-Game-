
let rootElement = document.getElementById('root')


//Class Component 
class Team extends React.Component {
    constructor(props) {
        super(props)

        // The components State 
        this.state = {
            shots: 0,
            score: 0,
            shotPercent: 0
        }
        //Our Audio Sounds
        this.shootSound = new Audio("./assets/Back+Board.mp3")
        this.scoreSound = new Audio("./assets/Swish.mp3")
    }

    // Binding the shoot() method to setState ?? NEED MORE LEARNING ON PUBLIC CLASS FIELDS AND BINDING OF "THIS"; AND ARROW FUNCTIONS
    shoot = () => {
        //place current score(this.state.score) inside a variable, and our Audio Sounds into Variables 
        let score = this.state.score

        let shootSound = this.shootSound
        let scoreSound = this.scoreSound

        // If Math.random is greater than 5, add 1 to score(our variable and play our scoreSound audio; else, play the shootSound)

        if (Math.floor(Math.random() * 10) > 5) {
            score += 1
            scoreSound.play()
        } else {
            shootSound.play()
        }

        // We change the state(more specifically the shots) of Team whenever we shoot by adding one to the current shots and we display the current score 
        this.setState((state, props) => ({
            shots: state.shots + 1,
            score // Simply put score
        }))

    }


    // Render() method shows the output of the data we want to display: this can either be data from inside our Components state or any data we choose to input inside the render method itself ??
    render() {
        //Why decide to define shotPercent metric in render method instead of Team Component??

        let shotPercentDiv

        if (this.state.shots) {

            let shotPercent = Math.round((this.state.score / this.state.shots) * 100)

            shotPercentDiv =
                <div>
                    <strong> Shot% : {shotPercent} </strong>
                </div>
        }
        return (

            <div className="Team">
                <h2> {this.props.name} </h2>

                <div className="identity" >
                    <img src={this.props.logo} alt={this.props.name} />
                </div>

                <div>
                    <strong> Shots: </strong>  {this.state.shots}
                </div>

                <div>
                    <strong> Score: </strong>  {this.state.score}
                </div>

                {shotPercentDiv}

                <button onClick={this.shoot} >
                    <strong>Shoot</strong>
                </button>
            </div>
        )
    }
}
//As we can see, PROPS are being passed into our COMPONENTS (App & Team) as ATTRIBUTES in our JSX (look at render() inside Team component)


//Game Component 
//Created a game component passing in everything from previous component( App) into this component. Props are being passed in?
function Game(props) {
    // We are returning two Team Classes with attributes of their name and logo
    return (
        <div>
            <h1 className="venue" > Welcome To {props.venueName} </h1>
            <div className="App">
                <div className="stats" >
                    < Team name="Houston Rockets" logo="./assets/Houston Rocket.png" />


                    <div className="versus" >
                        <h1>VS</h1>
                    </div>


                    < Team name="Los Angeles Lakers" logo="./assets/Lakers.png" />
                </div>
            </div>

        </div>
    )
}



//Our Default Component that will be rendered through ReactDOM: All other components will be rendered through this component

function App() {
    return (
        <Game venueName="Toyota Center" />
    )
}


ReactDOM.render(
    <App />,
    rootElement
)
