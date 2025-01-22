const qnaGen = document.getElementById("qnaGen");
qnaGen.addEventListener("click", generateHtml);

const quest = document.getElementById("question");
const ans = document.getElementById("answer");
const qnaOutput = document.getElementById("qnaOutput");

function generateHtml(){
    qnaOutput.innerText = `<details class="border mt-3 mb-3" style="border-color:var(--sd-clriyhc9q000150hgi4cpn37r-pkhs);">
	<summary class="border-b p-2" style="border-color:var(--sd-clriyhc9q000150hgi4cpn37r-pkhs);">
		<p class="p-0 m-0 inline-block mce-content-body mce-edit-focus" style="position:relative;">${quest.value}</p>
	</summary>
	<div class="p-2">
    ${ans.value}
  </div>
</details>`
}