import React, { useEffect, useState } from 'react'
import { Barchart } from '../components/barChart';


export default function AdminLogIn() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true)
        fetch("http://192.168.1.50:4040/news")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.news);
                setData(dt.news);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, []);

    if (loading) return "Loading";
    // if (error) return "Error"

    return (
        <div>


            <div className='navbar bg-dark flex-nowrap'>
                <a href='#' className='navbar-brand'>Company Name</a>
                <input type="text" className='w-100 form-control bg-dark border-0' />
                <div className='nav'>
                    <div className='nav-items'>
                        <span className='text-light'>Log Out</span>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='nav bg-light flex-column'>
                            <div className='nav-items'>
                                <a className='nav-link'>Dashboard</a>
                            </div>
                            <div className='nav-items'>
                                <a className='nav-link'>News</a>
                            </div>
                            <div className='nav-items'>
                                <a className='nav-link'>User</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='row my-4'>
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
                            <Barchart />
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
                                        {data.map(({ _id, title, isTrending, category }, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{title}</td>
                                                    <td>{category}</td>
                                                    <td>{isTrending ? (<span className='badge bg-success'>Yes</span>) : (<span className='badge bg-danger'>No</span>)}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
