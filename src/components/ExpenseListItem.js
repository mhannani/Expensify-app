import React from 'react';
import {connect} from "react-redux";
import {removeExpense} from '../actions/expenses'
const ExpenseListItem = ({dispatch, id, note, description, amount, createdAt})=>(
        <div className="card-restyled text-white bg-dark mb-3">
            <button type="button" className="close mr-3 mt-2" onClick={()=>{
                // DELETE AN EXPENSE
                dispatch(removeExpense(id))
            }}>
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="card-header text-center">
                <div className="row">
                    <div className="col">amount: ${amount}</div>
                    <div className="col">created at: {createdAt}</div>
                </div>

            </div>
            <div className="card-body">
                <h4 className="card-title">{note}</h4>
                <p className="card-text">{description}</p>
            </div>
        </div>
)
export default connect()(ExpenseListItem)