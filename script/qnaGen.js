const qnaGen = document.getElementById("qnaGen");
qnaGen.addEventListener("click", generateHtml);

const quest = document.getElementById("question");
const ans = document.getElementById("answer");
const qnaOutput = document.getElementById("qnaOutput");

const addLink = document.getElementById("addLink");
//addLink.addEventListener("click", addLinkToSelection);
//addLink.addEventListener("mousedown", (e)=>{e.preventDefault()});

const linkToAdd = document.getElementById("linkToAdd");
//const addLinkBtn = document.getElementById("addLinkBtn");
//addLinkBtn.addEventListener("click", handleAddLink);

let links = [];
let selection = {};

function addLinkToSelection(){
    //selection = window.getSelection().toString();
    selection = {
        start: ans.selectionStart,
        end: ans.selectionEnd,
        text: ans.value.substring(ans.selectionStart, ans.selectionEnd),
    };
    linkToAdd.showModal();
}

function handleAddLink(){
    const addedLink = document.getElementById("addedLink");
    let link = addedLink.value;
    linkToAdd.close();
    console.log(link);
    console.log(selection);
}

function generateHtml(){
    let questionContent = tinymce.get("question").getContent();
    let answerContent = tinymce.get("answer").getContent();
    console.log(answerContent);
    qnaOutput.innerText = `<details class="border mt-3 mb-3" style="border-color:var(--sd-clriyhc9q000150hgi4cpn37r-pkhs);">
	<summary class="border-b p-2" style="border-color:var(--sd-clriyhc9q000150hgi4cpn37r-pkhs);">
		<div class="p-0 m-0 inline-block mce-content-body mce-edit-focus" style="position:relative;">${questionContent}</div>
	</summary>
	<div class="p-2">
    ${answerContent}
  </div>
</details>`
}