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





# JavaScript Hoisting

**JavaScript Declarations are Hoisted**

**In JavaScript, a variable can be declared after it has been used.**
Ключевые слова let и const

Переменные, определенные с помощью letи constподнимаются наверх блока, но не инициализируется .

Значение: Блок кода знает о переменная, но ее нельзя использовать, пока она не будет объявлена.

Используя letпеременная до того, как она будет объявлена, приведет к ReferenceError.

Переменная находится во «временной мертвой зоне» с самого начала. блока, пока он не будет объявлен: 
![](/1627537525920.png "")




# recursion js это


Рекурсия в программировании — это вызов функции из этой же самой функции. В математике многие функции определены именно таким образом, поэтому и большинство языков программирования берет на вооружение этот подход.
![](/recursion-1.png "")

**Для чего нужна рекурсия JS?**
Картинки по запросу recursion js это
Рекурсия – это термин в программировании, означающий вызов функцией самой себя. Рекурсивные функции могут быть использованы для элегантного решения определённых задач. Когда функция вызывает саму себя, это называется шагом рекурсии.


![](/recursion-pow.svg "")





# closure js что это

Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена. Другими словами, замыкание даёт вам доступ к Scope (en-US) внешней функции из внутренней функции. В JavaScript замыкания создаются каждый раз при создании функции, во время её создания
![](/lexical-search-order.svg "")
**Что такое замыкание Closure зачем и как его использовать?**
Замыкание (англ. closure) в программировании — функция первого класса, в теле которой присутствуют ссылки на переменные, объявленные вне тела этой функции в окружающем коде и не являющиеся её параметрами. Говоря другим языком, замыкание — функция, которая ссылается на свободные переменные в своей области видимости.

![](/lexical-environment-simple.svg"")
## Замыкания на практике

Замыкания полезны тем, что позволяют связать данные (лексическое окружение) с функцией, которая работает с этими данными. Очевидна параллель с объектно-ориентированным программированием, где объекты позволяют нам связать некоторые данные (свойства объекта) с одним или несколькими методами.

Следовательно, замыкания можно использовать везде, где вы обычно использовали объект с одним единственным методом.

Такие ситуации повсеместно встречаются в web-разработке. Большое количество front-end кода, который мы пишем на JavaScript, основано на обработке событий. Мы описываем какое-то поведение, а потом связываем его с событием, которое создаётся пользователем (например, клик мышкой или нажатие клавиши). При этом наш код обычно привязывается к событию в виде обратного/ответного вызова (callback): callback функция - функция выполняемая в ответ на возникновение события.







