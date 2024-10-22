const SearchItem = require("../models/searchItems");


const addSampleData = async (req, res) => {
  try {
    await SearchItem.create([
      {
        title: "Bioinformatic challenges for proteomic biomarkers of cancer",
        authors: "David L Tabb, Daniel C Liebler",
        citation: "BMC Bioinformatics 2011 12(Suppl 7):A17",
      },
      {
        title:
          "Bioinformatic analysis of gene regulation in the metal-reducing bacterial family Geobacteraceae",
        authors: "Julia Krushkal, Ronald M Adkins, et al.",
        citation: "BMC Bioinformatics 2010 11(Suppl 4):P11",
      },
      {
        title:
          "Bioinformatic analysis of gene regulation in Geobacter sulfurreducens",
        authors: "Julia Krushkal, Yanhua Qu, Peter Brown, Sreedhar Sontineni, Toshiyuki Ueki, Katy Juarez, Ching Leang, Enrique Merino, Jeanette Peeples, Jose F Barbe, Ronald M Adkins and Derek R Lovley",
        citation: "BMC Bioinformatics 2009 10(Suppl 7):A9",
      },
      {
        title:
          "An integrative bioinformatic predictor of protein sub-cellular localisation in malaria",
        authors: "Ben J Woodcroft, Robert Radloff, Lee M Yeoh, Kristie-Lee Scanlon, Maria A Doyle, Giel G van Dooren, Geoffrey I McFadden, Christopher J Tonkin, Terence P Speed and Stuart A Ralph",
        citation: "BMC Bioinformatics 2011 12(Suppl 11):A6",
      },
    ]);
    res.status(200).send("Sample data added successfully");
  } catch (error) {
    res.status(500).send("Error adding sample data");
  }
};

// Function to handle search
const searchItems = async (req, res) => {
  const { query } = req.query;
  try {
    const results = await SearchItem.find({
      $or: [
        { title: new RegExp(query, "i") },
        { authors: new RegExp(query, "i") },
      ],
    });
    res.json(results);
  } catch (error) {
    res.status(500).send("Error performing search");
  }
};

module.exports = {
  addSampleData,
  searchItems,
};
