import React from 'react';
import Image from 'next/image';

function BlockImage( { url, width, height, alt }) {

    return (
        <Image alt={alt} className="rounded-md mx-auto" width={width} height={height} src={url}/>
    );
}

export default BlockImage;