import React from 'react';
import {connect} from "react-redux";
import {editExpense, startRemoveExpense} from '../actions/expenses';
import {Link} from "react-router-dom";
import moment from "moment";
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt })=>(
        <div className={`card-restyled text-white mb-3 bg-info`}>
            <ul className="list-inline float-right m-0">
                <li className="list-inline-item">
                    <Link to={`/editExpense/${id}`}>
                        <button className="btn btn-success btn-sm rounded-5" type="button" data-toggle="tooltip"
                                data-placement="top" title="Edit" onClick={() => {
                            dispatch(editExpense({id}));
                        }}><i className="fa fa-edit"></i></button>
                    </Link>
                </li>
                <li className="list-inline-item">
                    <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip"
                            data-placement="top" title="Delete" onClick={() => {
                        dispatch(startRemoveExpense({ id }));
                    }}><i className="fa fa-trash"></i></button>
                </li>
            </ul>
            <div className="card-header text-center">
                <div className="row">
                    <div className="col">amount: ${amount}</div>
                    <div className="col">created at: {moment(createdAt).format('L')}</div>
                </div>

            </div>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
)
export default connect()(ExpenseListItem);