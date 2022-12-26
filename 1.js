const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let nameNode = []
let ageNode = []
let profNode = []
let langAttr = []
let firstNode = []
let secondNode = []

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student").forEach(elem => {
    nameNode.push(elem.querySelector("name"))
    ageNode.push(elem.querySelector("age"))
    profNode.push(elem.querySelector("prof"))
});

nameNode.forEach(elem => {
  firstNode.push(elem.querySelector("first"))
  secondNode.push(elem.querySelector("second"))
  langAttr.push(elem.getAttribute("lang"))
})

const list = [ student = {
  name: firstNode[0].textContent + ' ' + secondNode[0].textContent,
  age: ageNode[0].textContent,
  prof: profNode[0].textContent,
  lang: langAttr[0]
}, student = {
  name: firstNode[1].textContent + ' ' + secondNode[1].textContent,
  age: ageNode[1].textContent,
  prof: profNode[1].textContent,
  lang: langAttr[1]
}  
];

console.log(list)