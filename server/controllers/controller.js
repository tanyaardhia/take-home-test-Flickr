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
    try {
      const url = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1`;

      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "User-Agent": "PostmanRuntime/7.37.3",
        },
      });
      console.log(response, ">>> response controller");
      res.status(200).json(response.data.items);
    } catch (error) {
      console.log("error data:", error.message);
      res.status(500).json({ error: error });
    }
  }

  static async searchingImages(req, res) {
    try {
      const { tags } = req.query;

      if (!tags) {
        return res.status(400).json({ message: "Tags are required" });
      }

      const url = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${tags}&format=json&nojsoncallback=1`;

      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "User-Agent": "PostmanRuntime/7.37.3",
        },
      });

      console.log("searching >>>", tags);
      console.log("hasil searching >>", response.data.items);
      res.status(200).json(response.data.items);
    } catch (error) {
      console.log("error searching photos:", error.message);
      res.status(500).json({ message: "Error searching photos", error: error.message });
    }
  }
}

module.exports = Controller;
