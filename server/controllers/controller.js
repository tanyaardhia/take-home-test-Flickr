const { default: axios } = require("axios");

class Controller {
  static async home(req, res) {
    try {
        res.send('take home test')
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  }

  static async getViewers(req, res) {
    try {
        const response = await axios.get('https://api.flickr.com/services/feeds/photos_public.gne', {
            params: {
                format: 'json',
                nojsoncallback: 1
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error fetching data" });
    }
  }

  static async searchingImages(req, res) {
    try {
        const { search } = req.query;
        const respon = await axios.get(`https://api.flickr.com/services/feeds/photos_public.gne`)
        res.status(200).json(respon.data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error searching photos" });
    }
  }
}

module.exports = Controller;
