import React, { useEffect, useState } from "react";
// import { data, error }

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [error, setError] = useState();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://medium-api-psi.vercel.app/api/news")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.result);
                setData(dt.result);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return "Loading";

    return (
        <div>
            <div className="row p-3">{/* <Barchart /> */}</div>
            <div className="row p-3">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <th>№</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>IsTrending</th>
                        </thead>
                        <tbody>
                            {error ? (
                                <div>Error</div>
                            ) : (
                                data.map(
                                    (
                                        { title, isTrending, category },
                                        index
                                    ) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{title}</td>
                                                <td>{category}</td>
                                                <td>
                                                    {isTrending ? (
                                                        <span className="badge bg-success">
                                                            Yes
                                                        </span>
                                                    ) : (
                                                        <span className="badge bg-danger">
                                                            No
                                                        </span>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
