import React from 'react';
import className from 'className';

export default class FontAwesomeIcon extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        let classes = {
            'fa': true,
            'fa-spin': this.props.spin
        };

        classes['fa-' + this.props.icon] = true;

        if (this.props.size) {
            classes['fa-' + this.props.size] = true;
        }

        return <i className={className(classes)}></i>;
    }
}

FontAwesomeIcon.defaultProps = {
    icon: '',
    size: false,
    spin: false
};
