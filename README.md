# Metax
Metax is an interpreter that runs metaprograms written in languages you create. Languages made with Metax most notably do not require code in the file itself, rather, all the rules required to run your program are defined in the language's name.

Take the `'Hello World!'` language as an example. When Metax is run on a file ending in `.'Hello World!'`, the output sent to stdout is `Hello World!`.

As such, Metax's [Hello World!](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) program is **0 bytes long**.

There is no code in the file, yet Metax magically knows what your intentions are with the language. Metax is really ahead of its time.

Languages made to run on the Metax interpreter use TypeScript rules and syntax.

## Alternative operators
Due to the nature of how operating systems work with file names and paths, it is impossible to use some characters in your language's name. In order to circumvent this, Metax supports some alternative characters which get replaced with their JavaScript counterparts when your language is run.

`≪` (`U+226A`, much less-than) maps to `<`; JavaScript's [*less than* operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than).

`≫` (`U+226B`, much greater-than) maps to `>`; JavaScript's [*greater than* operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than).

`×` (`U+00D7`, multiplication sign) maps to `*`; used (most commonly) as JavaScript's [*multiplication* operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication), but also used in notating [*generator functions*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

`÷` (`U+00F7`, obelus) maps to `/`; used as JavaScript's [*division* operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division).

`§` (`U+00A7`, section sign) maps to `:`; most commonly used to separate keys and values in JavaScript object notation, but also as  [*labels*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)

`‖` (`U+2016`, double vertical bar) maps to `|`; JavaScript's [*bitwise*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) and [*logical*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR) OR operators.

`‽` (`U+203D`, interrobang) maps to `?`, used in the [*nullish coalescing*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator), [*ternary*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator), [*optional chaining*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining), and [*logical nullish assignment*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment) operators.

`¬` (`U+00AC`, not sign) maps to `\`; is used to denote [*escape characters*](https://en.wikipedia.org/wiki/Escape_character#JavaScript).

`¡` (`U+00A1`, inverted exclamation mark) maps to `!`; and while not strictly forbidden, is there as an alternative if bash is giving you a hard time with `!`.

`©`(`U+00A9`, copyright sign) can be used to escape all the alternative operators above. Say, for example, you wanted your language to output an interrobang (‽) in a string. Without the escape character preceeding it, the interrobang would get translated into a question mark (?) when Metax is run. To preserve the interrobang and include it in the string, you would have to type `©‽` instead.

## Using Metax
To compile Metax, run `deno compile --allow-read ./src/metax.ts` from the project's root directory.

## Examples
The examples listed below are designed to demonstrate some of the key features of Metax.

The shell commands are listed as what you would run if you are using a compiled binary of Metax first, while underneath that is what you would run if you are just using the Deno CLI, i.e. in development.

### Example 1
Example 1 uses the `'Hello World!'` language. It's a fairly simple language, but a good demonstration of the basic usage of Metax.

It can be run like so
```bash
./metax ./examples/example1.\'Hello\ World\!\'
```
```bash
deno run --allow-read ./src/metax.ts ./examples/example1.\'Hello\ World\!\'
```

### Example 2
Example 2 uses the `const join = function(){const array = [-3, -2, -1, 0, 1, 2, 3]; return array.join(' ');};join();` language. It nicely demonstrates the use of functions, but is often slated for not utilising the alternative `≫` operator to replace the `function` keyword with ES6 anonymous arrow function notation. As such, the `(() =≫ {const array = [-3, -2, -1, 0, 1, 2, 3]; return array.join(' ')})();` language is preferred by many.

```bash
./metax ./examples/example2.const\ join\ \=\ function\(\)\{const\ array\ \=\ \[-3\,\ -2\,\ -1\,\ 0\,\ 1\,\ 2\,\ 3\]\;\ return\ array.join\(\'\ \'\)\;\}\;join\(\)\; 
```
```bash
deno run --allow-read ./src/metax.ts ./examples/example2.const\ join\ \=\ function\(\)\{const\ array\ \=\ \[-3\,\ -2\,\ -1\,\ 0\,\ 1\,\ 2\,\ 3\]\;\ return\ array.join\(\'\ \'\)\;\}\;join\(\)\;
```

### Example 3
Example 3 demonstrates the use of alternative operators. Note the use of `××`, which gets interpreted by Metax as `**`, which is JavaScript's exponentiation operator.
```bash
./metax.exe ./examples/example3.\(12\ ÷\ 4\)\ ≪\ \(\ 2\ ××\ 2\) 
```
```bash
deno run --allow-read ./src/metax.ts ./examples/example3.\(12\ ÷\ 4\)\ ≪\ \(\ 2\ ××\ 2\)
```
