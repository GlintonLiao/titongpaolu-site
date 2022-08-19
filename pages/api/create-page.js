import { notion } from './client';

export default async function handler(req, res) {
    const obj = JSON.parse(req.body)
    const img = obj.img
    const texts = obj.texts
    console.log(img + " " + texts);
    await notion.pages.create({
      "parent": {
          "type": "database_id",
          "database_id": '56de3cdbd73e42a48312963191b6401e', 
      },
      "properties": {
          "Title": {
              "title": [
                  {
                      "text": {
                          "content": `${texts}`
                      }
                  }
              ]
          },
      },
      "children": [
          {
              "object": "block",
              "heading_2": {
                  "rich_text": [
                      {
                          "text": {
                              "content": `${img}`
                          }
                      }
                  ]
              }
          },
          {
              "object": "block",
              "paragraph": {
                  "rich_text": [
                      {
                          "text": {
                              "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                              "link": {
                                  "url": "https://en.wikipedia.org/wiki/Lacinato_kale"
                              }
                          },
                          "href": "https://en.wikipedia.org/wiki/Lacinato_kale"
                      }
                  ],
                  "color": "default"
              }
          }
      ]
  });
  return res.json("Success");
}