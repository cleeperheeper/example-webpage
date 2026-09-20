function Card({info}) {

    function clickFavorite() {
        alert("clicked!")
    }

    return <div className="card">
        <div className="image">
            <img src={info.img} alt={info.title} />
            <div className="overlay">
                <button className="favorite-btn" onClick={clickFavorite}>
                    ♥
                </button>
            </div>
        </div>
        <div className="project-info">
            <h3>{info.title}</h3>
            <p>{info.timeline}</p>
        </div>
    </div>

}

export default Card