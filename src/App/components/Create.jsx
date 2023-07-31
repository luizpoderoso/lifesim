import { useEffect, useState } from 'react';
import './css/Create.css';

const Create = ({ setProfile }) => {
  const texts = (require('../../api/texts/create.json'));
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => { name.length === 1 && name !== name.toUpperCase() && setName(name.toUpperCase()); }, [name]);
  useEffect(() => { surname.length === 1 && surname !== surname.toUpperCase() && setSurname(surname.toUpperCase()); }, [surname]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!gender)  {
      alert(texts.alerts.gender);
      return;
    } else if (!country) {
      alert(texts.alerts.country);
      return
    }

    setProfile({
      name: name,
      surname: surname,
      gender: gender,
      country: country
    });
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-zinc-300">
      <div className="w-[700px] h-fit p-4 rounded-xl shadow-xl shadow-zinc-900 bg-zinc-900">
        <div>
          <h1 className="text-4xl text-center select-none">{texts.title}</h1>
          <hr className="mt-2 border-zinc-800"></hr>
        </div>
        <form onSubmit={handleSubmit} className="text-lg mx-14 my-4 space-y-4">
          <div className="flex flex-row justify-between">
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={texts.placeholders.name} className="px-1"></input>
            <input required value={surname} onChange={(e) => setSurname(e.target.value)} placeholder={texts.placeholders.surname} className="px-1"></input>
          </div>
          <select defaultValue='' onChange={(e) => setGender(e.target.value)}>
            <option value=''>...</option>
            <option value='man'>{texts.gender.man}</option>
            <option value='woman'>{texts.gender.woman}</option>
          </select>
          <select defaultValue='' onChange={(e) => setCountry(e.target.value)}>
            <option value=''>...</option>
            <option value='brazil'>{texts.countries.brazil}</option>
          </select>
          <button id='submit' type='submit' className='w-full'>{texts.submit}</button>
        </form>
      </div>
    </div>
  );
};

export default Create;