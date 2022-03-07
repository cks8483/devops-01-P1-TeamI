# API 디자인

## Request & Respones

[1]
|메소드|엔드포인트|기능|
|----|--------|---|
|GET|/product|사용자는 모든 제품 목록을 조회할 수 있다.|

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
|메소드|엔드포인트|기능|
|----|--------|---|
|GET|/product/:id|사용자는 특정 제품 목록을 조회할 수 있다.|

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
|메소드|엔드포인트|기능|
|----|--------|---|
|GET|/product?category|사용자는 카테고리 별  제품 목록을 조회할 수 있다.|

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
|메소드|엔드포인트|기능|
|----|--------|---|
|GET|/cart|사용자는 모든 장바구니 목록을 조회할 수 있다.|

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
|메소드|엔드포인트|기능|
|----|--------|---|
|POST|/cart|사용자는 장바구니에 제품을 추가할 수 있다.|

Request body

```json
{
	"product_id" : "1",
	"quantity" : "3"
}
```

Respone

```json
code 201
{
    "id" : "3",
    "user_id" : "2",
    "product_id" : "1",
    "quantity" : "3"
}
```

[6]
|메소드|엔드포인트|기능|
|----|--------|---|
|PUT|/cart|사용자는 장바구니에 제품의 수량을 변경할 수 있다.|

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
|메소드|엔드포인트|기능|
|----|--------|---|
|DELETE|/cart|사용자는 장바구니에 제품을 제외할 수 있다.|

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
|메소드|엔드포인트|기능|
|----|--------|---|
|POST|/order|사용자는 장바구니에 제품을 주문할 수 있다.|

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
|메소드|엔드포인트|기능|
|----|--------|---|
|GET|/order|사용자는 모든 주문내역 목록을 조회할 수 있다.|

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
|메소드|엔드포인트|기능|
|----|--------|---|
|GET|/order:id|사용자는 특정 주문내역 목록을 조회할 수 있다.|

Respone

```json
code 200
{
    "id" : "2",
    "item_order_id" : "4"
}
```

