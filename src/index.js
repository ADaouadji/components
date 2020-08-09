import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail 
        author = "Sami"
        timeAgo = "Today at 4:45PM"
        content = "Super blog!"
        avatar = {faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
      <CommentDetail 
        author = "Alex"
        timeAgo = "Today at 5:05PM"
        content = "Top blog!"
        avatar = {faker.image.avatar()}
        />
        </ApprovalCard>

        <ApprovalCard>
      <CommentDetail 
        author = "Jane" 
        timeAgo = "Today at 6:05PM" 
        content = "Good blog!"
        avatar = {faker.image.avatar()}
        />
        </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
