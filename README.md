# Redux
Redux is an independent, third-party library. It is for state management.

## Redux Flow
Component (wants to manipulate app state) -> dispatches Actions -> Action reaches Reducers -> Reducers receive action and update State in Central Store -> Central Store triggers Subscription -> Subscription passes updated state to application.

## tips
- Updating Nested Objects
    - The key to updating the nested data is that every level of nesting must be copied and updated appropriately. 
    - You are encouraged to keep your state flattened and compose reducers as much as possible, because copying nested data can make code more difficult to read.
    - Inserting and removing items in Arrays
        - Copy first and mutable later
        - Only copy the parts needed to implement deletion
        - Using filter to implement deletion
        - As long as you don't mutate the original array
    -Updating an Item in an Array
        - Use Ay.map to return a new value for an item we want to update
        
## Use of Redux
| Type | Example | Use Redux |
|------|---------|-----------|
|Local UI State|Show/Hide Backdrop|Mostly handled within components|
|Persistent State|All Users, all Posts|Stored on server, relevant slice managed by Redux|
|Client State|Is Authenticated? Filters set by User|Managed via Redux|

## Action Creators
A function that returns a function.