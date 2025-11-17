"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = new Map();
users.set("kunnal", { village: "morta", age: 20, email: "kunnal@z.com" });
users.set("samay", { village: "sihani", age: 22, email: "samay@y.com" });
const out = users.get("kunnal");
console.log(out);
//# sourceMappingURL=Record.js.map