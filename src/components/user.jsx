import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (props) => {
    const { user, bookmarkUserStatus } = props;
    return (
        <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>
                            {user.qualities.map((qual) => (
                                <Qualitie key={qual._id} _id={qual._id} color={qual.color} name={qual.name} />
                            ))}
                        </td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate} / 5</td>
                        <td>
                            <BookMark key={user._id} bookmarkUser={bookmarkUserStatus} status={user.bookmark}/>
                        </td>
                        <td>
                            <button
                                onClick={() => props.deleteUser(user._id)}
                                className="btn btn-danger"
                            >
                                delete
                            </button>
                        </td>
                    </tr>
    )
};

export default User;