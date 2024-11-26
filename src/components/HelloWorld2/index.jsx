const HelloWorld2 = () => {
    const date = new Date().toLocaleDateString()
    const horus = new Date().toLocaleTimeString()

    return <p>Hello, World {date} {horus} </p>
}

export default HelloWorld2