import React from "react";

const BookMark = (props) => {
    const {status, user} = props;
    //console.log(user.bookmark);
    return (
        <>
        {status
            ? <i className="bi bi-bookmark-check-fill" onClick={() => props.bookmarkUser(user.bookmark)}></i>
            : <i className="bi bi-bookmark" onClick={() => props.bookmarkUserStatus(status)}></i>}
        </>
    )
};

export default BookMark;