const cats = require("./data_01_cats.json")

const clean = Object.keys(cats).map( key => ({
    name: key,
    sub_cats: Object.keys(cats[key].sub),
}) )

require("fs").writeFileSync("./data_02_flat.json", JSON.stringify(clean, null, 2))