import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import {connect} from "react-redux";

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description :'',
            amount: props.expense ? ((props.expense.amount) / 100).toString() :'',
            note: props.expense ? props.expense.note :'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused : null,
            error: false
        };
    }

    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>(
            {description})
        )
    }
    onAmountChange = (e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d+(\.\d{0,2})?$/)){
            this.setState(()=>(
                {amount}
            ))
        }

    }
    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState(()=>(
            {note}
        ))
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(()=>(
                {createdAt}
            ))
        }
    }
    onFocusedChange = ({focused})=>{
        this.setState(()=>(
            {focused}
        ))
    }
    addExpense = (e)=>{
        e.preventDefault()
        if(e.target.amount.value && e.target.description.value && e.target.note.value){
            this.setState(()=>({
                error: false
            }))
            // Dispatch the new expense
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }


        else{
            this.setState(()=>({
                error: true
            }))
        }
    }
    render(){
        return(
            <div className={'wrapper'}>
                <form className={'form-wrapper'} onSubmit={this.addExpense}>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" autoFocus name={'description'}
                                   className="form-control " value={this.state.description}
                                   placeholder="Description" onChange={this.onDescriptionChange}/>
                        </div>
                        <div className="col">
                            <input type="text" name={'amount'}  className="form-control"
                                   placeholder="Amount" value={this.state.amount}
                                   onChange={this.onAmountChange}/>
                        </div>
                        <div className="col">
                                <SingleDatePicker
                                    date={this.state.createdAt} // momentPropTypes.momentObj or null
                                    onDateChange={this.onDateChange} // PropTypes.func.isRequired
                                    focused={this.state.focused} // PropTypes.bool
                                    onFocusChange={this.onFocusedChange} // PropTypes.func.isRequired
                                    id="your_unique_id" // PropTypes.string.isRequired,
                                    numberOfMonths={1}
                                    isOutsideRange = {()=> false }
                                />
                        </div>
                    </div>
                    <div className="form-row">
                        <textarea className="form-control" name={'note'} placeholder={'Add note here'}
                                  value={this.state.note}
                                  onChange={this.onNoteChange}
                        >
                        </textarea>
                    </div>
                    <div>
                        <button type="submit" className="button-wrapper btn btn-primary mb-2">
                            Add Expense
                        </button>
                        <div>
                            {this.state.error && <p className={'text-danger'}>Please fill in the required fields above</p>}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
export default connect(mapStateToProps)(ExpenseForm)

