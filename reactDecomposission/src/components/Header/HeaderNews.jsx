export const HeaderNews = ({imgAdress, title}) => {
    return (
        <div className="news">
            <div className="news-img-container">
                <img className="news-img" src={imgAdress} />
            </div>
            <p>{title}</p>
        </div>
    )
}
