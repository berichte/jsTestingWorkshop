const taxes = {
  de: 0.19,
  gb: 0.2,
  fr: 0.21
};

module.exports = countryCode =>
  new Promise((resolve, reject) => {
    const tax = taxes[countryCode];
    const timeout = Math.random() * 2000; // takes up to 2 seconds for the service to respond.
    const available = Math.random() > 0.2;
    setTimeout(() => {
      if (!available) reject(500);
      if (tax === undefined) return reject(400);
      return resolve(tax);
    }, timeout);
  });
