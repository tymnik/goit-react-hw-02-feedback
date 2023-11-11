import { Component } from 'react';
import styles from './FeedbackOptions.module.css'

class FeedbackOptions extends Component {
  render() {
    const { options } = this.props;
    return (
      <div className={styles.buttons}>
        {options.map(option => (
          <button
            key={option}
            onClick={() => this.props.onLeaveFeedback(option)}
            className={styles.btn}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
