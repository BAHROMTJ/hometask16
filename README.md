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

Рекурсия в программировании — это вызов функции из этой же самой функции. В математике многие функции определены именно таким образом, поэтому и большинство языков программирования берет на вооружение этот подход. JavaScript здесь не является исключением: в определении функции вы можете использовать не только данные ранее определения, но и вызывать в теле функции саму определяемую функцию. Выглядит это так:

const f = () => {
  f();
};

Этот вызов будет выполняться бесконечно и кажется, что в этом нет никакого смысла. Попробуем осмыслить рекурсию на более повседневном примере. Допустим, у вас есть три книги на полке и вы хотите узнать, сколько есть возможных вариантов их перестановки.

Получается шесть уникальных комбинаций из трех книг. Из четырех — 24 комбинации. Из 13 — почти столько же, сколько людей на планете. 25 книг? Вариантов их перестановки больше, чем атомов в организме человека.

Вообще, существует n! вариантов перестановки n книг. Факториал означает — перемножить все целые числа от 1 до n. Так что, 3! это 1 * 2 * 3. Давайте напишем функцию факториала.

const factorial = (n) => {
  return 1 * 2 * 3 * 4; //
}

Здесь что-то не так. Мы не знаем значение n изначально, в этом вся проблема. Из математики нам известны два условия для рекурсивного определения факториала: если n равно 0, тогда факториал — 1, это просто. Но если n не равно 0, тогда факториал — n*(n-1)!

Давайте попробуем вот так:

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
}

const answer = factorial(3);

Это может показаться странным. Мы вызываем функцию из функции, но… это та же самая функция! Все дело в том, что сама по себе функция — это не ящик, это его описание. Ящик создается лишь при вызове функции, а после того, как она выполнилась, ящик самоуничтожается. Поэтому когда вы вызываете ту же самую функцию из нее самой, просто создается еще один ящик.

Давайте это отследим: мы вызываем factorial(3). 3 это не 0, поэтому первое условие игнорируется. Функция хочет произвести умножение чисел и вернуть ответ, но она не может — ей нужно знать второе число, для чего она вызывает factorial(3 - 1) или factorial(2).

Формируется новый идентичный ящик factorial, он принимает число 2, это не 0, так что он пробует произвести умножение и вернуть ответ, но не может — ему нужно знать второе число, поэтому он вызывает factorial(1).

Формируется новый идентичный ящик factorial, он принимает число 1 и это снова не 0. Еще одна попытка произвести умножение и вернуть результат, происходит вызов factorial(0) и этот ящик уже может мгновенно вернуть ответ — он возвращает 1.

1 возвращается в предыдущий ящик, умножается на 1 и ответ "1" возвращается в предыдущий ящик, умножается на 2 и ответ "2" возвращается в предыдущий ящик, умножается на 3 и ответ "6" возвращается во внешний мир и сохраняется в константе answer. Voilà!

Все это и есть рекурсия: что-то описывается через самого себя, содержит себя в своем описании. Когда дело касается математики или программирования, требуется два условия:

    Простой базовый случай или терминальный сценарий. Это точка, в которой нужно остановиться. В нашем примере это 0: мы остановили вычисление факториала, когда в функцию был передан 0
    Правило передвижения по рекурсии, углубление. В нашем случае это было n * factorial(n - 1)

Еще один момент. Если проверить наш код с помощью линтера, то он выдаст ошибку no-else-return. Последуем рекомендациями линтера и отрефакторим код:

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

const answer = factorial(3);

Давайте проследим шаги еще раз, но с другой точки зрения, не заглядывая в ящики. Вот, как это выглядит пошагово:

factorial(3);
3 * factorial(2);
3 * 2 * factorial(1);
3 * 2 * 1 * factorial(0);
3 * 2 * 1 * 1;
3 * 2 * 1
3 * 2;
6;

![](/recursion-pow.svg "")























  # closure js что это

Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена. Другими словами, замыкание даёт вам доступ к Scope (en-US) внешней функции из внутренней функции. В JavaScript замыкания создаются каждый раз при создании функции, во время её создания
![](/lexical-search-order.svg "")
**Что такое замыкание Closure зачем и как его использовать?**
Замыкание (англ. closure) в программировании — функция первого класса, в теле которой присутствуют ссылки на переменные, объявленные вне тела этой функции в окружающем коде и не являющиеся её параметрами. Говоря другим языком, замыкание — функция, которая ссылается на свободные переменные в своей области видимости.

![](/lexical-environment-simple.svg"")
 **Замыкания на практике**

Замыкания полезны тем, что позволяют связать данные (лексическое окружение) с функцией, которая работает с этими данными. Очевидна параллель с объектно-ориентированным программированием, где объекты позволяют нам связать некоторые данные (свойства объекта) с одним или несколькими методами.

Следовательно, замыкания можно использовать везде, где вы обычно использовали объект с одним единственным методом.

Такие ситуации повсеместно встречаются в web-разработке. Большое количество front-end кода, который мы пишем на JavaScript, основано на обработке событий. Мы описываем какое-то поведение, а потом связываем его с событием, которое создаётся пользователем (например, клик мышкой или нажатие клавиши). При этом наш код обычно привязывается к событию в виде обратного/ответного вызова (callback): callback функция - функция выполняемая в ответ на возникновение события.







