const NasaInfo = ({ nasaData }) => {
    return <div>
        <img src={nasaData.hdurl} className="nasa-image" />
        <span>{nasaData.date}</span>
        <h2>{nasaData.title}</h2>
        <p>{nasaData.explanation}</p>
        <span>{nasaData.copyright}</span>
    </div>
};

export default NasaInfo;