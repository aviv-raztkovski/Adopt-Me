import { Component } from "react";
import { withRouter } from "react-router-dom"; // eslint-disable-line
import Carousel from "./Carousel";
import ErrorBoundry from "./ErrorBoundry";
import ThemeContext from "./ThemeContext";

class Details extends Component {
    state = { loading: true }; // The Same as below
    // constructor() {
    //     super();
    //     this.state = { loading: true, name: "", animal: "", breed: "",city: "", state: "", description: ""};
    // }

    async componentDidMount() {
        const response = await fetch(
            `https://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        );
        const json = await response.json();
        this.setState(
            Object.assign(
                {
                    loading: false,
                },
                json.pets[0]
            )
        );

        // Another way to set state:
        // this.setState({
        //     loading: false,
        //     name: json.pets[0].name,
        //     breed: json.pets[0].breed,
        //     animal: json.pets[0].animal,
        //     city: json.pets[0].city,
        //     state: json.pets[0].state,
        //     description: json.pets[0].description
        // });
    }

    render() {
        if (this.state.loading) {
            return <h2>Loading...</h2>;
        }

        const { animal, breed, city, state, description, name, images } = this.state;

        return (
            <div className="details">
                <Carousel images={images} />
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>

                <ThemeContext.Consumer>
                    {([theme]) => (
                        <button style={ { backgroundColor: theme } }>Adopt {name}</button>
                    )}
                </ThemeContext.Consumer>
                <p>{description}</p>
            </div>
        );
    }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundry() {
    return (
        <ErrorBoundry>
            <DetailsWithRouter />
        </ErrorBoundry>
    )
};
