"use strict";
const fs = require("fs");
fs.createReadStream(".credentials-env").pipe(fs.createWriteStream(".env"));
