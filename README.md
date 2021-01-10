# Redux
Redux is an independent, third-party library. It is for state management.

## Redux Flow
Component (wants to manipulate app state) -> dispatches Actions -> Action reaches Reducers -> Reducers receive action and update State in Central Store -> Central Store triggers Subscription -> Subscription passes updated state to application.