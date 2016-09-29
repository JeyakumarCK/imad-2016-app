var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
  articleOne: {
    title: 'Article 1111 | Jeyakumar',
    heading: 'Article 1111',
    date: 'Sep 6, 2016',
    content: `<p>
      This is a multi line content for Article one. This is a multi line content for Article one. This is a multi line content for Article one. This is a multi line content for Article one. This is a multi line content for Article one.
    </p>`
  },
  articleTwo: {
    title: 'Article Two | Jeyakumar',
    heading: 'Article Two',
    date: 'Sep 16, 2016',
    content: `<p>
      This is a multi line content for Article 222. This is a multi line content for Article one. This is a multi line content for Article one. This is a multi line content for Article one. This is a multi line content for Article one.
    </p>
    <p>
      This is a multi line content for Article 222. This is a multi line content for Article one. This is a multi line content for Article one. This is a multi line content for Article one. This is a multi line content for Article one.
    </p>`
  },
  articleThree: {
    title: 'Article Moonu | Jeyakumar',
    heading: 'Article Moonu',
    date: 'Sep 26, 2016',
    content: `<p>
      This is a multi line content for Article Moonu. This is a multi line content for Article one. This is a multi line content for Article one. This is a multi line content for Article one. This is a multi line content for Article one.
    </p>
    <p>
      This is a multi line content for Article one. This is a multi line content for Article one. This is a multi line content for Article one. This is a multi line content for Article one. This is a multi line content for Article one.
    </p>`
  },
}

function createTemplate(data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmlTempate = `
<html>
<head>
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
  <div class="container">
    <div>
      <a href="/">Home</a>
    </div>
    <hr/>
    <div>
      <H3>${heading}</H3>
    </div>
    <div>
      ${date}
    </div>
    <div>
      ${content}
    </div>
  </div>
</body>
</html>
`;
return htmlTempate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

// app.get('/article-one', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
// });
//
// app.get('/article-two', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
// });
//
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
