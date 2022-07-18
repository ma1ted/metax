import { exists } from "https://deno.land/std/fs/mod.ts";
import { basename } from "https://deno.land/std/path/mod.ts";
import { bgRed } from "https://deno.land/std@0.123.0/fmt/colors.ts";
(async()=>await exists(Deno.args[0]) ? eval(basename(Deno.args[0]).split('.').slice(1).join('.')) : console.log(bgRed("File not found")))();