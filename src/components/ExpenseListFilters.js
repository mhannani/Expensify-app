import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from "../selectors/expenses";
import {setTextFilter} from "../actions/filters";

const ExpenseListFilters = (props)=>(
    <div className={'expense-filter'}>
        <input name='filter' type="text" onChange={(e)=>{
        props.dispatch(setTextFilter(e.target.value))
    }}/>
        <div className="btn-group">
            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                Action
            </button>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state)=>{
    return {
        filters: state.filters
    }
}
export default connect(
    mapStateToProps
)(ExpenseListFilters);