
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li key={number.toString()}>{numbers}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
//ReatDOM.render(<ul>{listItems}</ul>,document.getElementById('root'))
//ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))