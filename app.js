import express from 'express';

const app = express();


const answers = [
  { value: "yes", url: "https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif" },
  { value: "yes", url: "https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif" },
  { value: "yes", url: "https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif" },
  { value: "yes", url: "https://yesno.wtf/assets/yes/0-c44a7789d54cbdcad867fb7845ff03ae.gif" },
  { value: "yes", url: "https://yesno.wtf/assets/yes/12-e4f57c8f172c51fdd983c2837349f853.gif" },
  { value: "no", url: "https://yesno.wtf/assets/no/6-4bf0a784c173f70a0cab96efd9ff80c9.gif" },
  { value: "no", url: "https://yesno.wtf/assets/no/10-d5ddf3f82134e781c1175614c0d2bab2.gif" },
  { value: "no", url: "https://yesno.wtf/assets/no/4-122be48db47678331dbef3dd6ac6ff56.gif" },
  { value: "no", url: "https://yesno.wtf/assets/no/23-5fe6c1ca6c78e7bf9a7cf43e406fb8db.gif" },
  { value: "no", url: "https://yesno.wtf/assets/no/3-80a6f5b5d6684674bcfeda34accca4e1.gif" },
];

function getRandomAnswer() {
  return answers[Math.floor(Math.random() * answers.length)];   
}


// GET renvoie un fichier JSON, le type de contenu est "application/json"
app.get('/api', function (request, response) {
    const randomAnswer = getRandomAnswer(); 
    response.json(randomAnswer);
    });


// GET renvoie un fichier HTML, le type de contenu est "text/html"
app.get('/', function (request, response) {
  const randomAnswer = getRandomAnswer();
  response.send(`<img src="${randomAnswer.url}" alt="Answer GIF"><p>${randomAnswer.value}</p>`);
});


// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
