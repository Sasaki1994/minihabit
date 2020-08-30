# minihabit

## install

1. git clone

2. npm install

3. npm run start

## webpack setting reference
- [Webpackのインストール](https://webpack.js.org/guides/getting-started/)
- [Webpackのセッティング](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
- [developmentとproductionの分離](https://webpack.js.org/guides/production/)

## deployed to
https://minihabit.web.app/

## view design
https://www.figma.com/file/aRgMAIFlVJLPlXlM7OHtOO/minihabit?node-id=1%3A2

## State

```json
{
  "habits": {
    "byId": {
      "1": {
          "id": 1,
          "name": "腕立て伏せ",
          "number": 1,
          "unit": "回",
          "userId": 1 
                },
      "2": {
          "id": 2,
          "name": "読書",
          "number": 1,
          "unit": "ページ",
          "user": 1
      }
    },
    "allIds": [1, 2]
  },

  "user": {
          "id": 1,
          "name": "松本"
   },

  "records": {
    "byId": {
      "1": {
          "id": 1,
          "habitId": 1,
          "number": 1,
          "created_at": "2020-08-30 12:00:00" 
      },
      "2": {
          "id": 2,
          "habitId": 2,
          "number": 4,
          "created_at": "2020-08-30 12:10:00" 
      }
    },
    "allIds": [1, 2]
  },

  "modal": {
    "isOpen": false,
    "habitId": ""
  }

}
```