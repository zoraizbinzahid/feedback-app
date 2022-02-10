import React, { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import Rating from './Rating';

function FeedbackForm({ handleAdd }) {
    const [text, SetText] = useState('');
    const [rating, SetRating] = useState(10);
    const [btnDisabled, SetBtnDisabled] = useState(true);
    const [message, SetMessage] = useState('');

    const handleTextChange = (e) => {
        if(text === ''){
            SetBtnDisabled(true)
            SetMessage(null)
        }else if(text !== '' && text.trim().length <= 10) {
            SetBtnDisabled(true)
            SetMessage('Text must be at least 10 characters')
        } else {
            SetBtnDisabled(false)
            SetMessage(null)
        }
        SetText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback);

            SetText('')
        }
    }

  return <Card>
         <form onSubmit={handleSubmit}>
             <h2>How would you rate our services with us?</h2>
             <Rating select={(rating) => SetRating(rating)}/>
             <div className="input-group">
                 <input onChange={handleTextChange} type="text" value={text} placeholder='write a review'/>
                 <Button type="submit"isDisabled={btnDisabled}>Send</Button>
             </div>
             {message && <div className='message'>{message}</div>}
         </form>
        </Card>;
}

export default FeedbackForm;
