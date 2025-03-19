console.log(document);
let h1 = document.getElementById(`demo-id`);
console.dir(h1);
console.log(h1.tagName);
let div = document.getElementById(`demo-inner`);
console.log(div.innerText);
console.log(div.innerHTML);
console.log(div.textContent
);
div.innerHTML = `
<ul>
<li>Hello world 1</li>
<li>Hello world 2</li>
<li>Hello world 3</li>
</ul>
`;
console.log(div.style);
// div.style.backgroundColor = "red";
div.classList.add("class-02");
div.classList.add("demo");
div.classList.remove("demo");
console.log(div.classList);
console.log(div.children[0].children[0].textContent);
