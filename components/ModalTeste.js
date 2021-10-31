import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";
import {
    OverlayWrapper,
    ModalCardWrapper,
    ModalCard,
    ModalClose,
    ModalContent,
    ModalNav
} from "./modal-elements/ModalStyles";
import BorderLeft from "./modal-elements/BorderLeft";
import BorderRight from "./modal-elements/BorderRight";


class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.overlayContainer = document.createElement("div");
        document.body.appendChild(this.overlayContainer);

        this.state = {
            animateBorder: false,
            direction: "",
            total: 0,
            current: 0,
            slides: []
        };
    }

    componentDidMount() {
        const { children } = this.props;

        this.setState({
            total: React.Children.count(children),
            slides: React.Children.toArray(children)
        });

        document.addEventListener("keyup", this.handleKeyPress, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.handleKeyPress, false);
        document.body.removeChild(this.overlayContainer);
    }

    handleKeyPress = ({ keyCode }) => {
        const ARROW_RIGHT = 39;
        const ESC = 27;
        const ARROW_LEFT = 37;

        switch (keyCode){
            case ARROW_LEFT:
            this.animateLeft();
            break;
            case ARROW_RIGHT:
            this.animateRight();
            break;
            case ESC:
            this.props.toggleModal();
            break;
            default:
        }
    }

    handleAnimation = direction => {
        const { duration } = this.props;

        this.setState({
            animateBorder: true,
            direction: direction
        });

        setTimeout(() => {
            this.setState({ animateBorder: false })
        }, duration);
    }

    animateLeft = () => {
        this.handleAnimation("left");
        this.setState(state => ({
            current: state.current === 0 ? state.total - 1 : state.current - 1
        }));
    };

    animateRight = () => {
        this.handleAnimation("right");
        this.setState(state => ({
            current: state.current + 1 === state.total ? 0 : state.current + 1
        }));
    };

    render() {
        const { toggleModal, duration, backgroundColor, accentColor } = this.props;

        const { animateBorder, direction, slides, current } = this.state;

        return ReactDOM.createPortal(
            <OverlayWrapper>
                <ModalClose onClick={toggleModal}>
                    <FiX />
                </ModalClose>
                <ModalNav>
                    <FiArrowLeft onClick={this.animateLeft} />
                    <FiArrowRight onClick = {this.animateRight} />
                </ModalNav>
                <ModalCardWrapper>
                    <ModalCard>
                        <BorderLeft
                        animateBorder={animateBorder}
                        direction={direction}
                        duration={duration}
                        />
                        <ModalContent>{slides[current]}</ModalContent>
                        <BorderRight
                        animateBorder={animateBorder}
                        direction={direction}
                        duration={duration}
                        />
                    </ModalCard>
                </ModalCardWrapper>
            </OverlayWrapper>,
            this.overlayContainer
        );
    }

}


Modal.defaultProps = {
    duration: 300
};

Modal.propTypes = {
    duration: PropTypes.number
};


export default Modal;