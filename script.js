let profileForm = document.getElementById("profileForm")
profileForm.addEventListener("submit", function(ev){
    ev.preventDefault();
    let inputNama = document.getElementById("inputNama").value
    let inputRole = document.getElementById("inputRole").value
    let inputAvailability = document.getElementById("inputAvailability").value
    let inputAge = document.getElementById("inputAge").value
    let inputExp = document.getElementById("inputExp").value
    let inputLokasi = document.getElementById("inputLokasi").value
    let inputEmail = document.getElementById("inputEmail").value
    inputNama == 0 ? "" : document.getElementById("outputNama").innerHTML = inputNama
    inputRole == 0 ? "" : document.getElementById("outputRole").innerHTML = inputRole
    inputAvailability == 0 ? "" : document.getElementById("outputAvailability").innerHTML = inputAvailability
    inputAge == 0 ? "" : document.getElementById("outputAge").innerHTML = inputAge
    inputExp == 0 ? "" : document.getElementById("outputExp").innerHTML = inputExp
    inputLokasi == 0 ? "" : document.getElementById("outputLokasi").innerHTML = inputLokasi
    inputEmail == 0 ? "" : document.getElementById("outputEmail").innerHTML = inputEmail
    document.getElementById("profileForm").reset()
    document.getElementById("form-section").style.display = "none"
    document.getElementById("edit-button").innerHTML = "Edit"
    
})
document.getElementById("edit-button").addEventListener("click", function(ev) {
    ev.preventDefault();
    document.getElementById("form-section").style.display = "flex"
    document.getElementById("edit-button").innerHTML = "Kontak"
})
document.getElementById("resume-button").addEventListener("click", function(ev) {
    ev.preventDefault();
    alert("Resume belum ada")
})