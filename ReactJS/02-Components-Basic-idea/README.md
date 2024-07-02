Theory:
1. Components let you split UI into *reusable* pieces
2. isolation
3. you can define components as
   1. functions
   2. classes
4. Functional component is a F that ACCEPTS SINGLE ARGUMENT called props (object with data)
   1. returns ReactElement.
    ```js
    function Person(props){
        return <div>My name is {props.name}</div>
    }
    ```
    2. Class Component example (you must define render() method)
    ```js
    class Person extends React.Component{
        render(){
            return <h1>My name is {this.props.name}</h1>
        }
    }

    ```