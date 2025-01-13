# Translate Google API V1

This project is a simple implementation of the Google Translate API using Node.js and Express, deployed on Vercel. It allows users to translate text between multiple languages effortlessly.

## Features

- Free and unlimited access to the Google Translate API
- Automatic language detection
- Simple RESTful API for text translation
- Easy deployment and scalability using Vercel

## Getting Started

### Installation

1. Clone the repository:

   <pre>
   git clone https://github.com/yourusername/translate-google-api-v1.git
   cd translate-google-api-v1
   </pre>

2. Install dependencies using Bun:

   <pre>
   bun install
   </pre>

3. Start the application:

   <pre>
   bun dev
   </pre>

Your API should now be running on [http://localhost:3000/translate](http://localhost:3000/translate).

## How to Use the API

You can use tools like Postman, curl, or any HTTP client to make requests to the API.

### Example Request

To translate text, send a POST request to the `/translate` endpoint with the following JSON body:

**Request URL:**

<pre>
POST http://localhost:3000/translate
</pre>

**Example Request Body:**

<pre>
{
  "text": "hello world",
  "from": "en",  // Optional: Source language (use "auto" for automatic detection)
  "to": "es"     // Target language
}
</pre>

### Example Response

You should receive a response similar to this:

<pre>"hola mundo"</pre>

## API Endpoint

**POST /translate**

If the `from` field is omitted, the API will automatically detect the source language.

## Deployment

This application is deployed on Vercel. You can access the live API at:

[https://translate-google-api-v1.vercel.app/translate](https://translate-google-api-v1.vercel.app/translate)

## Contributing

Feel free to fork this repository and submit pull requests. Any contributions are welcome!

## Acknowledgments

- Thanks to Google for providing the Translate API.
- Thanks to Vercel for easy deployment options.
