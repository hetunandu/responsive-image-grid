import React, { Component } from 'react';
import ImageCard from './ImageCard';
import EditModal from './EditModal';
import './Grid.css'

interface Props {}
interface State {
    images: Array<string>,
    editing: false | string,
}

class Grid extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                'https://picsum.photos/id/1/500/300',
                'https://picsum.photos/id/2/500/300',
                'https://picsum.photos/id/3/500/300',
                'https://picsum.photos/id/4/500/300',
                'https://picsum.photos/id/5/500/300',
                'https://picsum.photos/id/6/500/300',
                'https://picsum.photos/id/7/500/300',
            ],
            editing: false,
        }

        this.handleDeleteImage = this.handleDeleteImage.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleUpdateImage = this.handleUpdateImage.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleDeleteImage(image: string) {
        const { images } = this.state;
        const newImages = images.filter(i => i !== image)
        this.setState({ images: newImages })
    }
    handleEditClick(image: string) {
        this.setState({ editing: image })
    }
    handleUpdateImage(image, newImage) {
        const { images } = this.state;
        const newImages = images.map(i => {
            if(i === image) return newImage
            return i
        })
        this.setState({ images: newImages })
        this.handleCloseModal();
    }
    handleCloseModal() {
        this.setState({ editing: false })
    }
    render() {
        const { images, editing } = this.state;
        return (
            <React.Fragment>
                <div className="grid">
                    {images.map(i => (
                        <ImageCard 
                            image={i} 
                            key={i}
                            onDeleteClick={this.handleDeleteImage}
                            onEditClick={this.handleEditClick}
                        />
                    ))}            
                </div>
                {editing !== false && (
                  <EditModal 
                    image={editing}
                    onUpdateImage={this.handleUpdateImage}
                    onCloseModal={this.handleCloseModal}
                  />  
                )}
            </React.Fragment>
        )
    }
}

export default Grid;