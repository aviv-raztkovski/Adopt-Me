import {Component} from 'react';
import {Link, Redirect} from 'react-router-dom'; // eslint-disable-line

class ErrorBoundry extends Component {
    state = {hasError: false, redirect: false};
    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundry caught an error", error, info);
        setTimeout(() => this.setState({ redirect: true }), 5000);
    }

    render() {
        if (this.state.redirect){
            return <Redirect to="/" />;
        }
        else if(this.state.hasError) {
            return (
                <h2>
                    This Listing Has An Error. 
                    <Link to='/'>Click Here</Link>
                     To Return Home Or Wait 5 Seconds
                </h2>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundry;