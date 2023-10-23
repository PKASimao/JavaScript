const addbotao=document.querySelector("#add-botao")

//funsao para add tarefas

function addtask(){

    //titulo da tarefa
    const titulo=document.querySelector("#task-title").value

    if(titulo){

        // clonar o tamplete
        const template=document.querySelector(".templete")

        const newtask = template.cloneNode(true);

        //Add titudlo

        newtask.querySelector(".task-title").textContent = titulo;
       
        //Remover classes desnecessarias
        newtask.classList.remove("templete");
        newtask.classList.remove("hide");

        //ADD tarefa na lista

        const lista = document.querySelector("#task-list")

        lista.appendChild(newtask);


        // add o evento de remover

        const removebotao = newtask.querySelector(".remove-botao").addEventListener("click", function(){
            removetask(this)
        });

        // add evento de completar tarefa

        const donebotao=newtask.querySelector(".done-botao").addEventListener("click", function(){
            completar(this);
        });

        // limpar o texto
        document.querySelector("#task-title").value = "";
    }

}

    //Funsao de completar

    function completar(task){

       const taskcompletar = task.parentNode;

       taskcompletar.classList.toggle("done-botao");
    }


  // funsao de romocao

  function removetask(task){
    task.parentNode.remove(true)
  }


//evento de add tarefa
addbotao.addEventListener("click", function(e){
    e.preventDefault();

    addtask();

})