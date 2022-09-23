const NavBar = (props) => {
    return (
        <div className="nav">
            <div className="name_img">
                <img
                src={props.user.photos[0].value}
                alt=""
                className="avatar"
                />
                <h2>{props.user.displayName}</h2>
            </div>
            <h2 id="name_app">Snaply</h2>
        </div>
    )
}

export default NavBar;