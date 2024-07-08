const { default: axios } = require("axios");

class Controller {
  static async home(req, res) {
    try {
      res.send("take home test");
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  }

  static async getViewers(req, res) {
    let attempts = 0;
    const maxAttempts = 3;
    while (attempts < maxAttempts) {
      try {
        const apiKey = process.env.FLICKR_API_KEY;
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=200984113%40N02&tags=&format=json&nojsoncallback=1&api_sig=3713a40c6cf6dba08be3f183407f36a5`;

        const response = await axios.get(url);
        return res.status(200).json(response.data);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          attempts++;
          const retryAfter =
            (error.response.headers["retry-after"] || 1) * 1000;
          await new Promise((resolve) => setTimeout(resolve, retryAfter));
        } else {
          console.log("Error fetching data:", error.message);
          return res.status(500).json({ error: error.message });
        }
      }
    }
    res
      .status(429)
      .json({ error: "Too many requests. Please try again later." });
  }

  static async searchingImages(req, res) {
    try {
      const { tags } = req.query;
      const apiKey = process.env.FLICKR_API_KEY;
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&format=json&nojsoncallback=1`;

      const response = await axios.get(url);
      console.log("searching >>>", tags);
      console.log("hasil searching >>", response.data.photos.photo);
      res.status(200).json(response.data.photos.photo);
    } catch (error) {
      console.log("error searching photos:", error.message);
      res.status(500).json({ message: "error searching photos" });
    }
  }
}

module.exports = Controller;
