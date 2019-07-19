import React, { Component } from 'react';
import './ImageCard.css'

interface Props {
    image: string,
    onDeleteClick: (image: string) => void;
    onEditClick: (image: string) => void;
}

interface State {
    isHover: boolean,
}

class ImageCard extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
        }
        this.handleHoverActive = this.handleHoverActive.bind(this);
        this.handleHoverInactive = this.handleHoverInactive.bind(this);
    }
    handleHoverActive() {
        this.setState({ isHover: true })
    }
    handleHoverInactive() {
        this.setState({ isHover: false })        
    }
    render() {
        const { isHover } = this.state;
        const { onDeleteClick, onEditClick, image } = this.props;
        return (
            <div 
                className="image-card"
                onMouseEnter={this.handleHoverActive} 
                onMouseLeave={this.handleHoverInactive}
            >
                {isHover && (
                    <div className="controls">
                        <i 
                            className="material-icons edit-button"
                            onClick={() => onEditClick(image)}
                        >
                            edit
                        </i>
                        <i 
                            className="material-icons close-button"
                            onClick={() => onDeleteClick(image)}
                        >
                            close
                        </i>
                    </div>
                )}
                <img src={image} />
            </div>
        )
    }
}

export default ImageCard;