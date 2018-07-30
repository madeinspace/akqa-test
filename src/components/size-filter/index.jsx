import React, { Component } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import style from './size-filter.scss';


class SizeFilter extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          dropDownValue: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen,
        }));
    }

    handleChange = (event) => {
        const { onChange } = this.props;
        this.setState({
            dropDownValue: event.currentTarget.textContent === 'ALL' ? '' : event.currentTarget.textContent,
        });
        onChange(event.currentTarget.textContent);
    }

    render() {
        const { sizes } = this.props;
        const { dropdownOpen, dropDownValue } = this.state;
        const menu = (
            <Dropdown size="sm" isOpen={dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret className={style.filters}>
                {dropDownValue || 'Filter by size'}
                </DropdownToggle>
                <DropdownMenu>
                {
                    sizes.map(size => (
                        <DropdownItem key={size} onClick={this.handleChange}>
                            {size}
                        </DropdownItem>
                    ))
                }
                </DropdownMenu>
            </Dropdown>
        );
        return (
            <div>
                {menu}
            </div>
        );
    }
}

export default SizeFilter;
