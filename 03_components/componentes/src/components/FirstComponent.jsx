import MyComponent from "./MyComponent"

const FirstComponent = () => {
    return (
        <div>
            <h2>Meu primeiro componente!</h2>
            {/* Eu estou aqui também */}
            <MyComponent />
        </div>
    )
}

export default FirstComponent