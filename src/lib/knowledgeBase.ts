// src/lib/knowledgeBase.ts
// Knowledge base locale per il chatbot Area Leader — Summer Camp 2026
// L'astrolabio / VIVA International

export interface KnowledgeBlock {
  id: string;
  source: string;
  category: string;
  intent: string;
  content: string;
  criticality: "normale" | "alta" | "critica";
  escalationRequired: boolean;
  contactToShow: string | null;
}

export const knowledgeBase: KnowledgeBlock[] = [
  // ─── DOCUMENTI DI VIAGGIO ────────────────────────────────────────────────

  {
    id: "faq_documenti_uk_001",
    source: "FAQ SummerCamp2026",
    category: "Documenti",
    intent: "documenti per Gran Bretagna",
    content:
      "Per viaggiare nel Regno Unito è necessario il passaporto in corso di validità. " +
      "Prima della partenza bisogna richiedere l'ETA (Electronic Travel Authorisation) online. " +
      "La carta d'identità NON è sufficiente per il Regno Unito. " +
      "Verifica che il passaporto non sia scaduto con ampio anticipo rispetto alla partenza.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },

  {
    id: "faq_documenti_europa_001",
    source: "FAQ SummerCamp2026",
    category: "Documenti",
    intent: "documenti per Europa",
    content:
      "Per viaggiare nei paesi dell'Unione Europea è sufficiente la carta d'identità in corso di validità oppure il passaporto. " +
      "Verifica sempre che il documento non sia scaduto prima della partenza. " +
      "Alcuni paesi extra-UE ma in area Schengen potrebbero richiedere il passaporto: controlla le istruzioni nel tuo dossier di viaggio.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },

  {
    id: "faq_documenti_usa_canada_001",
    source: "FAQ SummerCamp2026",
    category: "Documenti",
    intent: "documenti per USA Canada",
    content:
      "Per viaggiare negli Stati Uniti o in Canada è obbligatorio il passaporto in corso di validità. " +
      "Per gli USA è necessario richiedere l'ESTA (Electronic System for Travel Authorization) online prima della partenza, se si viaggia senza visto. " +
      "Per il Canada è necessario richiedere l'eTA (electronic Travel Authorization) online. " +
      "Entrambi i documenti elettronici vanno richiesti con largo anticipo. " +
      "Controlla sempre le istruzioni specifiche nel tuo dossier di viaggio.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },

  {
    id: "faq_documenti_minori_001",
    source: "FAQ SummerCamp2026",
    category: "Documenti / Minori",
    intent: "minori di 14 anni documenti speciali",
    content:
      "I minori di 14 anni che viaggiano senza i genitori devono avere il modulo di affido/accompagnamento. " +
      "Il modulo può essere richiesto in Questura oppure tramite il portale online passaportonline.poliziadistato.it usando SPID o CIE. " +
      "L'approvazione può richiedere fino a una settimana: gestisci la pratica con anticipo. " +
      "Il Capogruppo deve verificare che tutti i minori di 14 anni abbiano questo documento prima della partenza.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "info@lastrolabio.it",
  },

  {
    id: "faq_passaporto_capogruppo_001",
    source: "FAQ SummerCamp2026",
    category: "Documenti",
    intent: "passaporto del Capogruppo invio copia",
    content:
      "Ogni Capogruppo deve inviare una copia del proprio passaporto a info@lastrolabio.it. " +
      "Questo passaggio è necessario per il corretto svolgimento delle procedure burocratiche. " +
      "Fallo appena possibile e non aspettare gli ultimi giorni prima della partenza.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },

  // ─── STUDENTI INPSIEME ───────────────────────────────────────────────────

  {
    id: "faq_inpsieme_001",
    source: "FAQ SummerCamp2026",
    category: "Procedure speciali",
    intent: "studenti INPSieme cosa fare boarding pass attestato",
    content:
      "Gli studenti beneficiari INPSieme sono indicati nella Leader's List. " +
      "Il Capogruppo deve fotografare il Boarding Pass sia all'andata che al ritorno e inviarlo immediatamente alla famiglia via SMS. " +
      "Deve inoltre conservare con cura l'Attestato di Frequenza rilasciato dalla scuola, fotografarlo e inviarlo alla famiglia. " +
      "Questi passaggi sono obbligatori e vanno fatti senza dimenticare nessun beneficiario.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },

  // ─── VIAGGIO / AEROPORTO ────────────────────────────────────────────────

  {
    id: "faq_aeroporto_anticipo_001",
    source: "FAQ SummerCamp2026",
    category: "Viaggio",
    intent: "anticipo arrivo aeroporto quanto prima",
    content:
      "Bisogna arrivare in aeroporto almeno 3 ore prima del volo, salvo indicazioni diverse nel dossier di viaggio. " +
      "È richiesta massima puntualità: tieni conto del traffico, di possibili scioperi e di altri imprevisti. " +
      "Controlla sempre il tuo dossier per istruzioni specifiche sul punto di ritrovo.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },

  {
    id: "faq_bagaglio_stiva_001",
    source: "FAQ SummerCamp2026",
    category: "Viaggio / Sicurezza",
    intent: "cosa non mettere bagaglio da stiva batterie litio",
    content:
      "Nel bagaglio da stiva NON vanno mai inseriti oggetti con batterie al litio. " +
      "Questi oggetti devono sempre essere portati nel bagaglio a mano: " +
      "- sigarette elettroniche e vape " +
      "- power bank " +
      "- PC portatili " +
      "- smartphone e cellulari " +
      "- tablet " +
      "Informa i ragazzi prima del check-in per evitare problemi in aeroporto.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },

  {
    id: "faq_documenti_volo_001",
    source: "FAQ SummerCamp2026",
    category: "Viaggio / Documenti",
    intent: "gestione documenti ragazzi durante volo check-in imbarco",
    content:
      "Dopo il check-in il Capogruppo deve ritirare i documenti dei ragazzi e tenerli con sé fino al controllo passaporti. " +
      "Dopo l'imbarco, riprendi subito i documenti per evitare smarrimenti durante il volo. " +
      "Raccomanda ai ragazzi di non perdere le carte di imbarco. " +
      "Il flusso corretto è: check-in → ritiro documenti → controllo passaporti → imbarco → restituzione documenti.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },

  // ─── ARRIVO ALL'ESTERO ───────────────────────────────────────────────────

  {
    id: "faq_arrivo_estero_001",
    source: "FAQ SummerCamp2026",
    category: "Arrivo",
    intent: "cosa fare appena atterrati all'estero aeroporto",
    content:
      "Appena atterrati segui questi passaggi in ordine: " +
      "1. Raduna tutto il gruppo prima di procedere. " +
      "2. Consegna i documenti per la dogana e ritirarli subito dopo. " +
      "3. Ritira tutti i bagagli al nastro. " +
      "4. Segnala subito eventuali danni o smarrimenti di valigie al banco Lost and Found. " +
      "5. Esci dall'area Baggage Claim e cerca l'incaricato con il logo della scuola locale. " +
      "Non lasciare mai il gruppo incustodito.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },

  {
    id: "faq_referente_aeroporto_001",
    source: "FAQ SummerCamp2026",
    category: "Arrivo / Problema",
    intent: "cosa fare se non si trova il referente in aeroporto",
    content:
      "Se non riesci a trovare il referente in aeroporto: " +
      "1. Non agire autonomamente e non lasciare l'aeroporto da sola. " +
      "2. Contatta subito il numero del referente locale indicato nel tuo dossier di viaggio. " +
      "3. Il referente ti darà le istruzioni per incontrare l'autista o il personale di accoglienza. " +
      "4. Se non riesci a contattare il referente locale, chiama il team L'astrolabio. " +
      "Il punto chiave è: non prendere iniziative autonome.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "info@lastrolabio.it",
  },

  // ─── EMERGENZE ───────────────────────────────────────────────────────────

  {
    id: "faq_emergenza_medica_001",
    source: "FAQ SummerCamp2026 + Group Leader Guide",
    category: "Emergenze",
    intent: "emergenza medica grave cosa fare 999 112",
    content:
      "In caso di emergenza medica grave: " +
      "1. Chiama immediatamente il 999 (UK) o il 112 (Europa). " +
      "2. Rimani con lo studente e non lasciarlo solo. " +
      "3. Avvisa il Welfare & Communications Manager o il duty mobile del centro appena possibile. " +
      "4. Non prendere decisioni mediche autonomamente. " +
      "5. Contatta il team L'astrolabio appena la situazione lo permette. " +
      "Il chatbot non sostituisce i contatti ufficiali di emergenza.",
    criticality: "critica",
    escalationRequired: true,
    contactToShow: "999 (UK) / 112 (Europa) + Welfare & Communications Manager",
  },

  {
    id: "faq_studente_malato_001",
    source: "FAQ SummerCamp2026 + Group Leader Guide",
    category: "Salute",
    intent: "studente sta male cosa fare",
    content:
      "Se uno studente sta male: " +
      "1. Informare subito il Welfare & Communications Manager o il duty mobile del centro. " +
      "2. Segnalare se lo studente sarà assente da lezioni o attività. " +
      "3. Non lasciare lo studente solo. " +
      "4. Lo staff deve sapere sempre dove si trovano gli studenti. " +
      "In caso di emergenza grave chiama il 999 (UK) o il 112. " +
      "Non gestire situazioni serie da solo/a.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "Welfare & Communications Manager / duty mobile",
  },

  {
    id: "faq_emergenza_contatti_001",
    source: "FAQ SummerCamp2026",
    category: "Emergenze",
    intent: "chi contattare in caso di emergenza contatti ufficiali",
    content:
      "In caso di emergenza rivolgiti in questo ordine: " +
      "1. Staff della scuola locale (primo punto di contatto). " +
      "2. Numero di emergenza riservato ai Capigruppo (presente nel dossier). " +
      "3. Team L'astrolabio: info@lastrolabio.it. " +
      "Nei centri di Egham, Eastbourne, Cirencester, Bath e Nottingham è presente anche l'Italian Coordinator. " +
      "Non prendere iniziative autonome in situazioni critiche.",
    criticality: "critica",
    escalationRequired: true,
    contactToShow: "Staff locale + info@lastrolabio.it",
  },

  // ─── ASSICURAZIONE ───────────────────────────────────────────────────────

  {
    id: "faq_assicurazione_001",
    source: "FAQ SummerCamp2026",
    category: "Assicurazione",
    intent: "assicurazione Polizza Amica come funziona",
    content:
      "Il programma Summer Camp 2026 include la copertura assicurativa Polizza Amica. " +
      "Copre gli studenti durante il viaggio e il soggiorno all'estero. " +
      "Per ulteriori dettagli sulle coperture specifiche, contatta il team L'astrolabio a info@lastrolabio.it.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },

  {
    id: "faq_sinistro_001",
    source: "FAQ SummerCamp2026",
    category: "Assicurazione",
    intent: "chi apre il sinistro assicurativo",
    content:
      "Il sinistro assicurativo deve essere aperto direttamente dal Capogruppo mentre si trova all'estero. " +
      "Successivamente viene gestito dalla famiglia dello studente al rientro in Italia, " +
      "perché può riguardare dati sanitari sensibili. " +
      "L'astrolabio agisce come intermediario tra lo studente e l'assicurazione. " +
      "Per qualsiasi dubbio contatta il team a info@lastrolabio.it.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "info@lastrolabio.it",
  },

  // ─── ACCESSO E STRUMENTI ─────────────────────────────────────────────────

  {
    id: "faq_accesso_area_leader_001",
    source: "FAQ SummerCamp2026",
    category: "Strumenti",
    intent: "accesso Area Leader portale informazioni",
    content:
      "L'Area Leader è la sezione riservata del portale dove trovi le informazioni operative per il tuo viaggio. " +
      "Contiene documenti, dossier, contatti e istruzioni specifiche per il tuo gruppo. " +
      "Per problemi di accesso o credenziali contatta il team L'astrolabio a info@lastrolabio.it.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },

  {
    id: "faq_italian_coordinator_001",
    source: "FAQ SummerCamp2026",
    category: "Contatti",
    intent: "Italian Coordinator 2026 chi è a cosa serve",
    content:
      "L'Italian Coordinator è una figura presente in alcuni centri Summer Camp 2026 " +
      "per supportare i Group Leader italiani durante il soggiorno. " +
      "È presente nei centri di: Egham, Eastbourne, Cirencester, Bath e Nottingham. " +
      "È un punto di riferimento importante per i Capigruppo italiani in caso di necessità.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },

  // ─── CONDOTTA DEL GROUP LEADER ───────────────────────────────────────────

  {
    id: "conduct_alcohol_001",
    source: "Group Leader Code of Conduct",
    category: "Condotta",
    intent: "alcol in servizio group leader può bere",
    content:
      "No. Il Group Leader non deve consumare alcol né essere sotto l'effetto di alcol mentre è in servizio. " +
      "Deve rispettare le regole anche su fumo, sigarette elettroniche/vaping e sostanze vietate. " +
      "La violazione di queste regole può portare a procedure disciplinari.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },

  {
    id: "conduct_foto_studenti_001",
    source: "Group Leader Code of Conduct",
    category: "Condotta / Safeguarding",
    intent: "foto personali con studenti permesso",
    content:
      "No. Gli adulti non sono autorizzati a scattare o scambiare foto personali con gli studenti durante il corso. " +
      "Per tutti i temi relativi alla tutela dei minori fare riferimento alla Safeguarding Policy. " +
      "In caso di dubbi su questo argomento contatta il team L'astrolabio.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "info@lastrolabio.it",
  },

  // ─── RESPONSABILITÀ E GESTIONE STUDENTI ──────────────────────────────────

  {
    id: "roles_registrazione_001",
    source: "Group Leader Roles and Responsibilities",
    category: "Responsabilità",
    intent: "quante volte registrare gli studenti al giorno",
    content:
      "Gli studenti devono essere registrati almeno tre volte al giorno. " +
      "I controlli avvengono in mattinata, nel pomeriggio e alla sera. " +
      "La sera il Group Leader deve firmare il registro nell'edificio residenziale per confermare che tutti i suoi studenti siano presenti. " +
      "Se il registro non viene firmato entro le 22:00, il team di gestione può contattare il Group Leader.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },

  {
    id: "roles_camera_giorno_001",
    source: "Group Leader Roles and Responsibilities",
    category: "Sicurezza campus",
    intent: "studenti possono tornare in camera da soli durante il giorno",
    content:
      "No. Gli studenti non devono tornare nelle camere o negli alloggi durante il giorno senza supervisione. " +
      "Non devono essere lasciati non accompagnati nelle accommodation blocks. " +
      "Se il Group Leader non è sul campus durante il giorno, deve spiegare agli studenti che non possono tornare in camera nemmeno durante le pause.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },

  {
    id: "roles_escursioni_001",
    source: "Group Leader Roles and Responsibilities",
    category: "Escursioni",
    intent: "cosa fa la leader durante le escursioni responsabilità",
    content:
      "Durante le escursioni la responsabilità organizzativa generale è dello staff Elac. " +
      "Il Group Leader deve: " +
      "1. Assicurarsi che gli studenti siano al punto di partenza all'orario richiesto. " +
      "2. Verificare la presenza di tutti a ogni checkpoint (head count o roll call). " +
      "3. Raccogliere i numeri di telefono degli studenti autorizzati ad avere tempo libero. " +
      "4. Concordare con lo staff Elac eventuali cambi all'itinerario. " +
      "Non prendere decisioni autonome sull'organizzazione delle escursioni.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },
];

// ─── FUNZIONE DI RICERCA ─────────────────────────────────────────────────────

/**
 * Cerca i blocchi più rilevanti nella knowledge base in base alla domanda.
 * Usa una ricerca semplice a parole chiave: conta quante parole della domanda
 * compaiono nel testo del blocco (intent + content + category).
 *
 * @param question - La domanda dell'utente
 * @param limit - Numero massimo di blocchi da restituire (default: 3)
 * @returns Array di blocchi ordinati per rilevanza
 */
export function findRelevantChunks(
  question: string,
  limit: number = 3
): KnowledgeBlock[] {
  // Normalizza la domanda: minuscolo, rimuovi punteggiatura
  const normalizedQuestion = question
    .toLowerCase()
    .replace(/[^\w\sàáèéìíòóùú]/g, " ");

  // Parole da ignorare (stopwords italiane comuni)
  const stopwords = new Set([
    "il", "lo", "la", "i", "gli", "le", "un", "uno", "una",
    "di", "a", "da", "in", "con", "su", "per", "tra", "fra",
    "e", "o", "ma", "se", "che", "chi", "cui", "non", "più",
    "mi", "ti", "si", "ci", "vi", "ne", "ho", "ha", "ai",
    "del", "della", "delle", "degli", "dei", "al", "alla",
    "devo", "fare", "cosa", "come", "dove", "quando", "quali",
    "quale", "questo", "questa", "questi", "queste", "mio",
    "mia", "miei", "deve", "posso", "sono", "stato", "stata",
    "gli", "all", "nel", "nella", "dei", "suo", "sua",
  ]);

  // Estrai parole significative dalla domanda
  const keywords = normalizedQuestion
    .split(/\s+/)
    .filter((w) => w.length > 2 && !stopwords.has(w));

  if (keywords.length === 0) return [];

  // Calcola un punteggio per ogni blocco
  const scored = knowledgeBase.map((block) => {
    const searchText = [
      block.intent,
      block.content,
      block.category,
    ]
      .join(" ")
      .toLowerCase();

    let score = 0;

    for (const keyword of keywords) {
      // Corrispondenza esatta nel testo
      if (searchText.includes(keyword)) {
        score += 2;
      }
      // Corrispondenza parziale (keyword è contenuta in una parola del testo)
      const words = searchText.split(/\s+/);
      for (const word of words) {
        if (word.includes(keyword) && word !== keyword) {
          score += 1;
        }
      }
    }

    // Bonus per i blocchi critici (emergenze sempre prioritarie)
    if (block.criticality === "critica") score += 1;

    return { block, score };
  });

  // Ordina per punteggio decrescente e prendi i migliori
  return scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ block }) => block);
}