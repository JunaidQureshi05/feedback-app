import React, { useState, useContext, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';
function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedbackItem, setFeedbackEdit } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be atleast 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        text,
        rating,
      };
      if (feedbackEdit.edit == true) {
        updateFeedbackItem(feedbackEdit.item.id, newFeedBack);
        setFeedbackEdit({ item: {}, edit: false });
      } else {
        addFeedback(newFeedBack);
      }
      setText('');
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* Todo:Rting select component */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
