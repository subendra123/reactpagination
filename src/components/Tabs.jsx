import React,{useState} from 'react'
import "./Tabs.css"

const Tabs = () => {
    const[toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <>
   <div className="container">
    <div className="bloc_tabs">
        <div onClick={ () => toggleTab(1)} className={toggleState === 1 ? "tabs active_tabs" : "tabs"}>Tab 1</div>
        <div onClick={ () => toggleTab(2)} className={toggleState === 2 ? "tabs active_tabs" : "tabs"}>Tab 2</div>
        <div onClick={ () => toggleTab(3)} className={toggleState === 3 ? "tabs active_tabs" : "tabs"}>Tab 3</div>
        </div>

        <div className="content_tabs">

        <div className={toggleState === 1 ? "content active_content" : "content"}>
            <h2>Content 1</h2>
            <hr />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias cumque voluptatibus nihil animi numquam? Consequatur minus tenetur nemo nihil, natus commodi cumque asperiores illo, quae sequi dignissimos delectus reprehenderit blanditiis.</p>

        </div>

        <div className={toggleState === 2 ? "content active_content" : "content"}>
        <h2>Content 2</h2>
        <hr />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias cumque voluptatibus nihil animi numquam? Consequatur minus tenetur nemo nihil, natus commodi cumque asperiores illo, quae sequi dignissimos delectus reprehenderit blanditiis.</p>

    </div>

    <div className={toggleState === 3 ? "content active_content" : "content"}>
            <h2>Content 3</h2>
            <hr />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias cumque voluptatibus nihil animi numquam? Consequatur minus tenetur nemo nihil, natus commodi cumque asperiores illo, quae sequi dignissimos delectus reprehenderit blanditiis.</p>

        </div>

        </div>
   </div>
    </>
  )
}

export default Tabs