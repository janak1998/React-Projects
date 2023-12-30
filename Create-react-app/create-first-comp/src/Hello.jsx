function Hello() {

  let myName = 'Janak';
  let number = 56;
  let fullName = () => {
    return ('Janak Bohra');
  }

  return(
    <h3>MessageNo: {number}. I am your master {fullName()}</h3>
  )
}

export default Hello;