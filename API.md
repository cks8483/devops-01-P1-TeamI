# API 디자인

## Request & Respones

[1]

Request body

- 모든 user_id는 header Authorization로 처리

Respones

```json
code 200
[
  {
     "_id": "1",
			"product":{
				"name": "안경테_1",
				"category" : "둥근 안경테",
			  "price" : 30000,
			  "Image": "http://image.auction.co.kr/itemimage/19/bc/0a/19bc0aa5b6.jpg"
			}
	},
	{
     "_id": "2",
     "product":{
				"name": "안경테_2",
				"category" : "사각 안경테",
			  "price" : 50000,
			  "Image": "https://www.glassmatch.kr/img/product/content/217-855.jpg"
			}
	},
	{
     "_id": "2",
     "product":{
				"name": "안경테_3",
				"category" : "사각 안경테",
			  "price" : 70000,
			  "Image": "https://www.glassmatch.kr/img/product/content/217-855.jpg"
			}
	}
]
```

[2]

Respone

```json
code 200
{
  "_id": "1",
	"product":{
		"name": "안경테_1",
		"category" : "둥근 안경테",
	  "price" : 30000,
	  "Image": "http://image.auction.co.kr/itemimage/19/bc/0a/19bc0aa5b6.jpg"
		}
}
```

[3]

Respone

```json
code 200
[
  {
     "_id": "2",
     "product":{
				"name": "안경테_2",
				"category" : "사각 안경테",
			  "price" : 50000,
			  "Image": "https://www.glassmatch.kr/img/product/content/217-855.jpg"
			}
	},
	{
     "_id": "2",
     "product":{
				"name": "안경테_3",
				"category" : "사각 안경테",
			  "price" : 70000,
			  "Image": "https://www.glassmatch.kr/img/product/content/217-855.jpg"
			}
	}
]
```

[4]

Respone

```json
code 200
[
    {
        "id" : "1",
        "user_id" : "1",
        "product_id" : "1",
        "quantity" : "4"
    },
		{
        "id" : "2",
        "user_id" : "1",
        "product_id" : "2",
        "quantity" : "1"
    },
		{
        "id" : "3",
        "user_id" : "2",
        "product_id" : "1",
        "quantity" : "3"
    }
]
```

[5]

Request body

```json
{
	"product_id" : "1",
	"quantity" : "3"
}
```

Respone

```json
code 200
{
    "id" : "3",
    "user_id" : "2",
    "product_id" : "1",
    "quantity" : "3"
}
```

[6]

Request body

```json
{
	"product_id" : "1",
	"quantity" : "4"
}
```

Respone

```json
code 200
{
   "id" : "3",
   "user_id" : "2",
   "product_id" : "1",
   "quantity" : "4"
}
```

[7]

Respone

```json
code 200
{
    "id" : "3",
    "user_id" : "2",
    "product_id" : "1",
    "quantity" : "4"
}
```

[8]

Request body

```json
{
	"item_order_id" : "4"
}
```

Respone

```json
code 201
{
    "id" : "2",
    "item_order_id" : "4"
}
```

[9]

Respone

```json
code 200
[
    {
        "id" : "1",
        "item_order_id" : "2"
    },
		{
        "id" : "2",
        "item_order_id" : "4"
    }
]
```

[10]

Respone

```json
code 200
{
    "id" : "2",
    "item_order_id" : "4"
}
```

[목차로](https://www.notion.so/Project-01-WAS-90370889e22f48acba4168c86d6bd901)
