export default function handler(req, res) {
  const { asin } = req.query;

  // Validate ASIN format
  if (!asin || !/^[A-Za-z0-9]{10}$/.test(asin)) {
    return res.status(400).send('Invalid ASIN format');
  }

  const amazonUrl = `https://www.amazon.com/dp/${asin}?tag=autopartshub2-20`;

  // 302 redirect
  res.redirect(302, amazonUrl);
}
