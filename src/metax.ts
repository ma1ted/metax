import { exists } from "https://deno.land/std/fs/mod.ts";
import { basename } from "https://deno.land/std/path/mod.ts";
import { bgRed } from "https://deno.land/std@0.123.0/fmt/colors.ts";

export default async function Metax(path: string) {
    if (await exists(path)) {
        return eval(
            basename(path)
                .split('.')
                .slice(1)
                .join('.')
                .replace(/(?<!©)≪/g, '<')
                .replace(/(?<!©)≫/g, '>')
                .replace(/(?<!©)×/g, '*')
                .replace(/(?<!©)÷/g, '/')
                .replace(/(?<!©)§/g, ':')
                .replace(/(?<!©)‖/g, '|')
                .replace(/(?<!©)‽/g, ':')
                .replace(/(?<!©)¬/g, '\\')
                .replace(/(?<!©)¡/g, '!')
        );
    } else {
        throw new Error(`${bgRed("Can not find file")} at ${path}`)
    }
}

console.log(await Metax(Deno.args[0]));
