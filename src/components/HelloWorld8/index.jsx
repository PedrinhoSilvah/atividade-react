const HelloWorld8 = ({ children }) =>   <h1>{children}</h1>;

export default () => {
    const date = new Date().toLocaleDateString()
    const horus = new Date().toLocaleTimeString()
    return(
        <HelloWorld8>Hello, World! {date} {horus} </HelloWorld8>
    )
    
} 
