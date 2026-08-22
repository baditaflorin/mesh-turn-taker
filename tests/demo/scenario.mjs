export default async function turnTakerScenario(a, b) {
  await a.getByRole("button", { name: "Set order" }).click();
  await b.getByRole("heading", { name: "Now speaking: Ada" }).waitFor({ timeout: 10_000 });
  await a.getByRole("button", { name: "Next speaker" }).click();
  await b.getByRole("heading", { name: "Now speaking: Ben" }).waitFor({ timeout: 10_000 });
  await a.waitForTimeout(1800);
}
