import React from 'react';

function formulaire() {
  return (<div>
<InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Number</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">EMAIL</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>

  </div>);
}

export default formulaire;
