const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const fs = require("fs");

const images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg'];

function generate_quote(){

    var raw_quotes = fs.readFileSync(path.join(__dirname, "public/JSON/markov.json"));
    var raw_big_quotes = fs.readFileSync(path.join(__dirname, "public/JSON/big_markov.json"));

    quotes = JSON.parse(raw_quotes);
    big_quotes = JSON.parse(raw_big_quotes);

    var o = '';
    const marks = ['.','!','?'];
    const n = 10;

    var next = choose(Object.keys(big_quotes));
    o = next+choose(big_quotes[next])
    next = o.substring(o.length-n);

    while (1){
        try{
            o+=choose(quotes[next])

            if (o[-1] === '\n') break;

            next = o.substring(o.length-n);
        }
        catch(err){
            for (var i = 0; i<marks.length; i++){
                if (o.includes(marks[i])){
                    o = o.substring(0, o.indexOf(marks[i])+1);
                    break;
                }
            }
            break;

        }
    }
    return o;

}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

app.set("view engine", "pug");
app.set("views", "public/views");

router.get("/", (req, res) => {
    quote = generate_quote();
  res.render("index", { 
        image_src : 'public/Pictures/motivational/' + choose(images),
        quote : quote,
        css : "public/CSS/main.css",
        canvas_script : "public/JS/canvas.js",
        download : "public/SVG/download_icon.svg",
        favicon : "public/Pictures/main.ico"
    });
});

router.get("/about", (req, res) => {
    res.render("about", {
        css : "public/CSS/main.css",
        back : "public/SVG/back.svg",
        github: "public/SVG/github.svg",
        favicon : "public/Pictures/main.ico"
    });
});

app.use("/", router);
app.use('/public', express.static(path.join(__dirname, 'public')));
app.listen(process.env.port || 3000);

console.log('                  .----.\n'+
'      .---------. | == |\n'+
'      |.-\"\"\"\"\"-.| |----|\n'+
'      ||       || | == |\n'+
'      ||       || |----|\n'+
'      |\'-.....-\'| |::::|\n'+
'      `\"\")---(\"\"` |___.|\n'+
'     /:::::::::::\\\" _  \"\n'+
'    /:::=======:::\\\`\\\`\\ \n'+
'    \`\"\"\"\"\"\"\"\"\"\"\"\"\"\`  \'-\'');
