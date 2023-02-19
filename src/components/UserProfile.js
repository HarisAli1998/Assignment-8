import App from "../App";

// ............................ TASK-2.........................
const UserProfile = (props) => {
    return(
        <div>
            <h2>{props.name}</h2>
            <h2>{props.location}</h2>
            <h2>{props.profileImage}</h2>
        </div>
    )
}

export default UserProfile;