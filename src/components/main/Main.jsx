import React, {Component} from 'react';
import Postindex from "../postindex/Postindex";
import Error from "../error/Error";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            town: '',
            street: '',
            house: '',
            data: [],
            response: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.baseState = this.state
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.apiCall();
        this.setState(this.baseState);
    }

    async apiCall() {
        const apikey = "&key=fpNqaC77XY3h3f3wEhTs";
        let town = this.state.town;
        let street = this.state.street;
        let house = this.state.house;
        let urlPost = "https://api.postit.lt/v2/?city=" + town + "&address=" + street + "+" + house + apikey;

        let request = await fetch(urlPost);
        let data = await request.json();
        this.setState({response: await data['total'] > 0 ? 1 : 2});
        this.setState({data: await data['data']});

    }

    render() {
        let address;
        if (this.state.response==1){
            address = this.state.data.map((apidata, index)=> <Postindex
                key={index}
                address = {apidata.address}
                post_code ={apidata.post_code}
                city = {apidata.city}
                municipality = {apidata.municipality}
                post = {apidata.post}
            />);
        }
        if (this.state.response==2) {
            address = <Error />;
        }

        return (
            <div>
                <div className="row">
                    <form className="col-sm-6 mt-3" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="town">Miestas:</label>
                            <input type="text" className="form-control" id="town"
                                   name ="town" value={this.state.town} onChange={this.handleChange}
                                   aria-describedby="emailHelp" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="street">Gatvės pavadinimas:</label>
                            <input type="text" className="form-control" id="street"
                                   name ="street" value={this.state.street} onChange={this.handleChange}
                                   aria-describedby="emailHelp" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="house">Namo numeris:</label>
                            <input type="text" className="form-control" id="house"
                                   name ="house" value={this.state.house} onChange={this.handleChange}
                                   aria-describedby="emailHelp" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                </div>

                <div className="row">
                    {address}
                </div>
            </div>
        );
    }
}
export default Main;