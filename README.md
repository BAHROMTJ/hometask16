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



**-Module scope:** The scope for code running in module mode.

![](/function-scope.png "")





## JavaScript Hoisting

**JavaScript Declarations are Hoisted**

**In JavaScript, a variable can be declared after it has been used.**
Ключевые слова let и const

Переменные, определенные с помощью letи constподнимаются наверх блока, но не инициализируется .

Значение: Блок кода знает о переменная, но ее нельзя использовать, пока она не будет объявлена.

Используя letпеременная до того, как она будет объявлена, приведет к ReferenceError.

Переменная находится во «временной мертвой зоне» с самого начала. блока, пока он не будет объявлен: 
![](/1627537525920.png "")










