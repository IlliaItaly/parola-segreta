.setHeader('Content-Type', 'text/html; charset=utf-8');
risposta.end(fs.readFileSync('pubblico/index.html'));
} else if (percorso === '/tenta') {
const parola = indirizzo.searchParams.get('parola');
const errore = controlla(parola);
if (errore !== '') {
inviaJson(risposta, 400, { errore: errore });
} else {
inviaJson(risposta, 200, { parola: parola, esito: valuta(parola, segreta)
});
}
} else {
inviaJson(risposta, 404, { errore: 'Indirizzo sconosciuto' });
}
}
const server = http.createServer(rispondi);
server.listen(porta);
console.log('Server in ascolto sulla porta', porta);
