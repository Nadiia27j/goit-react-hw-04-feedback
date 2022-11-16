import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import  Notification  from './Notification/Notification';

export function App()  {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBed] = useState(0);

  
  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBed(prevState => prevState + 1);  
        break;
        
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
   return Math.round((good / countTotalFeedback()) * 100);
  };

  const option = ['good', 'neutral', 'bad'];
  const total =  countTotalFeedback();

  return (
    <>
    <Section title="Please leave feedback">
      <FeedbackOptions  
       options={option} 
       onLeaveFeedback={addFeedback} 
      />
    </Section>
      
    <Section title="Statistics">
      {total ? (
         <Statistics 
         good={good}
         neutral={neutral}
         bad={bad}
         total={countTotalFeedback()}
         positivePercentage={countPositiveFeedbackPercentage()}
         />
      ) : (
      <Notification message='There is no feedback'></Notification>
    )}
    </Section>
  </>
  );
};
