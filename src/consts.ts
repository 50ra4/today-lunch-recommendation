export const EATING_SPEED = {
  slowly: '1',
  speedy: '0',
} as const;
export const EATING_SPEED_ITEMS = [
  {
    id: EATING_SPEED.slowly,
    text: 'ゆっくり食べたい',
  },
  {
    id: EATING_SPEED.slowly,
    text: 'サクッと食べたい',
  },
] as const;

export const HEALTH_MEAT = {
  health: '1',
  heavy: '0',
} as const;

export const HEALTH_MEAT_ITEMS = [
  { id: HEALTH_MEAT.health, text: '軽めにしたい' },
  { id: HEALTH_MEAT.heavy, text: 'ガッツリ食べたい' },
] as const;

export const HOW_MANY_PEOPLE = {
  none: '0',
  one: '1',
  two: '2',
  many: '3',
} as const;
export const HOW_MANY_PEOPLE_ITEMS = [
  { id: HOW_MANY_PEOPLE.none, text: 'なし' },
  { id: HOW_MANY_PEOPLE.one, text: '1人' },
  { id: HOW_MANY_PEOPLE.two, text: '2人' },
  { id: HOW_MANY_PEOPLE.many, text: '3人以上' },
] as const;

export const NICE_RESTAURANT = {
  nice: '1',
  cheep: '0',
} as const;
export const NICE_RESTAURANT_ITEMS = [
  { id: NICE_RESTAURANT.nice, text: '雰囲気の良いお店がいい' },
  { id: NICE_RESTAURANT.cheep, text: '庶民的なお店がいい' },
] as const;
