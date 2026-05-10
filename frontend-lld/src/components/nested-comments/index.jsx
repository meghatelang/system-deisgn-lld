import React from "react";
import Comments from "./Comments";

/*
This is demonstration of Reddit Nested Comments which can have replies up to n level
i.e Comment -> can have a reply -> a reply can have another reply and so on
*/

const data = [
  {
    username: "Megha",
    timeStr: "5m ago",
    comment:
      "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    replies: [
      {
        username: "Nishi",
        timeStr: "2m ago",
        comment:
          "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        replies: [
          {
            username: "Raghu",
            timeStr: "2m ago",
            comment:
              "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            replies: [
              {
                username: "Raghu",
                timeStr: "2m ago",
                comment:
                  "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
              },
              {
                username: "Raghu",
                timeStr: "2m ago",
                comment:
                  "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                replies: [
                  {
                    username: "Sapna",
                    timeStr: "2m ago",
                    comment:
                      "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "Laxman",
    timeStr: "10w ago",
    comment:
      "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    replies: [
      {
        username: "Sapna",
        timeStr: "2w ago",
        comment:
          "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        username: "Megha",
        timeStr: "2w ago",
        comment:
          "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        replies: [
          {
            username: "Raghu",
            timeStr: "2m ago",
            comment:
              "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
        ],
      },
    ],
  },
  {
    username: "Megha",
    timeStr: "5m ago",
    comment:
      "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    replies: [
      {
        username: "Nishi",
        timeStr: "2m ago",
        comment:
          "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        replies: [
          {
            username: "Raghu",
            timeStr: "2m ago",
            comment:
              "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
        ],
      },
    ],
  },
  {
    username: "Sapna",
    timeStr: "2w ago",
    comment:
      "Loreum isLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];
const NestedComments = () => {
  return (
    <div>
      <Comments data={data} />
    </div>
  );
};

export default NestedComments;
