const HelloWorld1 = (props) => {

    const date = new Date().toLocaleDateString()
    const horus = new Date().toLocaleTimeString()

 

    return <><p>{props.text} {date} {horus} </p></>

}

export default HelloWorld1