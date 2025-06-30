function loadRepos() {
      let url = 'https://api.github.com/users/testnakov/repos';
      const httpReq = new XMLHttpRequest();
      httpReq.addEventListener('readystatechange', () =>{
         if(httpReq.readyState == 4 && httpReq.status == 200){
            document.getElementById('res').textContent = httpReq.responseText;

         }
      });
      httpReq.open('GET', url);
      httpReq.send();
}

document.addEventListener('DOMContentLoaded', ()=>{
   document.querySelector('#load').addEventListener('click', loadRepos);
})