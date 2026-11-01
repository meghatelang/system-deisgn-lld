export type FileNode = {
  name: string;
  isOpen?: boolean;
  files?: FileNode[];
};

export const initialData: FileNode[] = [
  {
    name: "node_mdoules",
  },
  {
    name: "src",
    isOpen: true,
    files: [
      {
        name: "App.tsx",
      },
      {
        name: "components",
        isOpen: false,
        files: [
          {
            name: "file.tsx",
          },
        ],
      },
    ],
  },
  {
    name: "public",
    isOpen: false,
    files: [
      {
        name: "index.html",
      },
    ],
  },
  {
    name: "Git",
    isOpen: false,
    files: [
      {
        name: ".gitignore",
      },
      {
        name: "commits",
        files: [
          {
            name: "file1.tsx",
          },

          {
            name: "file2.tsx",
          },
        ],
      },
    ],
  },
];
