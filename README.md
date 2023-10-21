# Chatbox React App

Chatbox is an interactive chat interface built with React.js and Django for the backend. Users can send messages, search through message history, and clear the chat history. The front-end interacts with a backend API to fetch, send, and delete messages.

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/chatbox-react-app.git
    cd chatbox-react-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Setup the backend:**
    - Make sure you have Django installed and setup.
    - Configure the Django API endpoints as per the front-end axios requests.

4. **Start the React Development Server:**
    ```bash
    npm start
    ```
    This will start the development server and open the application in your default web browser at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Access the Chat Interface:**
    - Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the chat interface.

2. **Interact with Chatbox:**
    - Type your message in the input box and click "Send" to send a message.
    - The message history will update in real-time.
    - Use the search box to filter messages based on your search query.
    - Click "Clear Chat" to delete all messages.

3. **React Component Structure:**
    - The main component is `Chatbox`, which is located in the `src/Chatbox.js` file.
    - `Chatbox` component manages the state and lifecycle of the chat, and renders the chat interface.

## Dependencies

- [React.js](https://reactjs.org/)
- [axios](https://github.com/axios/axios)
- [Bootstrap](https://getbootstrap.com/)

## Contributing

Feel free to fork this repository and submit pull requests for any enhancements or bug fixes.

## License

[MIT License](LICENSE)
