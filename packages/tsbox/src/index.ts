// (TypeScript: satisfiesオペレーターの使い所のひとつとして - Qiita)[https://qiita.com/suin/items/1b74645158263d2fa9af]
type Foo = {
  id: number;
  name: string;
};

const json = JSON.stringify({ id: 1, name: "foo" } satisfies Foo);

console.log(json);
