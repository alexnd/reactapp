
class Game extends React.Component {

    render() {
      return (
          <div>
            <h1>[Game]</h1>
            <pre>{JSON.stringify(G.INITDATA, null, 2)}</pre>
          </div>
      )
    }
  }
  
  export default Game;