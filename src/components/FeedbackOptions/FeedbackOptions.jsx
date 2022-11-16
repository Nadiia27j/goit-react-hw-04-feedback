import { PropTypes } from 'prop-types';
import { BoxButton, ButtonItem, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <BoxButton>
            {options.map(option => (
              <ButtonItem key={option}>
                <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
              </ButtonItem>
            ))}
        </BoxButton>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}