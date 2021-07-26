import React from 'react';

const Film = ({name, url}) => {
    return(
        <>
        <li class="film"><a href={url}> {name} </a></li>
        </>
    )
};

export default Film;