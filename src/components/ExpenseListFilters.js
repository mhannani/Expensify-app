import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from "../actions/filters";
import {sortByDate} from "../actions/filters";
import {sortByAmount} from "../actions/filters";
import {DateRangePicker} from 'react-dates';
import {setStartDate} from "../actions/filters";
import {setEndDate} from "../actions/filters";

class ExpenseListFilters extends React.Component{
    state = {
        focused:null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (focused) => {
        this.setState(() => ({ focused }));
    }
    render(){
        return (
            <form className={'form-inline'}>
            <input name='filter' type="text" className={'expense-filter'} value={this.props.filters.text}
            onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value));
            }}/>
            <div className="form-group">
            <select value={this.props.filters.sortBy} className="custom-select"
                onChange={(e) => {
                    if (e.target.value === 'date') {
                        this.props.dispatch(sortByDate());
                    } else if (e.target.value === 'amount') {
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focused}
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    reopenPickerOnClearDates


                />
            </div>
            </form>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
export default connect(mapStateToProps)(ExpenseListFilters)


