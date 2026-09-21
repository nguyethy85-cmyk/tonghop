export default function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(404).send("Missing id");
  }

  const sourceUrl =
    `https://w-api.andanh.site/APP/TV360/tv.php?id=${encodeURIComponent(id)}`;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

  return res.redirect(302, sourceUrl);
}
