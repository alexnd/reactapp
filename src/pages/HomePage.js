import { Button, Form } from 'reactstrap';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
      //L('***API_URL', G.API_URL);
    }

    componentWillUnmount() {

    }
      
    render() {
      return (
          <div>
            <h1>[Home]</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <div>
            <Form>
              <Button bsStyle="primary">Primary</Button>
            </Form>  
            </div>
          </div>
      )
    }
  }
  
  export default HomePage;