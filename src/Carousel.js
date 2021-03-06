import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0,
    };

    static defaultProps = {
        images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
    };

    handerlIndexClick = (event) => {
        this.setState({
            active: +event.target.dataset.index,
        });
    };

    render() {
        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            key={photo}
                            src={photo}
                            data-index={index}
                            onClick={this.handerlIndexClick}
                            className={index === active ? "active" : ""}
                            alt="animale thumbnail"
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
