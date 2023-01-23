import React, { useEffect, useState } from "react";
import "../css/admin.css";

export default function AdminUsers() {
    const init = {
        username: "",
        password: "",
        userType: "",
        firstName: "",
        lastName: "",
        userImg: "",
        organization: "",
    };

    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [modal, setModal] = useState(false);
    const [user, setUser] = useState(init);

    let style = { display: modal ? "block" : "none" };

    const [loading, setLoading] = useState(false);

    function modalHandler() {
        setModal(!modal);
    }

    const onSave = (e) => {
        e.preventDefault();
        fetch("https://medium-api-psi.vercel.app/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: user,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("saved");
                console.log(data);
            })
            .catch((err) => console.log(err));
        modalHandler();
        setUser(init);
    };

    useEffect(() => {
        setLoading(true);
        fetch("https://medium-api-psi.vercel.app/api/users")
            .then((response) => response.json())
            .then((dt) => {
                setData(dt.result);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return "Loading";
    return (
        <div>
            <div>
                <div
                    className="addUserModal"
                    style={style}
                    onClick={() => modalHandler()}
                >
                    <div
                        className="addUserModalBody"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <form>
                            <div className="mb-3">
                                <input
                                    className="newUserInput"
                                    type="text"
                                    placeholder="firstName"
                                    value={user.firstName}
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            firstName: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    className="newUserInput"
                                    type="text"
                                    placeholder="lastName"
                                    value={user.lastName}
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            lastName: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    className="newUserInput"
                                    type="text"
                                    placeholder="organization"
                                    value={user.organization}
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            organization: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    className="newUserInput"
                                    type="text"
                                    placeholder="username"
                                    value={user.username}
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            username: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    className="newUserInput"
                                    type="text"
                                    placeholder="password"
                                    value={user.password}
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            password: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    className="newUserInput"
                                    type="text"
                                    placeholder="userType"
                                    value={user.userType}
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            userType: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <button className="btn btn-dark" onClick={onSave}>
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <div className="col-3">
                        <button
                            type="button"
                            class="btn btn-success"
                            onClick={() => modalHandler()}
                        >
                            Add new user
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <div className="table-responsive">
                            <div className="table">
                                <thead>
                                    <th>№</th>
                                    <th>User Name</th>
                                    <th>Organization</th>
                                    <th>userType</th>
                                </thead>
                                <tbody>
                                    {error ? (
                                        <div>Error</div>
                                    ) : (
                                        data.map(
                                            (
                                                {
                                                    username,
                                                    organization,
                                                    userType,
                                                },
                                                index
                                            ) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{username}</td>
                                                        <td>{organization}</td>
                                                        <td>
                                                            {userType ? (
                                                                userType ==
                                                                "admin" ? (
                                                                    <span className="badge bg-success">
                                                                        Admin
                                                                    </span>
                                                                ) : (
                                                                    <span className="badge bg-danger">
                                                                        Not
                                                                        admin
                                                                    </span>
                                                                )
                                                            ) : (
                                                                ""
                                                            )}
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                        )
                                    )}
                                </tbody>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
