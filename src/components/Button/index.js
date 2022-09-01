import classNames from 'classnames/bind';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    disable = false,
    text = false,
    small = false,
    large = false,
    onClick,
    ...anotherProp
}) {
    let Component = 'button';

    const prop = {
        onClick,
        ...anotherProp,
    };

    if (disable) {
        delete prop.onClick;
    }

    if (to) {
        prop.to = to;
        Component = Link;
    } else if (href) {
        prop.href = href;
        Component = 'a';
    }

    return (
        <Component
            className={cx('wrapper', {
                text,
                primary,
                outline,
                disable,
                text,
                small,
                large,
            })}
            {...prop}
        >
            {children}
        </Component>
    );
}

export default Button;
