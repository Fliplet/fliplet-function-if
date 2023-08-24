# App Action Function: "IF"

This function implements an IF block to be used in the App Action framework.

The function expects a `condition` defined in the settings. Here's a sample of the `functions` configuration:

```json
[
  {
    "functions": [
      {
        "settings": {
          "message": "Hello world"
        },
        "widgetId": 123
      }
    ],
    "settings": {
      "condition": "context.foo === 'bar'"
    },
    "widgetId": 456
  }
]
```
