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

- **Endpoint:** `GET /api/questions/random`
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

### Submit Trivia Answer

Submit an answer to a trivia question.

- **Endpoint:** `POST /api/questions/:id/answer`
- **Parameters:**
  - `id`: The ID of the trivia question
- **Headers:**
  - `Authorization: Bearer YOUR_API_KEY`
- **Request Body:**

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
GET /api/questions/random
Authorization: Bearer YOUR_API_KEY
```

### Example Response

```json
{
  "id": 123,
  "category": "Science",
  "question": "What is the chemical symbol for gold?",
  "options": ["Au", "Ag", "Hg", "Cu"]
}
```

## Conclusion

Congratulations! You now have access to the Trivia API and can start integrating it into your applications. If you encounter any issues or have questions, please refer to this documentation or contact our support team at support@example.com.

Happy trivia gaming! 🎉

```

```
