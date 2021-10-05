const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),

    ])
}





const App = () => {
    return React.createElement(
        "div", 
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {name: 'Frito', animal: 'dog', breed: 'chiweenie'}),
            React.createElement(Pet, {name: 'speck', animal: 'dog', breed: 'australian sheperd'}),
            React.createElement(Pet, {name: 'dorian', animal: 'cat', breed: 'orange'}),
        ]
    );
};
ReactDOM.render(React.createElement(App), document.getElementById('root'));