# node-express-proxy

Generate cert.pem and key.pem

1. Open Git Bash
2. Type -> winpty openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
3. Enter pass phrase -> password
4. Enter optional details -> leave it blank
5. Open start.bat
6. Start / Run Admin Portal Application
7. Access https://localhost:5000/ad
