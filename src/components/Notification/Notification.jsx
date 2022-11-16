import { PropTypes } from 'prop-types';
import { NotTitle } from './Notification.styled';

export default function Notification({ message }) {
    return <NotTitle>{message}</NotTitle>
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};