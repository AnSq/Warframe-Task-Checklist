import { describe, expect, test } from "vitest";
import { APP_VERSION } from "../js/app.js";
import pkg from "../../package.json" with { type: "json" };

describe("check version numbers", () => {
    test("package.json", () => {
        expect(pkg.version, "package.json version number does not match app.js APP_VERSION").toEqual(APP_VERSION);
    });
});
