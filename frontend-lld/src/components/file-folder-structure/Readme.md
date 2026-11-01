### Implement a File Folder Structure

## Use Cases

1. Use the provided initialData to render the file and folder structure recursively.
2. If a node has a files property, treat it as a folder; otherwise, treat it as a file.
3. Display + for closed folders and - for open folders.
4. Clicking + should expand a folder, and clicking - should collapse it.
5. Initially, src should be expanded, while public, Git, and components should be collapsed.
6. Display one global input box at the top to enter a filename.
7. Display a + button at the root level and next to every folder.
8. When the user enters a filename in the global input and clicks a folder's + button, create a file with that name inside the selected folder.
9. When the user clicks the root-level + button, create the file directly inside the root.
10. After creating a file, automatically expand the destination folder and clear the global input.
11. Do not create files if the global input is empty or contains only whitespace.
12. Prevent duplicate filenames within the same folder.
13. Double-clicking a file should convert it into an empty folder.
14. The converted folder should be expanded and should support adding files using its own + button.
15. Support nested folders at any depth.
16. Update the React state immutably without modifying the existing state directly.
