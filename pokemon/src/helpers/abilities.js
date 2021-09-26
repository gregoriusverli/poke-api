export default function abilities(abil) {
  const abilitesPoke = abil.map((el) => el.ability.name);

  const result = abilitesPoke.map(
    (el) => el.charAt(0).toUpperCase() + el.slice(1)
  );

  return result.join(", ");
}
