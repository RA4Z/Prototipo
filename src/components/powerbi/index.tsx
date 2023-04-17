import React from 'react';
import './style.css';

function PowerBI(props) {
  return (
    <div className="Power">
        <iframe className="LayoutBI" name="PowerBI" title="BI" src={props.src} frameBorder={0} allowFullScreen={true}></iframe>
    </div>
  );
}
  
  export default PowerBI;