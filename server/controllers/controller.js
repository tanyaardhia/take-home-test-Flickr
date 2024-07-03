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
        res.send('photoFlickr')
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  }
}

module.exports = Controller;
