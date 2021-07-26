import {Component} from 'react';
import axios from 'axios';

class Resources extends Component {

  constructor() {
    super();
    this.state = {
      services: []
    }
  }

  componentDidMount() {
    this.renderServices();
  }

  renderServices = async() => {
    try {
      const res = await axios.get('https://api.mattsaxton.me/services');
      const services = res.data;
  
      this.setState({
        services: services
      });
    } catch (err) {
      console.log(err);
    }
  }
  
  render() {
    console.log("this.state", this.state);

    

    return (
        <ul className="services">
          {this.state.services.map((service, i) => (
            <li key={i}>
             <h1>
              {service.Title}
             </h1>
             <p>
               {service.Description}
             </p>
             <p>{service.Number}</p>
            </li>
          ))}
        </ul>
    );
  }

}

export default Resources;