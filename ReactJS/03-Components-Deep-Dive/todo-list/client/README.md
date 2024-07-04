## TODO List challenge - Steps:

1. Export components (Header, Footer, TodoList, TodoItem)
2. Import useState and useEffect
3. Use them to fetch data from the server `http://localhost:3030/jsonstore/todos/`
   1. useEffect is called at start to fetch once
   2. useState is used to set the array with Todos initially
4. Map over all the TODO items in the table, via table rows
   1. pass key (_id)
   2. pass Props (_id, text, isCompleted)
   3. consume the Props in the TodoItem component
   4. render className dynamically (ternary operator)
   5. render Status dynamically (based on isCompleted)
   6. BONUS: button onClick with function
      1. pass changeStatusHandler F from List to Item as prop
      2. pass ID of clicked todo from child to parent via this prop
      3. change todo status in the state