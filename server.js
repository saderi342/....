import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Route untuk serve HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║   🎬 TikTok Downloader Server         ║
║                                        ║
║   Server berjalan di:                  ║
║   http://localhost:${PORT}                ║
║                                        ║
║   Tekan Ctrl+C untuk stop server      ║
╚════════════════════════════════════════╝
    `);
});