import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Data from "./data/data";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from './pages/About';
import AbouticonLink from './components/AbouticonLink';



function App() {
  const [feedback, SetFeedback] = useState(Data)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    SetFeedback([newFeedback, ...feedback])
  }


  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure?')){
      SetFeedback(feedback.filter((item) => item.id !== id ))
    }
  }
  return (
    <>
    <BrowserRouter>
      <Header text='Feedback UI' />
      <div className="container">
        <Routes>
          <Route exact path='/' element={
            <>
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </>
          }></Route>
          <Route path='/about' element={<About />}/>
        </Routes> 
      <AbouticonLink />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
