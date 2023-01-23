import React, { useEffect, useState } from 'react'
// import { data, error }

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [error, setError] = useState();

    const [loading, setLoading] = useState(false);


    useEffect(() => {

        console.log("First");

        setLoading(true)
        fetch("https://medium-api-psi.vercel.app/api/news")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.result);
                setData(dt.result);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, []);

    if (loading) return "Loading";

    return (
        <div><div className='row my-4'>
            <div className='col-md-4'>
                <div className='card p-3'>
                    <div className='card-title'>Users</div>
                    <div className='d-flex justify-content-between align-items-center'>

                        <i
                            className='bi bi-people'
                            style={{ fontSize: "40px" }}
                        ></i>
                        <h1>4500</h1>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card p-3'>
                    <div className='card-title'>News</div>
                    <div className='d-flex justify-content-between align-items-center'>

                        <i
                            className='bi bi-newspaper'
                            style={{ fontSize: "40px" }}
                        ></i>
                        <h1>9000</h1>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card p-3'>
                    <div className='card-title'>Category</div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <i
                            className='bi bi-tags'
                            style={{ fontSize: "40px" }}
                        ></i>
                        <h1>20</h1>
                    </div>
                </div>
            </div>
        </div>
            <div className='row p-3'>
                {/* <Barchart /> */}
            </div>
            <div className='row p-3'>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <th>№</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>IsTrending</th>
                        </thead>
                        <tbody>
                            {
                                error ? (<div>Error</div>) : (
                                    data.map(({ title, isTrending, category }, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{title}</td>
                                                <td>{category}</td>
                                                <td>{isTrending ? (<span className='badge bg-success'>Yes</span>) : (<span className='badge bg-danger'>No</span>)}</td>
                                            </tr>)
                                    })
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div></div>
    )
}
