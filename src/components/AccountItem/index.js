import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6b9bde49b42f08aeff1439027b75243b~c5_100x100.jpeg?x-expires=1662177600&x-signature=EZA0J0apwPruBuYB2RtdnBNQ7AI%3D' alt='Vuuuu' />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyen Hoang Vu</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
            </h4>
            <span className={cx('username')}>nguyenhoangvu</span>
        </div>
    </div>;
}

export default AccountItem;
