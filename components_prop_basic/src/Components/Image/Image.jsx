import "./Image.css"

const Image = ({source, alt}) => {
    return <img src={source} alt={alt} />;
};

export default Image;