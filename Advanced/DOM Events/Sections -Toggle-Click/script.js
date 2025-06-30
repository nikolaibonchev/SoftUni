function create(words) {
   const contentRef = document.getElementById("content");
   let divArr = [];
   
   for (let i = 0; i < words.length; i++){
      const div = document.createElement("div");
      contentRef.appendChild(div);
      divArr.push(div);
   }

   let i = 0;

   for (let word of words){
      const p = document.createElement("p");
      p.textContent = word;
      p.style.display = "none";
      divArr[i].appendChild(p);
      i++;
   }
   
   divArr.forEach(function (divEl) {
      divEl.addEventListener("click", function (){
         const p = divEl.querySelector("p");
         p.style.display = p.style.display === "none" ? "block" : "none";
      })
   })
}