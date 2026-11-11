import { test } from "node:test";
import assert from "node:assert/strict";
import { buildBriefText, buildMailto, validateBrief, type Brief } from "./brief.ts";

const valid: Brief = { name: "Camille Martin", email: "camille@example.com", company: "Atelier & associés", need: "solutions", message: "Nous souhaitons mieux retrouver les informations de notre documentation." };

test("a valid brief produces a draft addressed only to Hirakode", () => {
  assert.deepEqual(validateBrief(valid), {});
  const url = new URL(buildMailto(valid));
  assert.equal(url.protocol, "mailto:");
  assert.equal(url.pathname, "contact@hirakode.com");
  assert.equal(url.searchParams.get("subject"), "Projet Atelier & associés");
  assert.equal(url.searchParams.get("body"), buildBriefText(valid));
});

test("invalid or incomplete details are rejected before drafting", () => {
  const errors = validateBrief({ ...valid, name: " ", email: "invalid", need: "__proto__", message: "Court" });
  assert.deepEqual(Object.keys(errors), ["name", "email", "need", "message"]);
});

test("special characters cannot add recipients or mail headers", () => {
  const url = new URL(buildMailto({ ...valid, company: "A\r\nB&bcc=other@example.com", message: "Bonjour ? &bcc=other@example.com\nTexte avec accents : é, à, ç." }));
  assert.equal(url.searchParams.get("bcc"), null);
  assert.equal(url.searchParams.size, 2);
  assert.equal(url.searchParams.get("subject"), "Projet A B&bcc=other@example.com");
  assert.match(url.searchParams.get("body") ?? "", /Texte avec accents : é, à, ç/);
});

test("blank organisation remains optional and long messages are rejected", () => {
  assert.deepEqual(validateBrief({ ...valid, company: "" }), {});
  assert.ok(validateBrief({ ...valid, message: "a".repeat(2001) }).message);
  assert.ok(validateBrief({ ...valid, name: "a".repeat(101) }).name);
  assert.ok(validateBrief({ ...valid, company: "a".repeat(151) }).company);
});
