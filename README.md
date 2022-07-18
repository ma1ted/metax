## Alternative operators
Due to the nature of how operating systems work with file names and paths, it is impossible to use some characters in your code. In order to circumvent this, metax supports some alternative characters which get replaced with their JavaScript counterparts your language is run.

Illegal characters: `\ / : * ? < > | `

`≪` (`U+226A`, much less-than) maps to `<`; JavaScript's [*less than* operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than).

`≫` (`U+226B`, much greater-than) maps to `>`; JavaScript's [*greater than* operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than).

`×` (`U+00D7`, multiplication sign) maps to `*`; used (most commonly) as JavaScript's [*multiplication* operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication), but also used in notating [*generator functions*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

`÷` (`U+00F7`, obelus) maps to `/`; used as JavaScript's [*division* operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division).

`§` (`U+00A7`, section sign) maps to `:`; most commonly used to separate keys and values in JavaScript object notation, but also as  [*labels*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)

`‖` (`U+2016`, double vertical bar) maps to `|`; JavaScript's [*bitwise*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) and [*logical*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR) OR operators.

`‽` (`U+203D`, interrobang) maps to `?`, used in the [*nullish coalescing*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator), [*ternary*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator), [*optional chaining*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining), and [*logical nullish assignment*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment) operators.

`¬` (`U+00AC`, not sign) maps to `\`; is used to denote [*escape characters*](https://en.wikipedia.org/wiki/Escape_character#JavaScript).

`¡` (`U+00A1`, inverted exclamation mark) maps to `!`; and while not strictly forbidden, is there as an alternative if bash is giving you a hard time with `!`.

`©`(`U+00A9`, copyright sign) can be used to escape all the alternative operators above. Say, for example, you wanted your language to output an interrobang (‽) in a string. Without the escape character preceeding it, the interrobang would get translated into a question mark (?) when metax is run. To preserve the interrobang and include it in the string, you would have to type `©‽` instead.

## Examples

### Example 1
Example 1 uses the language `'Hello World!'`. It's a fairly simple language, but a good demonstration of the basic usage of metax.

It can be run like so
```bash
./metax ./examples/example1.\'Hello\ World\!\'
```
Or in development;
```bash
deno run --allow-read ./src/index.ts ./examples/example1.\'Hello\ World\!\'
```