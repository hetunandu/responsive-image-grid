import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import './EditModal.css';

interface Props {
    image: string,
    onUpdateImage: (image: string, newImage: string) => void;
    onCloseModal: () => void;
}

class EditModal extends Component<Props> {
    constructor(props) {
        super(props);
        this.handleImageUpload = this.handleImageUpload.bind(this);
    }
    handleImageUpload(files, urls) {
        const { onUpdateImage, image } = this.props;
        const newImage = urls[0];
        onUpdateImage(image, newImage);
    }
    render() {
        const { image, onCloseModal } = this.props;
        return (
            <div className="modal-overlay">
                <div className="modal">
                    <div className="modal-header">
                        <h3>Edit Image</h3>
                        <i 
                            className="material-icons close-button"
                            onClick={onCloseModal}
                        >
                            close
                        </i>
                    </div>
                    <div className="modal-body">
                        <div className="image-container">
                            <p>Original Image</p>
                            <img src={image}/>
                        </div>
                        <div className="image-container">
                            <p>New Image</p>
                            <ImageUploader
                              	withIcon={true}
                                buttonText='Choose images'
                                // @ts-ignore
                	            onChange={this.handleImageUpload}
                	            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                	            maxFileSize={5242880}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditModal;