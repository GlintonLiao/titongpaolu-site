import { notion } from "./client";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default async function handler(req, res) {
  const obj = JSON.parse(req.body);
  // const imgs = obj.imgs
  const text = obj.text;
  const date = new Date();
  const formattedDate =
    months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

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
      database_id: "56de3cdbd73e42a48312963191b6401e",
    },
    properties: {
      Title: {
        title: [
          {
            text: {
              content: `${formattedDate}`,
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
                  content: `${formattedDate}`,
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
