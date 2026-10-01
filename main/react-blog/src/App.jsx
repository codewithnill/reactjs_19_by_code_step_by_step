import { useState } from 'react';
function App() {


  const [gender, setGender] = useState('female');
  const [city, setCity] = useState('dhaka');
  return (
    <div >
      <h1>Handle radio and dropdown</h1>
      <h3>Select gender</h3>
      <input type="radio" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} value="male" name="gender" id="male" /> <label htmlFor="male">Male</label> <br />
      <input type="radio" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} value="female" name="gender" id="female" /> <label htmlFor="female">Female</label> <br />
      <input type="radio" checked={gender === 'other'} onChange={(e) => setGender(e.target.value)} value="other" name="gender" id="other" /> <label htmlFor="other">Other</label>

      <h4>Selected Gender: {gender}</h4>
      {/* checked attribute is used to set the initial state of the radio button based on the value of the gender state variable */}


      <h3>Select city</h3>
      <select defaultValue="dhaka" onChange={(e) => setCity(e.target.value)}>
        <option value="dhaka">Dhaka</option>
        <option value="chittagong">Chittagong</option>
        <option value="sylhet">Sylhet</option>
        <option value="rajshahi">Rajshahi</option>
      </select>
      <h4>Selected City: {city}</h4>






    </div>
  );
}

export default App;