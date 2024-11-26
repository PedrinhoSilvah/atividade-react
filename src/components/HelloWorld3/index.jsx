import React from "react";

class HelloWorld3 extends React.Component {
    
    

    render() {
        const date = new Date().toLocaleDateString()
        const horus = new Date().toLocaleTimeString()

        return <p>HelloWorld {date} {horus} </p>
    }
}

export default HelloWorld3
