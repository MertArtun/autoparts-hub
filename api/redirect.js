export default function handler(req, res) {
  const { asin } = req.query;

  // Validate ASIN format
  if (!asin || !/^[A-Z0-9]+$/i.test(asin)) {
    return res.status(400).send('Invalid ASIN format');
  }

  const amazonUrl = `https://www.amazon.com/dp/${asin}?tag=your-tag-20`;

  // 302 redirect
  res.redirect(302, amazonUrl);
}
