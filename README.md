# Что такое Scope в JavaScript?
Область видимости — это текущий контекст выполнения, в котором значения и выражения
являются «видимыми» или на них можно сослаться. Если переменная или выражение не находятся в текущем
масштаб, он не будет доступен для использования. Области также могут быть разделены на слои в иерархии,
чтобы дочерние области имели доступ к родительским областям, но не наоборот.

## JavaScript has the following kinds of scopes:

**-Global scope:** The default scope for all code running in script mode.


**-Function scope:** The scope created with a function.


**-Block scope:** This scope restricts the variable that is declared
inside a specific block, from access by the outside of the block.
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Scope</h2>

<p>A GLOBAL variable can be accessed from any script or function.</p>

<p id="demo"></p>

<script>
let carName = "Volvo";
myFunction();

function myFunction() {
  document.getElementById("demo").innerHTML = "I can display " + carName;
}
</script>

</body>
</html>


**-Module scope:** The scope for code running in module mode.

![](/Screenshot%202023-04-16%20at%2014-27-13%20JAVA%20SCRIPT%20-%20LectureNew-2.pdf.png "")
