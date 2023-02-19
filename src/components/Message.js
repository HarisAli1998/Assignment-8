// TASK-3
const Message = (props) => {
    const {isSuccess} = props;
    console.log(isSuccess);
    return(
        <>
            <h1>{ isSuccess ? "Success" : "Failer" }</h1> 
        </>
    )
}

export default Message;