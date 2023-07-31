import { readFileSync } from "fs";

import path from "path";

export const option = {
    key: readFileSync(path.join(__dirname,"private-key.txt")),
    cert: readFileSync(path.join(__dirname,"public-key.txt"))
}
