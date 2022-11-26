import React, { useEffect, useState } from 'react';
import galleryitems from '../constants/gallery';

function Gallery(props) {
    const [isImg, setImg] = useState('')

    const callImage = () => {
        const number = Math.floor(Math.random() * 20 + 1);
        const selected = galleryitems.find(item => item.id === number);
        setImg(selected.image)
    }

    useEffect(() => {
        setInterval(callImage, 500);
    }, [])

    return (
        <div className='gallery_window'>
            <img className='gallery_item' src={isImg} />
        </div>
    )
}

export default Gallery;
