```
# Trivia API Documentation

Welcome to the Trivia API documentation! This guide will walk you through the steps to access and utilize the Trivia API, which allows registered users to access trivia questions and related information. This API is built using Node.js, Express.js, MySQL, and other technologies.

## Table of Contents

1. [Getting Started](#getting-started)
    - [Registration and Authentication](#registration-and-authentication)
    - [Obtaining an API Key](#obtaining-an-api-key)
2. [Endpoints](#endpoints)
    - [Get Random Trivia Question](#get-random-trivia-question)
    - [Get Trivia Categories](#get-trivia-categories)
    - [Submit Trivia Answer](#submit-trivia-answer)
3. [Error Handling](#error-handling)
4. [Rate Limiting](#rate-limiting)
5. [Examples](#examples)

## Getting Started

### Registration and Authentication

Before using the Trivia API, you need to register on the Trivia API website to obtain an API key. Follow these steps:

1. Visit the [Trivia API Registration Page](https://www.example.com/register).
2. Fill out the registration form with your details.
3. After successful registration, you will receive an email confirmation.
4. Log in to the [Trivia API Login Page](https://www.example.com/login) with your credentials.

### Obtaining an API Key

Once you are logged in, you can obtain your API key:

1. Navigate to your account settings or profile page.
2. Locate the section for "API Key" and generate a new API key.
3. Keep your API key secure and do not share it publicly.

## Endpoints

### Get Random Trivia Question

Retrieve a random trivia question.

- **Endpoint:** `Post /questions`
- **Parameters:** None
- **Headers:**
  - `Authorization: Bearer YOUR_API_KEY`

**Response: `example`**
```json
{
  "id": 123,
  "category": "Science",
  "question": "What is the chemical symbol for gold?",
  "options": ["Au", "Ag", "Hg", "Cu"]
}
```

### Get Trivia Categories

Retrieve a list of available trivia categories.

- **Endpoint:** `GET /api/categories`
- **Parameters:** None
- **Headers:**
  - `Authorization: Bearer YOUR_API_KEY`

**Response:**

```json
{
  "categories": ["Science", "History", "Geography", "Movies", "Music"]
}
```

```json
{
  "answer": "Au"
}
```

**Response:**

```json
{
  "correct": true,
  "explanation": "The chemical symbol for gold is Au."
}
```

## Error Handling

In case of errors, the API will return appropriate HTTP status codes along with error messages in the response body. Common error codes include:

- `400 Bad Request`: Invalid request parameters or body.
- `401 Unauthorized`: Invalid or missing API key.
- `404 Not Found`: Resource not found.
- `500 Internal Server Error`: Server-side error.

## Rate Limiting

To ensure fair usage and prevent abuse, the Trivia API enforces rate limiting. Each API key is subject to a certain number of requests per minute. If the rate limit is exceeded, the API will return a `429 Too Many Requests` error.

## Examples

### Example Request

```http
POST https://trivia-api-sujit-akulwar.onrender.com/questions
body : {
    	"api_key":"1", 
	"category":"math", 
	"count" :"5"
}
```

### Example Response

```json
{
    "message": [
        {
            "qid": 1,
            "question": "What is the square root of 144?",
            "correct_answer": "12",
            "incorrect_answer1": "8",
            "incorrect_answer2": "10",
            "incorrect_answer3": "15",
            "category": "Math"
        },
        {
            "qid": 2,
            "question": "What is the value of π (pi) rounded to two decimal places?",
            "correct_answer": "3.14",
            "incorrect_answer1": "3.16",
            "incorrect_answer2": "3.12",
            "incorrect_answer3": "3.18",
            "category": "Math"
        },
        {
            "qid": 3,
            "question": "If x = 3 and y = 5, what is the value of 2x + 3y?",
            "correct_answer": "21",
            "incorrect_answer1": "19",
            "incorrect_answer2": "20",
            "incorrect_answer3": "23",
            "category": "Math"
        },
        {
            "qid": 4,
            "question": "What is the result of 8 squared?",
            "correct_answer": "64",
            "incorrect_answer1": "56",
            "incorrect_answer2": "72",
            "incorrect_answer3": "49",
            "category": "Math"
        },
        {
            "qid": 5,
            "question": "If a triangle has angles of 45 degrees, 45 degrees, and 90 degrees, what type of triangle is it?",
            "correct_answer": "Right triangle",
            "incorrect_answer1": "Equilateral triangle",
            "incorrect_answer2": "Isosceles triangle",
            "incorrect_answer3": "Scalene triangle",
            "category": "Math"
        },
        {
            "qid": 6,
            "question": "What is the result of 15 divided by 3?",
            "correct_answer": "5",
            "incorrect_answer1": "3",
            "incorrect_answer2": "4",
            "incorrect_answer3": "6",
            "category": "Math"
        },
        {
            "qid": 7,
            "question": "What is the area of a square with a side length of 7 units?",
            "correct_answer": "49 square units",
            "incorrect_answer1": "28 square units",
            "incorrect_answer2": "35 square units",
            "incorrect_answer3": "42 square units",
            "category": "Math"
        },
        {
            "qid": 8,
            "question": "If a rectangle has a length of 10 units and a width of 4 units, what is its perimeter?",
            "correct_answer": "28 units",
            "incorrect_answer1": "40 units",
            "incorrect_answer2": "24 units",
            "incorrect_answer3": "16 units",
            "category": "Math"
        },
        {
            "qid": 9,
            "question": "What is the value of 3! (3 factorial)?",
            "correct_answer": "6",
            "incorrect_answer1": "3",
            "incorrect_answer2": "9",
            "incorrect_answer3": "5",
            "category": "Math"
        },
        {
            "qid": 10,
            "question": "If the diameter of a circle is 10 units, what is its circumference?",
            "correct_answer": "31.42 units",
            "incorrect_answer1": "20 units",
            "incorrect_answer2": "15.7 units",
            "incorrect_answer3": "25.12 units",
            "category": "Math"
        }
    ]
}
```

## Conclusion

Congratulations! You now have access to the Trivia API and can start integrating it into your applications. If you encounter any issues or have questions, please refer to this documentation.

Happy trivia gaming! 🎉

```

```
