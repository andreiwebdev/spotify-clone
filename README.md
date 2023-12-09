## Getting Started

### Prerequisites

Before you begin, make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Clone the Repository

First things first, clone the repository to your local machine:

```bash
git clone https://github.com/andreiwebdev/spotify-clone.git
cd spotify-clone
```

### 🌐 Setting Up the Backend

1. **Navigate to the Server Folder**  
   Open a terminal and navigate to the server folder:
   ```bash
   cd server
   ```

2. **Environment Variables**  
   Copy the `.env.example` file to a new `.env` file:
   ```bash
   cp .env.example .env
   ```
   ⚠️ Don't forget to fill the `.env` file with your own values! Or you can leave them by default but make sure that the port is not already in use.

3. **Install Dependencies**  
   Run the following command to install the necessary dependencies:
   ```bash
   npm install
   ```

4. **Start the Server**  
   Fire up the server with:
   ```bash
   npm run start
   ```
   🌟 Check if it's running by visiting [http://localhost:4000/discover](http://localhost:4000/discover). You should see the discover playlist.

### 🎨 Setting Up the Frontend

1. **Navigate to the Root Folder**  
   Open a new terminal and go back to the root `spotify-clone` folder:
   ```bash
   cd ..
   ```

2. **Environment Variables**  
   Just like with the backend, copy the `.env.example` file to a new `.env` file:
   ```bash
   cp .env.example .env
   ```

3. **Install Dependencies**  
   Install the required dependencies for the frontend:
   ```bash
   npm install
   ```

4. **Start the Frontend**  
   Launch the React app:
   ```bash
   npm run dev
   ```
   🎉 Access the frontend at [http://localhost:3000/](http://localhost:3000/) and enjoy your Spotify Clone!
