
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {"message": "Type in your URL:", 
        "name": "url"}
  ])
  .then((answers) => {
    console.log(answers.url);
    var qr_svg = qr.image(answers.url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("url.txt", answers.url, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully wrote to file!");
        }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {

    }
  });

