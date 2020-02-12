const Lead = data => {
    return `
        <h2 style="color: #E05B50">New Real Estate Form Lead</h2>
        <br />

        <span style="font-weight: bold;">Condition of Property: </span>${data.type} <br />
        <span style="font-weight: bold;">Type of Property: </span>${data.condition} <br />
        <span style="font-weight: bold;">Value of Property: </span>${data.value} <br />
        <span style="font-weight: bold;">Sale Timeline: </span>${data.timeline} <br />
        <br />

        <span style="font-weight: bold;">Address: </span>${data.address} <br />
        <span style="font-weight: bold;">Zip Code: </span>${data.zip} <br />
        <br />

        <span style="font-weight: bold;">Name: </span>${data.name} <br />
        <span style="font-weight: bold;">Phone: </span>${data.phone} <br />
        <span style="font-weight: bold;">Email: </span>${data.email} <br />
    `;
  };
  
  module.exports = { Lead };