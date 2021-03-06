import React from 'react';

import './item-list.css';

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props;
    if (!data) {
        return (
            <span>data is not exist</span>
        )
    }
    const items = data.map(( item ) => {
        const { id } = item;
        const label = renderLabel(item);

        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
            )
        });

    return (
        <ul className="item-list card bg-secondary mb-3 list-group list-group-flush">
            {items}
        </ul>
        )
};

export default ItemList;


