import { notion } from "./client";

export const queryContent = async (pages) => {
  const res = await Promise.all(
    pages.map((page) =>
      notion.blocks.children.list({
        block_id: page.id,
      })
    )
  );

  console.log(res);
  return res;
};
