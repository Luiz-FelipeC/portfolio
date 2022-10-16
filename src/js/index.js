const abas = document.querySelectorAll(".infos")

abas.forEach(info => {
    info.addEventListener("click", function() {

        if(info.classList.contains("select")){
            return;
        }

        selectInfo(info) 

        showInfo(info)
        
    })
})

function selectInfo(info) {
    const infoSelect = document.querySelector(".infos.select")
    infoSelect.classList.remove("select")

    info.classList.add("select")
}

function showInfo(info) {
        const infosSelects = document.querySelector(".infos.select")

        infosSelects.classList.remove("select")


        const idElement = `infos-${info.id}`

        const infosShow = document.getElementById(idElement)
            infosShow.classList.add("select")
}