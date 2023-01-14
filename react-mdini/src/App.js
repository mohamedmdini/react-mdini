import react from "react"
import keep from './profile/images/keep.jpg'
import Popup from 'reactjs-popup';



export default function app () {
  const [text, settext]= react.useState("")
  function handletext(event){
const newtext = event.target.value
settext(newtext)
  }
  return(
  <div className="container" >
    <input type = "text"placeholder="type text here" className="input" onChange={handletext}
    value={text}/>
    <div className="image-wrapper">
      <img src={keep} alt="" className="image"/>
      <h1 className="image-text">{text}
        <p>My name is Mohamed mdini i work in the national registre of the entreprises in mean while i m learning how web developpement , furthemore i m an acountant trainer and a bodybuilder </p>
      </h1>
    <div className="button">
  
      <PopupExample/>
      
    </div>
    </div>
    </div>
  
  
  )
}
const PopupExample = () => (
  <Popup trigger={<button className="button">do not clik me</button>} >
  {close => (
    <div style={{backgroundColor:"white",marginTop:"-160%",marginLeft:"192%",color:"black",height:"46px",width:"220px",paddingLeft:"10px"}}>
      Mohamed mdini's profile !!
      <a className="close" onClick={close}>
          &times;
        </a>
    </div>
  )}
  </Popup>
);
