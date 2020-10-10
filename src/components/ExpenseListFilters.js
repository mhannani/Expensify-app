import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from "../actions/filters";
import {sortByDate} from "../actions/filters";
import {sortByAmount} from "../actions/filters";

const ExpenseListFilters = (props)=>(
    <form className={'form-inline'}>
        <input name='filter' type="text" className={'expense-filter'} value={props.filters.text}
               onChange={(e) => {
                   props.dispatch(setTextFilter(e.target.value));
               }}/>
        <div className="form-group">
            <select value={props.filters.sortBy}  className="custom-select"
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            props.dispatch(sortByDate());
                        } else if (e.target.value === 'amount') {
                            props.dispatch(sortByAmount());
                        }
                    }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    </form>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);