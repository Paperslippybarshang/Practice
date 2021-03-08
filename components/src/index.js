import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      {/* Nested componenet becomes a child props */}
        <CommentDetail 
          user="Sam" 
          date="Today at 4:40PM" 
          comment="Nice blog post!"
          profile={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          user="Jane" 
          date="Yesterday at 2:21PM"
          comment="Are you kidding me?"
          profile={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          user="Tim"
          date="1 month ago"
          comment="Hasta La Vista Baby!"
          profile={faker.image.image()}
        />
      </ApprovalCard>
      
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))