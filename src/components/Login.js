import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [user, setUser] = useState();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };
    const handleSubmit = () => {};
    return (
        <React.Fragment>
            <div className="container">
                <div className="row d-flex align-items-center" style={{ height: '75vh' }}>
                    <div className="card shadow p-4 bg-body rounded">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input type="email" name="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input type="password" name="password" onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;
