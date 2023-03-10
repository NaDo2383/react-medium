import React, { useEffect, useState } from "react";
import { Barchart } from "../components/barChart";
import AddingNews from "./addingNews";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AdminLogIn() {
    return (
        <div>
            <div className="navbar bg-dark flex-nowrap">
                <a href="#" className="navbar-brand">
                    Company Name
                </a>
                <input
                    type="text"
                    className="w-100 form-control bg-dark border-0"
                />
                <div className="nav">
                    <div className="nav-items">
                        <span className="text-light">Log Out</span>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="nav bg-light flex-column">
                            <div className="nav-items">
                                <a href="/admin" className="nav-link">
                                    Dashboard
                                </a>
                            </div>
                            <div className="nav-items">
                                <Link to="/addnews" className="nav-link">
                                    News
                                </Link>
                            </div>
                            <div className="nav-items">
                                <a href="/users" className="nav-link">
                                    User
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div>
                            <div className="row my-4">
                                <div className="col-md-4">
                                    <div className="card p-3">
                                        <div className="card-title">Users</div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <i
                                                className="bi bi-people"
                                                style={{ fontSize: "40px" }}
                                            ></i>
                                            <h1>4500</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card p-3">
                                        <div className="card-title">News</div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <i
                                                className="bi bi-newspaper"
                                                style={{ fontSize: "40px" }}
                                            ></i>
                                            <h1>9000</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card p-3">
                                        <div className="card-title">
                                            Category
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <i
                                                className="bi bi-tags"
                                                style={{ fontSize: "40px" }}
                                            ></i>
                                            <h1>20</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
