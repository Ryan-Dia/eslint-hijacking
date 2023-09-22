# Hijacking Style Guide

> 참고: 이 가이드는 [Airbnb JavaScript style Guide](https://github.com/ParkSB/javascript-style-guide)에서 eslint에서 더 이상 사용하지 않는 규칙, node.js 버전이 업그레이드 됨에 따라 필요 없어진 규칙, 이견이 많은 규칙들을 제거하였습니다.

## 참조 (References)

<a name="references--prefer-const"></a><a name="1.1"></a>

- [1.1](#references--prefer-const) 모든 참조에는 `var` 대신 `const`를 사용하세요.

  - [`prefer-const`](https://eslint.org/docs/latest/rules/prefer-const.html)
  - [`no-const-assign`](https://eslint.org/docs/latest/rules/no-const-assign.html)
    <br>

  > why? 참조를 재할당 할 수 없게 함으로써, 이해하기 어려운 동시에 버그로 이어지는 코드를 방지합니다.

  ```js
  // bad
  var a = 1;
  var b = 2;

  // good
  const a = 1;
  const b = 2;
  ```

<a name="references--disallow-var"></a><a name="1.2"></a>

- [1.2](#references--disallow-var) 만약 참조를 재할당 해야 한다면 `var` 대신 `let`을 사용하세요.

  - [`no-var`](https://eslint.org/docs/latest/rules/no-var.html)
    <br>

  > why? `var`처럼 함수스코프를 취하는 것 보다는 블록스코프를 취하는 `let`이 더 낫습니다.

  ```js
  // bad
  var count = 1;
  if (true) {
    count += 1;
  }

  // good, use the let.
  let count = 1;
  if (true) {
    count += 1;
  }
  ```

  <a name="references--block-scope"></a><a name="1.3"></a>

  - [1.3](#references--block-scope) `let` 과 `const` 는 둘 다 블록스코프라는 것을 유의하세요.

    ```js
    // const와 let은 선언된 블록 안에서만 존재합니다.
    {
      let a = 1;
      const b = 1;
    }
    console.log(a); // ReferenceError
    console.log(b); // ReferenceError
    ```

## 객체 (Object)

<a name="objects--no-new"></a><a name="2.1"></a>

- [2.1](#objects--no-new) 객체를 생성할 때는 리터럴 문법을 사용하세요.

  - [`no-new-object`](https://eslint.org/docs/latest/rules/no-new-object)
    <br>

  ```js
  // bad
  const item = new Object();

  // good
  const item = {};
  ```

<a name="es6-computed-properties"></a><a name="2.4"></a>

- [2.2](#es6-computed-properties) 동적 속성을 갖는 객체를 생성할 때는 속성 계산명을 사용하세요.

  > why? 이를 통해 객체의 모든 속성을 한 곳에서 정의할 수 있습니다.

  ```js
  function getKey(k) {
    return `a key named ${k}`;
  }

  // bad
  const obj = {
    id: 5,
    name: 'San Francisco',
  };
  obj[getKey('enabled')] = true;

  // good
  const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
  };
  ```

<a name="es6-object-shorthand"></a><a name="2.5"></a>

- [2.3](#es6-object-shorthand) 메소드의 단축구문을 사용하세요.

  - [`object-shorthand`](https://eslint.org/docs/latest/rules/object-shorthand)
    <br>

  ```js
  // bad
  const atom = {
    value: 1,

    addValue: function (value) {
      return atom.value + value;
    },
  };

  // good
  const atom = {
    value: 1,

    addValue(value) {
      return atom.value + value;
    },
  };
  ```

<a name="es6-object-concise"></a><a name="2.6"></a>

- [2.4](#es6-object-concise) 속성의 단축구문을 사용하세요.

  - [`object-shorthand`](https://eslint.org/docs/latest/rules/object-shorthand)
    <br>

  > why? 더 짧고 설명적입니다.

  ```js
  const lukeSkywalker = 'Luke Skywalker';

  // bad
  const obj = {
    lukeSkywalker: lukeSkywalker,
  };

  // good
  const obj = {
    lukeSkywalker,
  };
  ```

<a name="objects--quoted-props"></a><a name="2.5"></a>

- [2.5](#objects--quoted-props) 유효하지 않은 식별자에만 따옴표 속성을 사용하세요.

  - [`quote-props`](https://eslint.org/docs/latest/rules/quote-props)
    <br>

  > why? 더 읽기 쉽습니다. 이렇게 하면 구문 하이라이팅이 잘 되고, 많은 자바스크립트 엔진이 더 쉽게 최적화 할 수 있습니다.

  ```js
  // bad
  const bad = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
  };

  // good
  const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
  };
  ```

  > but! 숫자 리터럴을 속성 키로 사용하는 경우에는 따온표를 사용하는게 좋습니다. 의도치 않은 결과가 발생할 수 있습니다. 아래와 같은 경우 속성 이름으로 사용되기 전에 문자열로 강제 변환되기 때문에 둘 다 속성이 "100"이됩니다.

  ```js
  // bad
  var object = {
    1e2: 1,
    100: 2,
  };
  // 중복된 속성 이름을 가질 수 없기에 마지막으로 지정한 값으로 대체
  console.log(object); // {'100': 2 }

  // good
  var object = {
    '1e2': 1,
    100: 2,
  };

  console.log(object); // { "100": 2, "1e2": 1 }
  ```

<a name="objects--rest-spread"></a><a name="2.6"></a>

- [2.6](#objects--rest-spread) 객체에 대해 얕은 복사를 할 때는 [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)대신 객체 전개 구문을 사용하세요. 특정 속성이 생략된 새로운 개체를 가져올 때는 객체 나머지 연산자(object rest operator)를 사용하세요.

  - [`prefer-object-spread`](https://eslint.org/docs/latest/rules/prefer-object-spread)
    <br>

  ```js
  // very bad
  const original = { a: 1, b: 2 };
  const copy = Object.assign(original, { c: 3 }); // `original`을 변조합니다 ಠ_ಠ
  delete copy.a; // 그래서 이렇게 합니다

  // bad
  const original = { a: 1, b: 2 };
  const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

  // good
  const original = { a: 1, b: 2 };
  const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

  const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
  ```

## 배열 (Arrays)

<a name="arrays--literals"></a><a name="3.1"></a>

- [3.1](#arrays--literals) 배열을 생성할 때 리터럴 구문을 사용하세요.

  - [`no-array-constructor`](https://eslint.org/docs/latest/rules/no-array-constructor.html)
    <br>

  > why? Array 생성자를 사용하면 몇 가지 문제가 발생할 수 있습니다.  
  > 첫째, Array 생성자를 사용할 때 한 가지 인수만을 전달할 수 있습니다. 이것은 오해의 소지가 있을 수 있고 버그를 일으킬 수 있습니다.  
  > 둘째, Array라는 전역 객체가 다른 목적으로 재정의될 수 있으므로 코드가 예상대로 동작하지 않을 수 있습니다.

  ```js
  // bad
  const items = new Array();

  // good
  const items = [];
  ```

<a name="arrays--mapping"></a><a name="3.2"></a>

- [3.2](#arrays--mapping) 매핑할 때는 전개 구문 `...` 대신 [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from)을 사용하세요. 중간 배열 생성을 방지와 [성능](https://github.com/airbnb/javascript/issues/1084#issuecomment-248144612) 상의 문제가 있기 때문입니다.
  <br>

  ```js
  // bad
  const baz = [...foo].map(bar);

  // good
  const baz = Array.from(foo, bar);
  ```

<a name="arrays--callback-return"></a><a name="3.3"></a>

- [3.3](#arrays--callback-return) 배열 메소드 콜백에는 리턴 구문을 사용하세요.

  - [`array-callback-return`](https://eslint.org/docs/latest/rules/array-callback-return)
    <br>

  > why? 종종 리턴 구문을 넣어야하는 데 실수로 넣지 않을 때가 있습니다. 만약 반환을 사용하고 싶지 않거나 반환된 결과가 필요하지 않은 경우에는 `forEach`사용을 고려하세요.

  ```js
  // good
  [1, 2, 3].map(x => {
    const y = x + 1;
    return x * y;
  });

  // good
  [1, 2, 3].map(x => x + 1);

  // bad - no returned value means `acc` becomes undefined after the first iteration
  [
    [0, 1],
    [2, 3],
    [4, 5],
  ].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    acc[index] = flatten;
  });

  // good
  [
    [0, 1],
    [2, 3],
    [4, 5],
  ].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    acc[index] = flatten;
    return flatten;
  });

  // bad
  inbox.filter(msg => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee';
    } else {
      return false;
    }
  });

  // good
  inbox.filter(msg => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee';
    }

    return false;
  });
  ```

## 비구조화 (Destructuring)

<a name="destructuring--object"></a><a name="4.1"></a>

- [4.1](#destructuring--object) 하나의 객체에서 여러 속성에 접근할 때는 객체 비구조화를 사용하세요. - [`prefer-destructuring`](https://eslint.org/docs/latest/rules/prefer-destructuring)
  <br>

      >why? 비구조화는 속성들을 위한 임시 참조를 만들지 않도록 해주고, 객체의 반복적인 접근을 방지합니다. 반복적인 객체 접근은 중복 코드와 실수를 만들어내고, 더 많은 코드를 읽게 합니다. 또한 객체 비구조화는 블록에서 사용되는 객체의 구조를 저으이하는 단일한 위치를 제공함으로써 어떤 것이 사용되는지 알아내기 위해 모든 블록을 읽지 않아도 되도록 해줍니다.

      ```js
      // bad
      function getFullName(user) {
        const firstName = user.firstName;
        const lastName = user.lastName;

        return `${firstName} ${lastName}`;
      }

      // good
      function getFullName(user) {
        const { firstName, lastName } = user;
        return `${firstName} ${lastName}`;
      }

      // best
      function getFullName({ firstName, lastName }) {
        return `${firstName} ${lastName}`;
      }
      ```

  <a name="destructuring--array"></a><a name="4.2"></a>

- [4.2](#destructuring--array) 배열 비구조화를 사용하세요.

  - [`prefer-destructuring`](https://eslint.org/docs/latest/rules/prefer-destructuring)  
    <br>

  ```javascript
  const arr = [1, 2, 3, 4];

  // bad
  const first = arr[0];
  const second = arr[1];

  // good
  const [first, second] = arr;
  ```

## 문자열 (Strings)

<a name="es6-template-literals"></a><a name="5.1"></a>

- [5.1](#es6-template-literals) 문자열을 생성하는 경우, 문자열 연결 대신 템플릿 문자열을 사용하세요.

  - [`prefer-template`](https://eslint.org/docs/latest/rules/prefer-template.html)
  - [`template-curly-spacing`](https://eslint.org/docs/latest/rules/template-curly-spacing)
    <br>

  > why? 템플릿 문자열은 덧붙이기와 줄바꿈을 제공하는 간결한 문법으로 가독성을 높여줍니다.

  ```js
  // bad
  function sayHi(name) {
    return 'How are you, ' + name + '?';
  }

  // bad
  function sayHi(name) {
    return ['How are you, ', name, '?'].join();
  }

  // bad
  function sayHi(name) {
    return `How are you, ${name}?`;
  }

  // good
  function sayHi(name) {
    return `How are you, ${name}?`;
  }
  ```

<a name="strings--eval"></a><a name="5.2"></a>

- [5.2](#strings--eval) 절대로 문자열에 `eval()`을 사용하지 마세요. 너무나 많은 취약점을 만듭니다.
  - [`no-eval`](https://eslint.org/docs/latest/rules/no-eval)

<a name="strings--escaping"></a><a name="5.3"></a>

- [5.3](#strings--escaping) 문자열에 불필요한 이스케이프 문자를 사용하지 마세요.

  - [`no-useless-escape`](https://eslint.org/docs/latest/rules/no-useless-escape)
    <br>

  > why? 백슬래시는 가독성을 해치기 때문에 필요할 때만 사용해야 합니다.

  ```js
  // bad
  const foo = '\'this\' is "quoted"';

  // good
  const foo = '\'this\' is "quoted"';
  const foo = `my name is '${name}'`;
  ```

## Function

<a name="functions--iife"></a><a name="6.1"></a>

- [6.1](#functions--iife) 즉시 호출 함수 표현식을 괄호로 감싸세요.

  - [`wrap-iife`](https://eslint.org/docs/latest/rules/wrap-iife.html)
    <br>

  > why? 즉시 호출 함수 표현식은 하나의 단위이며, 괄호로 이것을 감싸면 괄호 안의 표현을 명확하게 해주기 때문입니다. 모듈을 어디에서나 사용한다면 즉시 호출 표현식은 전혀 필요하지 않다는 점을 주의하세요.

  ```js
  // 즉시 호출 함수 표현식 (IIFE)
  (function () {
    console.log('Welcome to the Internet. Please follow me.');
  })();
  ```

<a name="functions--in-blocks"></a><a name="6.2"></a>

- [6.2](#functions--in-blocks) 함수 이외의 불록(`if`, `while`, 등)에서 함수를 선언하지 마세요. 브라우저는 이를 허용하겠지만, 모두 다르게 해석합니다.

  - [`no-loop-func`](https://eslint.org/docs/latest/rules/no-loop-func.html)
  - 참고 : ECMA-262 명세는 `블록`을 구문의 일종으로 정의하고 있지만 함수선언은 구문이 아닙니다.
    <br>

  ```js
  // bad
  if (currentUser) {
    function test() {
      console.log('Nope.');
    }
  }

  // good
  let test;
  if (currentUser) {
    test = () => {
      console.log('Yup.');
    };
  }
  ```

<a name="functions--arguments-shadow"></a><a name="6.3"></a>

- [6.3](#functions--arguments-shadow) 절대 매개변수 이름을 `arguments`라고 짓지 마세요. 이것은 함수 스코프에 전해지는 `arguments` 객체의 참조를 덮어써 버립니다.
  <br>

  ```js
  // bad
  function foo(name, options, arguments) {
    // ...
  }

  // good
  function foo(name, options, args) {
    // ...
  }
  ```

<a name="es6-rest"></a><a name="6.4"></a>

- [6.4](#es6-rest) 절대 `arguments`를 사용하지마세요. 대신 나머지 문법(rest syntax) `...`를 사용하세요.

  - [`prefer-rest-params`](https://eslint.org/docs/latest/rules/prefer-rest-params)
    <br>

  > why? `...`을 사용하면 몇 개의 매개변수를 이용하고 싶은지 확실히 할 수 있습니다. 더 나아가, 나머지 인자(rest arguments)는 `arguments`와 같은 Array-like 객체가 아닌 진짜 Array입니다.

  ```js
  // bad
  function concatenateAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
  }

  // good
  function concatenateAll(...args) {
    return args.join('');
  }
  ```

<a name="functions--defaults-last"></a><a name="6.5"></a>

- [6.5](#functions--defaults-last) 기본 매개변수는 항상 뒤쪽에 두세요.

  - [`default-param-last`](https://eslint.org/docs/latest/rules/default-param-last)
    <br>

  ```js
  // bad
  function handleThings(opts = {}, name) {
    // ...
  }

  // good
  function handleThings(name, opts = {}) {
    // ...
  }
  ```

<a name="functions--constructor"></a><a name="6.6"></a>

- [6.6](#functions--constructor) 절대로 새로운 함수를 만들기 위해 함수 생성자를 사용하지 마세요.

  - [`no-new-func`](https://eslint.org/docs/latest/rules/no-new-func)
    <br>

  > why? 이러한 방법으로 문자열을 평가해 함수를 만드는 것은 `eval()`과 같은 수준읜 취약점을 만듭니다.

  ```js
  // bad
  var add = new Function('a', 'b', 'return a + b');

  // still bad
  var subtract = Function('a', 'b', 'return a - b');
  ```

  <a name="functions--signature-spacing"></a><a name="6.7"></a>

- [6.7](#functions--signature-spacing) 함수 시그니처에 공백을 넣으세요.

  - [`space-before-function-paren`](https://eslint.org/docs/latest/rules/space-before-function-paren)
  - [`space-before-blocks`](https://eslint.org/docs/latest/rules/space-before-blocks)
    <br>

  > why? 일관성을 갖는 것이 좋습니다. 그리고 이렇게 하면 이름을 추가하거나 지울 때 공백을 건드릴 필요가 없게 됩니다.

  ```js
  // bad
  const f = function () {};
  const g = function () {};
  const h = function () {};

  // good
  const x = function () {};
  const y = function a() {};
  ```

<a name="functions--mutate-params"></a><a name="6.8"></a>

- [6.8](#functions--mutate-params) 절대로 매개변수를 바꾸지 마세요.

  - [`no-param-reassing`](https://eslint.org/docs/latest/rules/no-param-reassign.html)
    > why? 매개변수로 전달된 객체를 조작하면 원래 호출처에서 원치 않는 사이드 이펙트를 일으킬 수 있습니다.

  ```js
  // bad
  function f1(obj) {
    obj.key = obj.key || 1; // Mutate to normalize
    // Use obj.key
  }
  // good
  function f2(obj) {
    const key = obj.key || 1; // Normalize without mutating
    // Use key
  }
  ```

  [해당 규칙에는 이견이 많습니다.](https://github.com/airbnb/javascript/issues/719)  
  [관련 대안](https://github.com/airbnb/javascript/issues/719#issuecomment-297978077)  
  다음 이름으로 정의한 매개변수는 이 규칙을 무시합니다.

  - `acc`
  - `accumulator`
  - `e`
  - `ctx`
  - `context`
  - `req`
  - `request`
  - `res`
  - `response`
  - `$scope`
  - `staticContext`

<a name="functions--reassign-params"></a><a name="6.9"></a>

- [6.9](#functions--reassign-params) 절대로 매개변수를 재할당하지 마세요.

  - [`no-param-reassign`](https://eslint.org/docs/latest/rules/no-param-reassign.html)
    <br>

  > why? 매개변수를 재할당하는 것은 예측할 수 없는 결과를 불러 일으킵니다. 특히 `arguments` 객체에 접근할 때 말이죠. 또한 V8에서 최적화 문제를 일으킬 수도 있습니다.

  ```js
  // bad
  function f1(a) {
    a = 1;
    // ...
  }

  function f2(a) {
    if (!a) {
      a = 1;
    }
    // ...
  }

  // good
  function f3(a) {
    const b = a || 1;
    // ...
  }

  function f4(a = 1) {
    // ...
  }
  ```

<a name="functions--spread-vs-apply"></a><a name="6.10"></a>

- [6.10](#functions--spread-vs-apply) 가변 인자 함수를 호출할 때는 전개 구문 `...`을 사용하세요.

  - [`prefer-spread`](https://eslint.org/docs/latest/rules/prefer-spread)  
    <br>

  > why? 훨씬 더 깔끔합니다. 컨텍스트를 제공할 필요도 없고, `apply`로 `new`를 쉽게 구성할 수도 없습니다.

  ```js
  // bad
  const x = [1, 2, 3, 4, 5];
  console.log.apply(console, x);

  // good
  const x = [1, 2, 3, 4, 5];
  console.log(...x);

  // bad
  new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]))();

  // good
  new Date(...[2016, 8, 5]);
  ```

<a name="functions--signature-invocation-indentation"></a><a name="6.11"></a>

- [6.11](#functions--signature-invocation-indentation)
  여러 줄의 시그니처 또는 호출을 취하는 함수는 이 가이드에 있는 다른 것들처럼 들여쓰기가 되어야 합니다. 한줄에 각 항목을 하나씩 두고, 마지막 항목에 쉼표를 넣습니다.

  - [`function-paren-newline`](https://eslint.org/docs/latest/rules/function-paren-newline)
    <br>

  ```js
  // bad
  function foo(bar, baz, quux) {
    // ...
  }

  // good
  function foo(bar, baz, quux) {
    // ...
  }

  // bad
  console.log(foo, bar, baz);

  // good
  console.log(foo, bar, baz);
  ```

## 화살표 함수 (Arrow Functions)

<a name="arrows--use-them"></a><a name="7.1"></a>

- [7.1](#arrows--use-them) (인라인 콜백을 전달할 때 같이) 익명함수를 사용할 때는 화살표 함수 표현을 사용하세요.

  - [`prefer-arrow-callback`](https://eslint.org/docs/latest/rules/prefer-arrow-callback.html)
  - [`arrow-spacing`](https://eslint.org/docs/latest/rules/arrow-spacing.html)
    <br>

  > why? 화살표 함수는 그 컨텍스트의 `this`에서 실행하는 버전의 함수를 만들기 때문입니다. 이것은 보통 원하는대로 작동하고, 보다 간결합니다.

  ```js
  // bad
  [1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
  });

  // good
  [1, 2, 3].map(x => {
    const y = x + 1;
    return x * y;
  });
  ```

<a name="arrows--implicit-return"></a><a name="7.2"></a>

- [7.2](#arrows--implicit-return) 하나의 식으로 구성된 함수가 사이드 이펙트 없는 [표현식](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)을 반환하는 경우, 중괄호를 생략하고 암시적 반환을 사용할 수 있습니다. 그 외에는 중괄호를 그대로 두고, `return`문도 사용하세요.

  - [`arrow-parens`](https://eslint.org/docs/latest/rules/arrow-parens.html)
  - [`arrow-body-style`](https://eslint.org/docs/latest/rules/arrow-body-style.html)
    <br>

  > why? Syntactic sugar이기 때문입니다. 여러 함수가 연결된 경우 읽기 쉬워집니다.

  ```js
  // bad
  [1, 2, 3].map(number => {
    const nextNumber = number + 1;
    `A string containing the ${nextNumber}.`;
  });

  // good
  [1, 2, 3].map(number => `A string containing the ${number}.`);

  // good
  [1, 2, 3].map(number => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}.`;
  });

  // good
  [1, 2, 3].map((number, index) => ({
    [index]: number,
  }));

  // 암시적 반환없이 사이드 이펙트를 수반합니다
  function foo(callback) {
    const val = callback();
    if (val === true) {
      // callback이 참을 반환하면 뭔가를 수행합니다
    }
  }

  let bool = false;

  // bad
  foo(() => (bool = true));

  // good
  foo(() => {
    bool = true;
  });
  ```

<a name="arrows--one-arg-parens"></a><a name="7.3"></a>

- [7.3](#arrows--one-arg-parens) 명확성과 일관성을 위해 항상 인자를 괄호로 감싸세요.

  - [`arrow-parens`](https://eslint.org/docs/latest/rules/arrow-parens.html)
    <br>

  > why? 인자를 추가하거나 제거할 때 변경 사항을 최소화할 수 있습니다.

  ```js
  // bad
  [1, 2, 3].map(x => x * x);

  // good
  [1, 2, 3].map(x => x * x);

  // bad
  [1, 2, 3].map(
    number =>
      `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`,
  );

  // good
  [1, 2, 3].map(
    number =>
      `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`,
  );

  // bad
  [1, 2, 3].map(x => {
    const y = x + 1;
    return x * y;
  });

  // good
  [1, 2, 3].map(x => {
    const y = x + 1;
    return x * y;
  });
  ```

<a name="arrows--confusing"></a><a name="7.4"></a>

- [7.4](#arrows--confusing) 화살표 함수 구문(`=>`)과 비교 연산자(`<=`, `>=`)를 헷갈리게 하지 마세요.

  - [`no-confusing-arrow`](https://eslint.org/docs/latest/rules/no-confusing-arrow)
    <br>

  ```js
  // bad
  const itemHeight = item =>
    item.height > 256 ? item.largeSize : item.smallSize;

  // bad
  const itemHeight = item =>
    item.height > 256 ? item.largeSize : item.smallSize;

  // good
  const itemHeight = item =>
    item.height > 256 ? item.largeSize : item.smallSize;

  // good
  const itemHeight = item => {
    const { height, largeSize, smallSize } = item;
    return height > 256 ? largeSize : smallSize;
  };
  ```

<a name="whitespace--implicit-arrow-linebreak"></a><a name="7.5"></a>

- [7.5](#whitespace--implicit-arrow-linebreak) 암시적 반환을 하는 화살표 함수 몸체의 위치를 적절히 설정하세요.

  - [`implicit-arrow-linebreak`](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)
    <br>

  ```js
  // bad
  foo => bar;

  foo => bar;

  // good
  foo => bar;
  foo => bar;
  foo => bar;
  ```
