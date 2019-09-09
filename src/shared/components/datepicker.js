import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export class Datepicker extends Component {
    static propTypes = {

    }

    
    render() {
        return (
            <div>
                <DateRangePicker
                                className="d-flex"
                                isRTL={true}
                                block={true}
                                startDate={this.props.startDate} // momentPropTypes.momentObj or null,
                                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                endDate={this.props.endDate} // momentPropTypes.momentObj or null,
                                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                focusedInput={this.props.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={this.props.focusedInput} // PropTypes.func.isRequired,
                            />
            </div>
        )
    }
}

export default datepicker
