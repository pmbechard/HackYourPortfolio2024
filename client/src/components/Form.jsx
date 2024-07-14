import React, { useState } from 'react';

const Form = () => {
  const [err, setErr] = useState(null);

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [p1_title, setP1_title] = useState('');
  const [p1_description, setP1_description] = useState('');
  const [p1_img, setP1_img] = useState('');
  const [p2_title, setP2_title] = useState('');
  const [p2_description, setP2_description] = useState('');
  const [p2_img, setP2_img] = useState('');
  const [p3_title, setP3_title] = useState('');
  const [p3_description, setP3_description] = useState('');
  const [p3_img, setP3_img] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErr(null);
    try {
      const data = await fetch('http://localhost:4000/api/info', {
        method: 'POST',
        body: JSON.stringify({
          name,
          tagline,
          p1_title,
          p1_description,
          p1_img,
          p2_title,
          p2_description,
          p2_img,
          p3_title,
          p3_description,
          p3_img,
          github,
          linkedin,
          twitter,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await data.json();
      if (data.status != 200) setErr(data.error);
      else location.reload();
    } catch (e) {
      setErr(e.message);
    }
    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1>Site Info</h1>
            <input
              type='text'
              name='name'
              placeholder='Name'
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='text'
              name='tagline'
              placeholder='Tagline'
              required
              onChange={(e) => setTagline(e.target.value)}
            />
            <input
              type='text'
              name='p1_title'
              placeholder='Project 1 Title'
              required
              onChange={(e) => setP1_title(e.target.value)}
            />
            <input
              type='text'
              name='p1_description'
              placeholder='Project 1 Description'
              required
              onChange={(e) => setP1_description(e.target.value)}
            />
            <input
              type='text'
              name='p1_img'
              placeholder='Project 1 Image Link'
              required
              onChange={(e) => setP1_img(e.target.value)}
            />
            <input
              type='text'
              name='p2_title'
              placeholder='Project 2 Title'
              required
              onChange={(e) => setP2_title(e.target.value)}
            />
            <input
              type='text'
              name='p2_description'
              placeholder='Project 2 Description'
              required
              onChange={(e) => setP2_description(e.target.value)}
            />
            <input
              type='text'
              name='p2_img'
              placeholder='Project 2 Image Link'
              required
              onChange={(e) => setP2_img(e.target.value)}
            />
            <input
              type='text'
              name='p3_title'
              placeholder='Project 3 Title'
              required
              onChange={(e) => setP3_title(e.target.value)}
            />
            <input
              type='text'
              name='p3_description'
              placeholder='Project 3 Description'
              required
              onChange={(e) => setP3_description(e.target.value)}
            />
            <input
              type='text'
              name='p3_img'
              placeholder='Project 3 Image Link'
              required
              onChange={(e) => setP3_img(e.target.value)}
            />
            <input
              type='text'
              name='github'
              placeholder='Github Link'
              onChange={(e) => setGithub(e.target.value)}
            />
            <input
              type='text'
              name='linkedin'
              placeholder='LinkedIn Profile'
              onChange={(e) => setLinkedin(e.target.value)}
            />
            <input
              type='text'
              name='twitter'
              placeholder='Twitter Page'
              onChange={(e) => setTwitter(e.target.value)}
            />
            <input type='submit' />
            {err && <p className='err'>{err}</p>}
          </>
        )}
      </form>
    </>
  );
};

export default Form;
