const User = ({name}) => {
    return(
        <div className="user-card">
            <h2>{name}</h2>
            <h2>Location: Pune</h2>
            <h2>Contact: nishant@gmail.com</h2>
        </div>
    )
}

export default User;