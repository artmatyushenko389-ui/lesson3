const files = ["cat.jpg","dog.png","document.pdf","Virus.exe","Doc.docx"];

for(const file of files){
    if(file === "cat.jpg"){
        console.log("пропускаем данную картинку")
        continue;
    }

    if (file === "Virus.exe"){
        console.log("Вирус найден!")
        break;
    }

    console.log("Файл проверен: " + file);
}
// files.push("music.mp3");

// for(const file of files){
//     console.log(file)
// }
// for (СТАРТ; ФИНИШ; ШАГ);;

// for (let i = 0; i <files.length; i = i + 1){
//     console.log(files[i]);
// } 