import './style.css';

function PowerBI(props) {
  return (
    <div className="Power">
        <iframe className="LayoutBI" name="PowerBI" title="BI" src={props.src} frameborder="0" allowFullScreen="true"></iframe>
    </div>
  );
}
  
  export default PowerBI;