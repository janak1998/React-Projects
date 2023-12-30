function Random(){
let number = Math.random() * 100;
return (
  <p style={{ 'background': '#cdafaf' }}>Random number is: {Math.round(number)}</p>
)
}

export default Random;