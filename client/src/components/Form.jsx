import React, { useState } from 'react';

const Form = () => {
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    try {
      const data = await fetch('http://localhost:4000/api/info', {
        method: 'POST',
      });
      const json = await data.json();
      if (data.status != 200) setErr(data.error);
    } catch (e) {
      setErr(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Site Info</h1>
        <input type='text' name='name' placeholder='Name' required />
        <input type='text' name='tagline' placeholder='Tagline' required />

        <input
          type='text'
          name='p1_title'
          placeholder='Project 1 Title'
          required
        />
        <input
          type='text'
          name='p1_description'
          placeholder='Project 1 Description'
          required
        />
        <input
          type='text'
          name='p1_img'
          placeholder='Project 1 Image Link'
          required
        />

        <input
          type='text'
          name='p2_title'
          placeholder='Project 2 Title'
          required
        />
        <input
          type='text'
          name='p2_description'
          placeholder='Project 2 Description'
          required
        />
        <input
          type='text'
          name='p2_img'
          placeholder='Project 2 Image Link'
          required
        />

        <input
          type='text'
          name='p3_title'
          placeholder='Project 3 Title'
          required
        />
        <input
          type='text'
          name='p3_description'
          placeholder='Project 3 Description'
          required
        />
        <input
          type='text'
          name='p3_img'
          placeholder='Project 3 Image Link'
          required
        />

        <input type='text' name='github' placeholder='Github Link' />
        <input type='text' name='linkedin' placeholder='LinkedIn Profile' />
        <input type='text' name='twitter' placeholder='Twitter Page' />

        <input type='submit' />
        {err && <p>{err}</p>}
      </form>
    </>
  );
};

export default Form;
