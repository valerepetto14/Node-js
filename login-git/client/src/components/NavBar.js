const NavBar = (props) => {
    return (
        <div className="nav">
            <img
              src={props.user.photos[0].value}
              alt=""
              className="avatar"
            />
            <h2>{props.user.displayName}</h2>
        </div>
    )
}

export default NavBar;