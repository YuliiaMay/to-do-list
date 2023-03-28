import React from "react";
// import PropTypes from 'prop-types';

const Filter = ({ filter, onFilterChange }) => (
    <label>
        Filter➡️ 
        <input
            type="text"
            value={filter}
            onChange={onFilterChange}
        />
    </label>
);


// Filter.propTypes = {
//     filter: PropTypes.string.isRequired,
//     onFilerChange: PropTypes.func.isRequired,
// };


export default Filter;