import { notion } from "./client";
import { getDate } from "../../utils/getDate";

export default async function handler(req, res) {
  const obj = JSON.parse(req.body);
  // const imgs = obj.imgs
  const text = obj.text;
  const date = getDate();

  // const imgObj = [];
  // imgs.map(img => {
  //     imgObj.push({
  //         "object": "block",
  //         "imgs": {
  //             "url": `${img}`
  //         }
  //     })
  // })

  await notion.pages.create({
    parent: {
      type: "database_id",
      database_id: process.env.NOTION_DATABASE_ID,
    },
    properties: {
      Title: {
        title: [
          {
            text: {
              content: `${date}`,
            },
          },
        ],
      },
    },
    children: [
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
                type: "text",
                text: {
                  content: `${date}`,
                  link: null
                },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              type: "text",
              text: {
                content: `${text}`,
                link: null
              },
            },
          ],
        },
      },
    ],
  });
  return res.json("Success");
}
