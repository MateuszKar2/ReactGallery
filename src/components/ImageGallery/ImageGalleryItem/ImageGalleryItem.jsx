import React,{Component} from "react"
import css from "./ImageGalleryItem.module.css"
import { PropTypes } from 'prop-types';

export class ImageGalleryItem extends Component {
    static defaultProps = {
        is: 'no id',
        miniature: 'no miniature',
        url: 'no url',
        alt: 'no alt',
    };

    render() {

        return(
                <li
                className={css.galleryItem}
                id={this.props.id}
                onClick={this.props.onClick}
                >
                    <img 
                    src={this.props.miniature} 
                    className={css.galleryItemImage}
                    alt={this.props.alt} 
                    />
                </li>
            );              
    }
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    url: PropTypes.string,
    miniature: PropTypes.string,
    alt: PropTypes.string,
}

