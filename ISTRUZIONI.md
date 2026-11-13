# 📚 Registro Presenze Scolastiche — Guida all'installazione

## Come funziona

Il **docente** apre l'app, preme "Avvia Fotocamera" e inquadra il QR code
dello studente. L'app rileva automaticamente se è un **ingresso** o un'**uscita**
e lo registra con orario. Alla fine della giornata, dall'app si esporta un
**file Excel** con tutti i movimenti.

---

## 📱 Installazione su iPhone/iPad (iOS)

> ⚠️ L'app DEVE essere aperta tramite **Safari** per funzionare correttamente.

1. **Apri Safari** sul tuo iPhone
2. Vai all'URL dove hai ospitato l'app (es. `https://tuosito.com/presenze/`)
3. Tocca l'icona **Condividi** (□↑) in basso
4. Scorri e tocca **"Aggiungi alla schermata Home"**
5. Dai un nome (es. "Presenze") e premi **Aggiungi**
6. L'app apparirà sulla schermata Home come una vera app

> ✅ Da questo momento si apre in modalità fullscreen senza barra Safari.

---

## 🤖 Installazione su Android (Chrome)

1. **Apri Chrome** sul tuo telefono Android
2. Vai all'URL dove hai ospitato l'app
3. Apparirà in basso una barra **"Aggiungi a schermata Home"** → tocca **Installa**
4. Oppure: menu ⋮ → "Aggiungi a schermata Home"
5. L'app è installata come app nativa

---

## 🌐 Come ospitare l'app (senza server)

### Opzione A — GitHub Pages (gratuito, consigliato)
1. Crea un account su [github.com](https://github.com)
2. Crea un nuovo repository pubblico
3. Carica tutti i file (`index.html`, `manifest.json`, `sw.js`, cartella `icons/`)
4. Vai in Settings → Pages → Source: `main` branch
5. L'app sarà disponibile su `https://tuonomeutente.github.io/tuo-repo/`

### Opzione B — Netlify (drag & drop, gratuito)
1. Vai su [netlify.com](https://netlify.com)
2. Trascina la cartella intera nella pagina
3. Ottieni subito un URL `https://nome-random.netlify.app`

### Opzione C — Server locale (rete scolastica)
```bash
# Con Python (se disponibile)
cd cartella-app
python3 -m http.server 8080

# Poi accedi da qualsiasi dispositivo della rete:
# http://IP_DEL_PC:8080
```

> ⚠️ Per la fotocamera su dispositivi fisici è **obbligatorio HTTPS**.
> GitHub Pages e Netlify forniscono HTTPS automaticamente.

---

## 📋 Come usare l'app

### Scheda SCANNER (docente usa questa)
- Premi **"Avvia Fotocamera"**
- Inquadra il QR code dello studente
- Il sistema registra automaticamente **Ingresso** o **Uscita**
- Compare un feedback visivo verde/rosso con nome e orario

### Scheda REGISTRO
- Tutti i movimenti del giorno, in ordine dal più recente
- Contatori: Presenti / Usciti / Totale ingressi
- Bottone **"Esporta Excel"** → scarica `Presenze_YYYY-MM-DD.xlsx`

### Uscita automatica programmata
- Nella scheda **Studenti** imposta per ogni studente l'**orario di uscita** (campo ⏰), oppure assegnalo a tutta una classe in un colpo solo
- Quando arriva l'orario, se lo studente risulta **presente**, l'uscita viene registrata da sola (etichetta «auto»)
- Se l'app è chiusa o il telefono è bloccato all'orario, l'uscita viene registrata **alla riapertura dell'app**, con l'orario programmato
- Se lo studente esce prima e il docente scansiona il QR, non si crea nessun doppione
- Se imposti un orario già passato, vale dal giorno dopo

### Scheda STUDENTI
- Aggiungi studenti con nome, cognome e classe
- Tocca **"QR"** accanto a uno studente per vedere il suo QR code personale
- **Stampa** il QR e consegnalo allo studente (o plastificalo)
- Ogni studente ha un ID univoco codificato nel QR

---

## 📊 File Excel esportato

Il file contiene **2 fogli**:
1. **Movimenti** — ogni singolo ingresso/uscita con orario esatto
2. **Riepilogo** — stato attuale di ogni studente (Presente / Uscito)

---

## 🔒 Privacy & Dati

- Tutti i dati restano **sul dispositivo** (localStorage del browser)
- Nessun dato viene inviato a server esterni
- Il file Excel viene salvato localmente sul telefono del docente

---

*App creata con tecnologie web standard. Compatibile con iOS 15+ e Android 10+.*
