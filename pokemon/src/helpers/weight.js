export default function weightPoke(weight) {
  const kgWeight = weight * 0.1;
  const pounds = kgWeight / 0.45359237;

  return `${pounds.toString().slice(0, 4)} lbs (${kgWeight} kg)`;
}
