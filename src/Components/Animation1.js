import { React } from 'react';

function Animation1(props) {
    return (
        <div className="App-animation" >
                <img src={props.logo} className="App-logo App-logo-2" alt="logo" />
                <img src={props.logo} className="App-logo" alt="logo" style={{background: "red", animationDelay: "200ms"}} />
                <img src={props.logo} className="App-logo App-logo-2" alt="logo" style={{animationDelay: "400ms"}}/>
                <img src={props.logo} className="App-logo" alt="logo" style={{background: "red", animationDelay: "600ms"}} />
        </div>
    );
}

export { Animation1 }