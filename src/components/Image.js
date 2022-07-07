import './Image.css'

function Image({ imageInfo }){
    const source = imageInfo.url;
    const width = imageInfo.width;
    const height = imageInfo.height;

    return(
        <div className="imageContainer">
            <img src={source} width={width} height={height} alt="" onClick={() => navigator.clipboard.writeText(source)}></img>
        </div>
    );
}

export default Image; 