// src/lib/knowledgeBase.ts
// Knowledge base completa — Summer Camp 2026
// Fonti: FAQ SummerCamp2026, Group Leader Guide, Roles & Responsibilities, Code of Conduct

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

  // ─── DOCUMENTI ───────────────────────────────────────────────────────────

  {
    id: "faq_doc_uk_001",
    source: "FAQ SummerCamp2026",
    category: "Documenti",
    intent: "documenti per Gran Bretagna UK passaporto ETA",
    content: "Per il Regno Unito serve il passaporto in corso di validità e l'ETA (Electronic Travel Authorisation), da richiedere online prima della partenza. La carta d'identità NON è accettata per il Regno Unito. Verificate che il passaporto non sia scaduto con largo anticipo.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },
  {
    id: "faq_doc_europa_001",
    source: "FAQ SummerCamp2026",
    category: "Documenti",
    intent: "documenti per Europa carta identita",
    content: "Per i paesi dell'Unione Europea è sufficiente la carta d'identità in formato elettronico. Il vecchio formato cartaceo non è più accettato. Verificate sempre la validità del documento prima della partenza.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },
  {
    id: "faq_doc_usa_canada_001",
    source: "FAQ SummerCamp2026",
    category: "Documenti",
    intent: "documenti per USA Canada ESTA ETA passaporto",
    content: "Per USA e Canada serve il passaporto con almeno 6 mesi di validità residua. Per gli USA va richiesta l'ESTA online prima della partenza; per il Canada l'ETA. Avviate le pratiche con largo anticipo.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },
  {
    id: "faq_doc_minori_001",
    source: "FAQ SummerCamp2026",
    category: "Documenti / Minori",
    intent: "minori di 14 anni documenti affido accompagnamento",
    content: "I minori di 14 anni che viaggiano senza genitori devono avere il modulo di affido/accompagnamento. Può essere richiesto in Questura (con documenti dei genitori e dell'accompagnatore) oppure tramite il portale passaportonline.poliziadistato.it con SPID o CIE. L'approvazione può richiedere fino a una settimana — avviate la pratica con anticipo.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "info@lastrolabio.it",
  },
  {
    id: "faq_doc_capogruppo_001",
    source: "FAQ SummerCamp2026",
    category: "Documenti",
    intent: "passaporto capogruppo inviare copia",
    content: "Ogni Capogruppo deve inviare una copia del proprio passaporto a info@lastrolabio.it per garantire il corretto svolgimento delle procedure burocratiche.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },
  {
    id: "faq_doc_stranieri_001",
    source: "FAQ SummerCamp2026",
    category: "Documenti",
    intent: "studenti stranieri non italiani visto ambasciata",
    content: "Gli studenti con cittadinanza non italiana devono ottenere un visto di ingresso rivolgendosi all'Ambasciata del paese di destinazione. L'astrolabio fornisce i certificati necessari, ma la procedura è a carico della famiglia. È fondamentale avviare la pratica con largo anticipo.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "info@lastrolabio.it",
  },
  {
    id: "faq_doc_parental_consent_001",
    source: "FAQ SummerCamp2026",
    category: "Documenti",
    intent: "parental consent modulo genitori firma",
    content: "Alcune scuole partner richiedono un Parental Consent: un modulo inviato via email ai genitori che deve essere compilato, firmato dal genitore o tutore legale e restituito prima della partenza o in loco. Una copia deve essere portata dallo studente per tutto il viaggio.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },

  // ─── INPSIEME ────────────────────────────────────────────────────────────

  {
    id: "faq_inpsieme_001",
    source: "FAQ SummerCamp2026",
    category: "Procedure speciali",
    intent: "studenti INPSieme INPS boarding pass attestato frequenza",
    content: "I ragazzi beneficiari INPS sono indicati nella Leader's List. Il Capogruppo deve fotografare subito il Boarding Pass (andata e ritorno) e inviarlo alla famiglia via SMS. Deve anche conservare con cura l'Attestato di Frequenza rilasciato dalla scuola, fotografandolo e inviandolo alla famiglia.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },

  // ─── VIAGGIO / AEROPORTO ─────────────────────────────────────────────────

  {
    id: "faq_viaggio_anticipo_001",
    source: "FAQ SummerCamp2026",
    category: "Viaggio",
    intent: "anticipo aeroporto quanto ore prima partenza",
    content: "Bisogna raggiungere l'aeroporto almeno 3 ore prima del volo, salvo indicazioni diverse nel dossier di viaggio. Si raccomanda massima puntualità anche in caso di sciopero o traffico.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "faq_viaggio_assistenza_001",
    source: "FAQ SummerCamp2026",
    category: "Viaggio",
    intent: "assistenza in aeroporto agenzia partner",
    content: "In tutti gli aeroporti italiani è disponibile il servizio di assistenza dell'agenzia partner de L'astrolabio, che supporterà il gruppo durante il check-in e per ogni imprevisto.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },
  {
    id: "faq_viaggio_bagaglio_001",
    source: "FAQ SummerCamp2026",
    category: "Viaggio",
    intent: "cosa non mettere bagaglio da stiva batterie litio",
    content: "Non inserire mai nel bagaglio da stiva: sigarette elettroniche, power bank, PC, cellulari, tablet o qualsiasi oggetto con batterie al litio. Questi vanno portati nel bagaglio a mano.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "faq_viaggio_pasto_001",
    source: "FAQ SummerCamp2026",
    category: "Viaggio",
    intent: "pasto in aereo voli continentali cibo",
    content: "Sui voli continentali non è previsto alcun pasto a bordo. Si consiglia di portare uno snack da casa o acquistarlo in aeroporto prima dell'imbarco.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "faq_viaggio_documenti_volo_001",
    source: "FAQ SummerCamp2026",
    category: "Viaggio",
    intent: "gestione documenti ragazzi volo check-in imbarco passaporti",
    content: "Dopo il check-in, ritirate i documenti dei ragazzi e teneteli fino al controllo passaporti. Riprendeteli subito dopo l'imbarco per evitare smarrimenti. Raccomandate ai ragazzi di non perdere le carte di imbarco.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "faq_viaggio_dossier_001",
    source: "FAQ SummerCamp2026",
    category: "Viaggio",
    intent: "dossier di viaggio quando arriva cosa contiene",
    content: "Il Dossier di Viaggio è un link personalizzato inviato via email alle famiglie circa 3-4 settimane prima della partenza. Contiene: documenti necessari, operativo voli, indirizzo della scuola o famiglia ospitante, contatti del Capogruppo, Center Guide, regolamento e PDF dell'assicurazione Europ Assistance.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },
  {
    id: "faq_viaggio_bustafinale_001",
    source: "FAQ SummerCamp2026",
    category: "Viaggio",
    intent: "busta finale cosa arriva 5 giorni prima partenza numero emergenza",
    content: "Circa 5 giorni prima della partenza, dall'indirizzo bustafinale@lastrolabio.it arriva la Leader's List definitiva con allergie, intolleranze e programmi facoltativi, i dati degli studenti in volo, il numero di emergenza riservato al Capogruppo e, dove previsto, il contatto dell'Italian Coordinator.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },

  // ─── ARRIVO ──────────────────────────────────────────────────────────────

  {
    id: "faq_arrivo_estero_001",
    source: "FAQ SummerCamp2026",
    category: "Arrivo",
    intent: "cosa fare atterrati all estero aeroporto bagagli dogana",
    content: "All'atterraggio: 1. Radunate tutto il gruppo prima di procedere. 2. Consegnate i documenti per la dogana e ritirateli subito dopo. 3. Ritirate tutti i bagagli e segnalate subito eventuali danni o smarrimenti al Lost and Found. 4. Uscite dall'area Baggage Claim e cercate l'incaricato con il logo della scuola locale.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "faq_arrivo_referente_001",
    source: "FAQ SummerCamp2026",
    category: "Arrivo",
    intent: "referente non trovato aeroporto cosa fare",
    content: "Se non si trova il referente in aeroporto, contattate il numero del referente locale che vi darà tutte le indicazioni per incontrare l'autista. Non agite mai autonomamente.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "Numero referente locale nel dossier + info@lastrolabio.it",
  },
  {
    id: "faq_arrivo_transfer_001",
    source: "FAQ SummerCamp2026",
    category: "Arrivo",
    intent: "transfer aeroporto college bus autista valigie",
    content: "Prima di salire sul bus, verificate che tutti gli studenti e tutte le valigie siano presenti. Confermate l'indirizzo di destinazione con l'autista. Le scuole ottimizzano il riempimento del bus: potrebbe essere necessario attendere in aeroporto il gruppo successivo.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "faq_arrivo_college_001",
    source: "FAQ SummerCamp2026",
    category: "Arrivo",
    intent: "arrivo college campus accoglienza stanze chiavi",
    content: "Verrete accolti dallo staff della scuola locale e, nei centri L'astrolabio, dall'Italian Coordinator. Riceverete le chiavi delle stanze preassegnate. Segnalate subito eventuali danni in camera. In caso di abbinamenti sbagliati, con calma si sistema tutto.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: "Italian Coordinator o staff locale",
  },
  {
    id: "faq_arrivo_homestay_001",
    source: "FAQ SummerCamp2026",
    category: "Arrivo",
    intent: "arrivo famiglia ospitante homestay cosa fare",
    content: "Verificate che la famiglia sia quella assegnata. In caso di cambio, informate subito la famiglia italiana e L'astrolabio. Consegnate il vostro recapito telefonico alla host family.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "info@lastrolabio.it",
  },

  // ─── SOGGIORNO ───────────────────────────────────────────────────────────

  {
    id: "faq_soggiorno_primo_giorno_001",
    source: "FAQ SummerCamp2026",
    category: "Soggiorno",
    intent: "primo giorno scuola test ingresso orientation",
    content: "Il primo giorno si svolge il test di ingresso (spesso online prima della partenza), l'orientation tour del college, la presentazione del regolamento e la verifica degli iscritti al Trinity GESE Exam con il Director of Studies.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "faq_soggiorno_area_leader_001",
    source: "FAQ SummerCamp2026",
    category: "Strumenti",
    intent: "area leader accesso portale sito",
    content: "L'Area Leader è la sezione riservata di lastrolabio.it con Guide, Centre Guide, assicurazione, permessi e FAQ. Le credenziali di accesso ti vengono comunicate dal team L'astrolabio. Per problemi di accesso scrivi a info@lastrolabio.it.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },
  {
    id: "faq_soggiorno_ultimo_giorno_001",
    source: "FAQ SummerCamp2026",
    category: "Soggiorno",
    intent: "ultimo giorno prima rientro camere depositi valigie",
    content: "Nell'ultimo giorno prima del rientro: 1. Liberate le camere in mattinata, anche se si parte la sera. 2. Verificate che gli studenti non dimentichino oggetti personali. 3. Ritirate i depositi cauzionali solo dopo aver verificato l'assenza di danni. 4. Ritirate i documenti dei ragazzi dalle casseforti. 5. Rispettate gli orari del transfer per l'aeroporto.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "faq_soggiorno_rientro_001",
    source: "FAQ SummerCamp2026",
    category: "Soggiorno",
    intent: "rientro in Italia bagagli famiglie questionario report",
    content: "Al rientro in Italia: controllate l'arrivo di tutti i bagagli e segnalate subito eventuali smarrimenti al Lost and Found. Uscite dall'area ritiro bagagli solo a gruppo completo. Riconsegnate gli studenti alle loro famiglie. Compilate online il Questionario Studenti e il Report del Capogruppo (link via email).",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "faq_soggiorno_salute_valigia_001",
    source: "FAQ SummerCamp2026",
    category: "Salute",
    intent: "medicine valigia salute cosa portare farmaci",
    content: "Si consiglia di mettere in valigia medicine da banco usate abitualmente (tachipirina, ibuprofene, antistaminici) e una confezione di antibiotico ad ampio spettro prescritto dal pediatra. In tutti i centri è presente un welfare manager e personale di primo soccorso.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },

  // ─── EMERGENZE ───────────────────────────────────────────────────────────

  {
    id: "faq_emergenza_001",
    source: "FAQ SummerCamp2026",
    category: "Emergenze",
    intent: "emergenza chi contattare numero staff locale",
    content: "In caso di emergenza: rivolgetevi prima allo staff della scuola locale. Avete poi un numero di emergenza riservato ai Capigruppo (arriva nella busta finale). Non prendete mai iniziative autonome: contattate sempre il team L'astrolabio. Nei centri di Egham, Eastbourne, Cirencester, Bath e Nottingham è presente anche l'Italian Coordinator.",
    criticality: "critica",
    escalationRequired: true,
    contactToShow: "Staff locale + numero emergenza riservato + info@lastrolabio.it",
  },
  {
    id: "faq_emergenza_medica_001",
    source: "FAQ SummerCamp2026 + Group Leader Guide",
    category: "Emergenze",
    intent: "emergenza medica grave 999 112 cosa fare",
    content: "In caso di emergenza medica grave chiamate immediatamente il 999 (UK) o il 112 (Europa). Rimanete con lo studente e non lasciatelo solo. Avvisate il Welfare & Communications Manager o il duty mobile appena possibile. Non prendete decisioni mediche autonome.",
    criticality: "critica",
    escalationRequired: true,
    contactToShow: "999 (UK) / 112 (Europa) + Welfare & Communications Manager",
  },
  {
    id: "faq_emergenza_studente_malato_001",
    source: "FAQ SummerCamp2026 + Group Leader Guide",
    category: "Emergenze",
    intent: "studente sta male malato assente lezioni cosa fare",
    content: "Informate subito il Welfare & Communications Manager (duty mobile) se uno studente è malato o sarà assente da lezioni o attività. Il trattamento medico per studenti visitatori avviene generalmente al Pronto Soccorso ospedaliero. Se è necessario andare in ospedale, lo studente va accompagnato dal Capogruppo in taxi (costo coperto da Elac). Elac non può somministrare medicine: assicuratevi di avere il consenso scritto dei genitori per farlo.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "Welfare & Communications Manager / duty mobile",
  },
  {
    id: "faq_emergenza_disciplinare_001",
    source: "FAQ SummerCamp2026",
    category: "Emergenze",
    intent: "problemi disciplinari rimpatrio studente furto",
    content: "In caso di rimpatrio (es. per furto), rivolgetevi al Responsabile L'astrolabio e/o chiamate il numero di emergenza. Non agite mai in autonomia. Ulteriori dettagli sono disponibili sulla Guida del Capogruppo nell'Area Leader.",
    criticality: "critica",
    escalationRequired: true,
    contactToShow: "Numero emergenza riservato + info@lastrolabio.it",
  },

  // ─── ASSICURAZIONE ───────────────────────────────────────────────────────

  {
    id: "faq_assicurazione_polizza_001",
    source: "FAQ SummerCamp2026",
    category: "Assicurazione",
    intent: "polizza amica assicurazione cosa copre Europ Assistance",
    content: "La Polizza Amica copre: spese mediche, danni al bagaglio e furto di oggetti personali (denaro escluso). In caso di necessità, aprite subito il sinistro contattando Europ Assistance, prestando attenzione a esclusioni e franchigia.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },
  {
    id: "faq_assicurazione_sinistro_001",
    source: "FAQ SummerCamp2026",
    category: "Assicurazione",
    intent: "sinistro assicurativo chi apre come funziona",
    content: "Il sinistro va aperto direttamente dal Capogruppo all'estero. Successivamente viene gestito dalla famiglia dello studente al rientro in Italia (trattandosi di dati sanitari sensibili). L'astrolabio è solo intermediario tra lo studente e l'assicurazione. Il flyer del Capogruppo è diverso da quello degli studenti.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "info@lastrolabio.it",
  },

  // ─── SUMMER CAMP ─────────────────────────────────────────────────────────

  {
    id: "faq_summercamp_internazionale_001",
    source: "FAQ SummerCamp2026",
    category: "Summer Camp",
    intent: "summer camp internazionale nazionalita studenti",
    content: "I Summer Camp L'astrolabio sono internazionali. Nei centri sono presenti studenti di moltissime nazionalità: Eastbourne ospita turchi, brasiliani, francesi, cinesi, greci, armeni e molti altri; Bath ha palestinesi, georgiani, giapponesi, ecuadoregni e altri ancora.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "faq_italian_coordinator_001",
    source: "FAQ SummerCamp2026",
    category: "Contatti",
    intent: "Italian Coordinator 2026 nomi chi sono dove coordinator italiano sede centro",
    content: "Gli Italian Coordinator 2026 sono: Maria Cristina Marchi (Londra Egham), Anna Maria La Cava (Cirencester), Tiziana Toni (Nottingham), Federica Ippoliti (Eastbourne), Beatrice Fiorani (Bath). Contattateli solo dopo l'arrivo in campus.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },
  {
    id: "faq_teacher_training_001",
    source: "FAQ SummerCamp2026",
    category: "Summer Camp",
    intent: "teacher training programma capigruppo British Council",
    content: "Nei centri di Eastbourne, Cirencester, Bath e Nottingham è disponibile: il Teacher Training (6 ore, riconosciuto dal British Council — iscriversi entro il 29/5/2026 a info@lastrolabio.it) e il Group Leaders Programme con momenti conviviali come cream tea e cheese & wine parties. Riunione con la scuola locale il 9 giugno.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: "info@lastrolabio.it",
  },

  // ─── GUIDA GROUP LEADER — STRUTTURA ELAC ─────────────────────────────────

  {
    id: "guide_welcome_pack_001",
    source: "Group Leader Guide",
    category: "Arrivo",
    intent: "welcome pack contenuto cosa ricevo all arrivo",
    content: "All'arrivo riceverete il Welcome Pack Elac che contiene: programma specifico del gruppo, lettera di benvenuto con Wi-Fi e contatti di emergenza h24, lista del gruppo, piano delle stanze, informazioni homestay (se necessario), lanyard e badge con nome da Group Leader.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "guide_lanyards_001",
    source: "Group Leader Guide",
    category: "Arrivo",
    intent: "lanyards colori cordini badge emergenza",
    content: "Tutti indossano un lanyard Elac colorato: staff management = multicolore; Activity Leaders e Insegnanti = blu navy; Group Leaders = verde mare; studenti Green group = verde scuro; studenti Yellow group = giallo senape. Gli studenti ricevono anche una card di emergenza con istruzioni e QR code con il numero h24. Le card vanno restituite all'ufficio Elac alla fine.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "guide_ufficio_elac_001",
    source: "Group Leader Guide",
    category: "Soggiorno",
    intent: "ufficio Elac dove trovare staff domande",
    content: "L'ufficio Elac è il cuore del centro nei corsi primaverili ed estivi. Per qualsiasi domanda o problema, il team di gestione si trova lì (quando non sono in giro a controllare che tutto vada bene).",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "guide_duty_phone_001",
    source: "Group Leader Guide",
    category: "Contatti",
    intent: "duty phone telefono emergenza h24 numero",
    content: "Ogni centro ha uno o due telefoni di servizio attivi h24. I numeri vi vengono comunicati all'arrivo nella lettera di benvenuto. Verrà anche creato un gruppo WhatsApp per le comunicazioni importanti, ma le conversazioni faccia a faccia restano fondamentali.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "Numero duty phone nel Welcome Pack",
  },
  {
    id: "guide_riunione_GL_001",
    source: "Group Leader Guide",
    category: "Soggiorno",
    intent: "riunione group leader primo giorno meeting",
    content: "La sera del primo giorno completo si tiene una riunione con tutti i Group Leader e il team di gestione del centro. Copre regole, pulizia, lavanderia, danni e altro ancora. La presenza è obbligatoria anche per chi ha già fatto questo ruolo in precedenza.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "guide_briefing_giornaliero_001",
    source: "Group Leader Guide",
    category: "Soggiorno",
    intent: "briefing giornaliero group leader aggiornamenti",
    content: "Si tiene un briefing giornaliero per tutti i Group Leader, al quale è obbligatorio partecipare. Sono incontri brevi per condividere aggiornamenti e informazioni importanti. Prima delle escursioni, l'Excursion Manager tiene riunioni aggiuntive per illustrare gli itinerari e le regole di sicurezza fuori sede.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },

  // ─── SALUTE E SICUREZZA ───────────────────────────────────────────────────

  {
    id: "guide_emergenza_medica_grave_001",
    source: "Group Leader Guide",
    category: "Emergenze",
    intent: "problema medico serio allergia segnalare welfare",
    content: "In caso di emergenza medica grave chiamate il 999 o il 112. Se uno studente (o voi stessi) ha problemi medici seri o allergie, parlate subito con il Welfare & Communications Manager non appena arrivate al centro.",
    criticality: "critica",
    escalationRequired: true,
    contactToShow: "999 / 112 + Welfare & Communications Manager",
  },
  {
    id: "guide_antincendio_001",
    source: "Group Leader Guide",
    category: "Sicurezza",
    intent: "antincendio fire drill esercitazione evacuazione",
    content: "Il giorno dell'arrivo vi verranno mostrate le uscite più rapide dall'edificio in caso di incendio. Entro 48 ore dall'arrivo (idealmente entro le prime 24 ore) tutti gli studenti partecipano all'esercitazione antincendio. I gruppi che non la eseguono bene devono ripeterla. Verrete avvisati in anticipo.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "guide_pronto_soccorso_001",
    source: "Group Leader Guide",
    category: "Salute",
    intent: "pronto soccorso first aid kit ospedale A&E",
    content: "Il trattamento medico per gli studenti avviene generalmente al Pronto Soccorso (A&E) dell'ospedale locale, non dai medici di base. Se serve l'ospedale, lo studente va in taxi con il Group Leader (costo coperto da Elac). Ogni centro ha first aider qualificati — i loro nomi sono affissi in ufficio e nella bacheca studenti. I kit di primo soccorso sono disponibili nell'ufficio principale.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "Welfare & Communications Manager / duty mobile",
  },

  // ─── ALLOGGIO E REGOLE ────────────────────────────────────────────────────

  {
    id: "guide_alloggio_regole_001",
    source: "Group Leader Guide",
    category: "Alloggio",
    intent: "alloggio regole stanze rumore pulizia supervisione",
    content: "Il Group Leader aiuta con: gestire il rumore specialmente la sera, assicurarsi che gli studenti tengano stanze e sale comuni pulite e ordinate, far rispettare il personale del centro, fare un uso corretto dei servizi igienici. Gli studenti non possono tornare in alloggio durante il giorno senza supervisione e non devono essere mai lasciati incustoditi nell'edificio residenziale.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "guide_telefoni_bedtime_001",
    source: "Group Leader Guide",
    category: "Alloggio",
    intent: "bedtime telefoni cellulari notte raccogliere",
    content: "Il Group Leader deve raccogliere i telefoni cellulari degli studenti quando vanno a letto, in linea con la Mobile Phone Policy. È assolutamente vietato agli studenti uscire dopo l'orario di bedtime — ci sono sanzioni serie. Il Group Leader deve controllare che tutti i ragazzi siano a letto in orario e che le regole sul 'lights out' vengano rispettate.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },

  // ─── REGISTRAZIONE STUDENTI ───────────────────────────────────────────────

  {
    id: "guide_registrazione_001",
    source: "Group Leader Guide + Roles and Responsibilities",
    category: "Responsabilità",
    intent: "registrazione studenti tre volte giorno orari appello",
    content: "Gli studenti vanno registrati almeno tre volte al giorno: mattina (9:00-9:15), pomeriggio (14:00-14:15) e sera (21:30-22:00). La sera c'è un registro all'ingresso di ogni edificio residenziale: firmatelo per confermare che tutti i vostri studenti siano presenti. Se non firmate entro le 22:00, il team vi chiamerà.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "guide_registrazione_homestay_001",
    source: "Group Leader Guide",
    category: "Responsabilità",
    intent: "registrazione homestay orari arrivo partenza",
    content: "Gli studenti in homestay devono registrarsi anche all'ufficio Elac quando arrivano la mattina (8:45/9:00) e quando partono nel pomeriggio (17:15/17:30). Nelle serate del programma sociale (3 volte a settimana) devono registrarsi all'arrivo (19:45) e prima di tornare a casa (21:30).",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },

  // ─── TEAM ELAC ────────────────────────────────────────────────────────────

  {
    id: "guide_team_elac_001",
    source: "Group Leader Guide",
    category: "Contatti",
    intent: "team Elac ruoli chi contattare responsabilità",
    content: "Il team di ogni centro include: Centre Manager (responsabilità generale), Centre Logistics Manager (alloggi e catering), Welfare & Communications Manager (benessere studenti e first aid), Academic Manager (programma accademico), Social Programme Manager (attività), Excursion Manager (gite). L'Astrolabio Coordinator è presente solo a Cirencester, Eastbourne e Nottingham. Per domande generali, partite dal Welfare & Communications Manager.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },

  // ─── RUOLI E RESPONSABILITÀ ───────────────────────────────────────────────

  {
    id: "roles_welfare_001",
    source: "Group Leader Roles and Responsibilities",
    category: "Responsabilità",
    intent: "ruolo group leader welfare benessere studenti",
    content: "Il Group Leader è spesso la prima persona a cui gli studenti si rivolgono per i problemi, soprattutto di salute. Potete risolverne alcuni direttamente, ma quando serve l'intervento di Elac, assicuratevi che lo staff venga informato e possa aiutare.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "Welfare & Communications Manager",
  },
  {
    id: "roles_accademico_001",
    source: "Group Leader Roles and Responsibilities",
    category: "Responsabilità",
    intent: "progresso accademico classe sbagliata livello studente",
    content: "Se pensate che uno studente sia stato inserito nella classe sbagliata, informatene subito l'Academic Manager o il Senior Teacher. Se uno studente non è soddisfatto della propria classe, segnalate prontamente. Di solito si attende 24-48 ore prima di fare cambiamenti.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: "Academic Manager / Senior Teacher",
  },
  {
    id: "roles_presenze_001",
    source: "Group Leader Roles and Responsibilities",
    category: "Responsabilità",
    intent: "presenze puntualità frequenza obbligatoria",
    content: "La frequenza al corso è obbligatoria — nessuna eccezione salvo malattia reale. Gli studenti devono partecipare a tutto e non possono restare in camera. Devono essere puntuali a lezioni, attività ed escursioni.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "roles_comportamento_001",
    source: "Group Leader Roles and Responsibilities",
    category: "Responsabilità",
    intent: "comportamento studenti code of conduct regole",
    content: "Ci si aspetta un buon comportamento da tutti gli studenti. Quando il comportamento non è adeguato, Elac chiederà l'aiuto del Group Leader per correggere la situazione.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: "Staff Elac / Centre Manager",
  },
  {
    id: "roles_escursioni_001",
    source: "Group Leader Roles and Responsibilities",
    category: "Escursioni",
    intent: "escursioni responsabilità group leader gite",
    content: "Nelle escursioni la responsabilità generale è dello staff Elac. Il Group Leader deve: assicurarsi che gli studenti siano al punto di partenza all'orario richiesto; verificare la presenza a ogni checkpoint (head count o roll call); raccogliere i numeri di telefono degli studenti con tempo libero. Qualsiasi cambio all'itinerario va concordato con lo staff Elac.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: "Excursion Manager",
  },

  // ─── CODICE DI CONDOTTA ───────────────────────────────────────────────────

  {
    id: "conduct_alcol_001",
    source: "Group Leader Code of Conduct",
    category: "Condotta",
    intent: "alcol droghe fumo in servizio vietato",
    content: "Il Group Leader non deve possedere, usare o essere sotto l'effetto di droghe durante il corso. Non deve consumare alcol né essere sotto l'effetto di alcol mentre è in servizio. Non deve fumare (incluse sigarette elettroniche e vaping) durante le attività con gli studenti. Portare armi è illegale nel Regno Unito. La violazione di queste regole porta a procedure disciplinari.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "conduct_foto_001",
    source: "Group Leader Code of Conduct",
    category: "Condotta",
    intent: "foto personali studenti social media vietato",
    content: "Gli adulti non possono scattare o scambiare foto personali con gli studenti durante il corso. Per maggiori dettagli fare riferimento alla Safeguarding Policy.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "Welfare & Communications Manager",
  },
  {
    id: "conduct_relazione_adulto_minore_001",
    source: "Group Leader Code of Conduct",
    category: "Condotta",
    intent: "relazione adulto studente abuso fiducia reato",
    content: "Una relazione sessuale tra un Group Leader e uno studente — indipendentemente dall'età — è un abuso di fiducia ed è un reato penale che verrà segnalato alle autorità. Con gli studenti: evitate situazioni in cui siete soli, rispettate la privacy nelle stanze, il contatto fisico è accettabile solo in pubblico e per necessità specifiche. Per qualsiasi preoccupazione parlatene con il Welfare & Communications Manager.",
    criticality: "critica",
    escalationRequired: true,
    contactToShow: "Welfare & Communications Manager",
  },
  {
    id: "conduct_internet_001",
    source: "Group Leader Code of Conduct",
    category: "Condotta",
    intent: "internet wifi sicurezza online uso appropriato",
    content: "Il Wi-Fi in sede è fornito da scuole e università con regole rigide sull'accesso a materiale inappropriato. Chi tenta di accedere a siti illegali o scarica materiale inappropriato può perdere il ruolo nel corso ed essere allontanato dalla struttura. La polizia può essere chiamata.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },

  // ─── CENTRE GUIDE BATH ───────────────────────────────────────────────────

  {
    id: "bath_citta_001",
    source: "Centre Guide Bath 2026",
    category: "Centro Bath",
    intent: "Bath citta cosa vedere cosa offre",
    content: "Bath e Patrimonio dell Umanita UNESCO, famosa per i Bagni Romani, architettura georgiana e ottime strutture. Da visitare: Bath Abbey, Royal Crescent, Assembly Rooms. Collegata a Londra con treno diretto ogni 30 minuti (90 minuti). Vicino a Bristol, Oxford, Stonehenge e Glastonbury.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "bath_contatti_001",
    source: "Centre Guide Bath 2026",
    category: "Contatti Bath",
    intent: "numeri utili Bath contatti ufficio Elac emergenza ospedale",
    content: "Numeri utili per Bath: Ufficio Elac UoB: 07579831425. Polizia/Pompieri/Ambulanza: 999 (solo emergenze). Polizia non emergenze: 101. Elac Head Office Bath: +44 1225 443261. Ospedale: Bath Royal United Hospital (RUH), Combe Park, Bath, BA2 7AY, a 15 minuti di auto.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "Elac UoB: 07579831425 / Emergenze: 999",
  },
  {
    id: "bath_regole_001",
    source: "Centre Guide Bath 2026",
    category: "Regole Bath",
    intent: "regole campus Bath telefono fumo alcol coprifuoco rumore penali danni chiave",
    content: "Regole campus Bath: coprifuoco alle 22:00. Cellulari in silenzioso durante le lezioni. Vietato fumare e vaping al chiuso e sul campus. Vietati alcol e droghe a qualsiasi eta. Penali: allarme antincendio 9:00-17:30 = 75 sterline; 17:30-9:00 = 100 sterline. Chiave campus persa = 25 sterline. Key card persa = 5 sterline. Chiave homestay persa = 100 sterline.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "bath_trasporti_001",
    source: "Centre Guide Bath 2026",
    category: "Trasporti Bath",
    intent: "trasporti Bath bus treno taxi aeroporto tempi transfer Gatwick Heathrow Bristol",
    content: "Trasporti locali Bath: shuttle privati per il centro citta. Treni diretti per Londra dalla stazione Bath Spa (1 ora e 30 minuti). Taxi organizzabili dal team Elac. Tempi di trasferimento: Gatwick (LGW) 2 ore e 30 min, Heathrow (LHR) 2 ore, Bristol (BRS) 45 minuti.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "bath_pasti_001",
    source: "Centre Guide Bath 2026",
    category: "Pasti Bath",
    intent: "pasti colazione pranzo cena Bath cosa si mangia homestay residenziale",
    content: "Studenti residenziali: colazione pranzo e cena a buffet con opzioni vegetariane e per diete religiose. Per escursioni pranzo al sacco. Studenti homestay: pasti con la famiglia, pranzo caldo in campus dal lunedi al venerdi, pranzo al sacco per escursioni weekend.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },
  {
    id: "bath_medico_001",
    source: "Centre Guide Bath 2026",
    category: "Salute Bath",
    intent: "ospedale Bath pronto soccorso medico farmacia medicina",
    content: "Ospedale: Bath Royal United Hospital (RUH) con Pronto Soccorso a 15 minuti di auto. Ci sono farmacie locali e un supermercato sul campus con farmaci da banco. Il kit di primo soccorso e nell ufficio Elac. Gli studenti devono consegnare tutti i farmaci al Group Leader o al Welfare Officer.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "999 (emergenze) / Elac UoB: 07579831425",
  },
  {
    id: "conduct_malattia_GL_001",
    source: "Group Leader Code of Conduct",
    category: "Condotta",
    intent: "group leader malato assenza cosa fare",
    content: "Se il Group Leader è malato ma il problema è lieve, Elac apprezza che continui il più possibile con il supporto del team. Se è malato e potenzialmente contagioso, deve stare lontano dagli studenti e verrà predisposta un'assistenza alternativa.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "Centre Manager / Welfare & Communications Manager",
  },
  // ─── CENTRE GUIDE CIRENCESTER ────────────────────────────────────────────

  {
    id: "ciren_contatti_001",
    source: "Centre Guide Cirencester 2025",
    category: "Contatti Cirencester",
    intent: "numeri utili Cirencester contatti ufficio Elac emergenza ospedale taxi",
    content: "Numeri utili per Cirencester: Ufficio Elac Cirencester: 07579831427. Polizia/Pompieri/Ambulanza: 999. Polizia non emergenze: 101. Elac Head Office: +44 1225 443261. Ospedale: Cirencester Hospital, Tetbury Road, Cirencester, GL7 1UY, tel. 0300 421 6200. Taxi locali: A2B 01285 655651, Siren Cars 01285 652388. Indirizzo scuola: Royal Agricultural University, Cirencester, GL7 6JS.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "Elac Cirencester: 07579831427 / Emergenze: 999",
  },
  {
    id: "ciren_campus_001",
    source: "Centre Guide Cirencester 2025",
    category: "Centro Cirencester",
    intent: "Cirencester Royal Agricultural University campus strutture alloggio stanze doppie",
    content: "Il corso si svolge alla Royal Agricultural University di Cirencester, a 20 minuti a piedi dal centro. Strutture: campo da gioco, tennis, palestra, aule con lavagne interattive, sala da pranzo tradizionale. Le stanze sono doppie (twin), alcune con bagno privato, altre con bagno condiviso. Biancheria cambiata settimanalmente, asciugamani forniti.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },

  // ─── CENTRE GUIDE EASTBOURNE ─────────────────────────────────────────────

  {
    id: "eastb_contatti_001",
    source: "Centre Guide Eastbourne 2026",
    category: "Contatti Eastbourne",
    intent: "numeri utili Eastbourne contatti ufficio Elac emergenza ospedale homestay",
    content: "Numeri utili per Eastbourne: Ufficio Elac Eastbourne: 07579831422. Elac Homestay Eastbourne: 07579831423. Polizia/Pompieri/Ambulanza: 999. Polizia non emergenze: 101. Elac Head Office: +44 1225 443261. Ospedale: Eastbourne District General Hospital, Kings Drive, Eastbourne, BN21 2UD, tel. 0300 131 4500, a 10 minuti di auto. Indirizzo scuola: Eastbourne College, Old Wish Road, Eastbourne, BN21 4JY.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "Elac Eastbourne: 07579831422 / Emergenze: 999",
  },
  {
    id: "eastb_trasporti_001",
    source: "Centre Guide Eastbourne 2026",
    category: "Trasporti Eastbourne",
    intent: "trasporti Eastbourne treno stazione Londra aeroporto Gatwick distanza",
    content: "La stazione ferroviaria di Eastbourne e a 5 minuti a piedi dal campus con ottimi collegamenti per Londra (1 ora e 30 minuti). Tempo di trasferimento da Gatwick (LGW): circa 1 ora.",
    criticality: "normale",
    escalationRequired: false,
    contactToShow: null,
  },

  // ─── CENTRE GUIDE NOTTINGHAM ─────────────────────────────────────────────

  {
    id: "notti_contatti_001",
    source: "Centre Guide Nottingham 2025",
    category: "Contatti Nottingham",
    intent: "numeri utili Nottingham contatti ufficio Elac emergenza ospedale Queens Medical",
    content: "Numeri utili per Nottingham: Ufficio Elac Nottingham: 07579831428. Polizia/Pompieri/Ambulanza: 999. Polizia non emergenze: 101. Elac Head Office: +44 1225 443261. Ospedale: Queens Medical Centre, Derby Road, Lenton, Nottingham, NG7 2UH. Indirizzo scuola: Jubilee Campus, University of Nottingham, University Park, Nottingham, NG7 2RD.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "Elac Nottingham: 07579831428 / Emergenze: 999",
  },

  // ─── CENTRE GUIDE HORSHAM ────────────────────────────────────────────────

  {
    id: "horsh_contatti_001",
    source: "Centre Guide Horsham 2026",
    category: "Contatti Horsham",
    intent: "numeri utili Horsham contatti ufficio Elac emergenza ospedale Christ Hospital School",
    content: "Numeri utili per Horsham: Ufficio Elac Horsham: 07579831424. Polizia/Pompieri/Ambulanza: 999. Polizia non emergenze: 101. Ospedale: Princess Royal Hospital, Haywards Heath, tel. 01444 441881. Indirizzo scuola: Christ Hospital School, Christ Hospital Road, Horsham, RH13 OYP. Campus nel villaggio Christ Hospital a 4km da Horsham, con stazione ferroviaria propria. Tempo da Gatwick: circa 30 minuti.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "Elac Horsham: 07579831424 / Emergenze: 999",
  },

  // ─── IRLANDA ─────────────────────────────────────────────────────────────

  {
    id: "irlanda_kilkenny_001",
    source: "Pre-arrival pack Kilkenny 2026",
    category: "Centro Kilkenny Irlanda",
    intent: "Kilkenny College Irlanda ospedale contatti ATC emergenza aeroporto Dublino",
    content: "Kilkenny College: Castlecomer Road, Kilkenny, Irlanda. A 135km da Dublino Airport, circa 1 ora e 30 minuti. Ospedale: Saint Luke Hospital Kilkenny City, tel. +353-567752484. Contatti ATC Language Schools: tel. +353-1 2845512, email info@atcireland.ie. Emergenze in Irlanda: 999 o 112.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "ATC: +353-1 2845512 / Emergenze: 999 o 112",
  },
  {
    id: "irlanda_ucd_001",
    source: "Pre-arrival pack UCD 2026",
    category: "Centro UCD Dublino",
    intent: "UCD Dublino University College Dublin ospedale contatti aeroporto",
    content: "University College Dublin (UCD): Belfield, Dublin 4, D04 R6P5, Irlanda. A 20km dall aeroporto di Dublino, circa 40 minuti. Ospedali: over 16 anni - St. Vincent University Hospital, Elm Park, Dublin 4, tel. +353-1 221 4000. Under 16 anni - Crumlin Children Hospital, tel. +353-1 409 6100. Contatti ATC: +353-1 2845512.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "ATC: +353-1 2845512 / Emergenze: 999 o 112",
  },
  {
    id: "irlanda_maynooth_001",
    source: "Pre-arrival pack Maynooth 2026",
    category: "Centro Maynooth",
    intent: "Maynooth University Irlanda ospedale contatti aeroporto Dublino",
    content: "Maynooth University: John Hume Building, Maynooth, Co. Kildare, Irlanda. Vicino all aeroporto di Dublino. Ospedale: Tallaght Hospital, Belgard Square North, Tallaght, Dublin 24, tel. +353-1 4142000. Contatti ATC: +353-1 2845512, info@atcireland.ie.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "ATC: +353-1 2845512 / Emergenze: 999 o 112",
  },

  // ─── USA ─────────────────────────────────────────────────────────────────

  {
    id: "usa_emergenza_001",
    source: "GL Manual USA 2026",
    category: "Emergenze USA",
    intent: "emergenza USA Los Angeles Miami 911 numero emergenza polizia ambulanza",
    content: "In caso di emergenza negli USA chiamate il 911 (polizia, pompieri, ambulanza). Il numero e gratuito anche dai telefoni pubblici. I cellulari devono essere depositati durante le lezioni e si recuperano solo dopo la classe.",
    criticality: "critica",
    escalationRequired: true,
    contactToShow: "911 (USA) + staff TLA",
  },
  {
    id: "usa_miami_001",
    source: "GL Manual Miami 2026",
    category: "Centro Miami",
    intent: "Miami Barry University ospedale emergenza medica assicurazione Jackson",
    content: "Centro Miami: Barry University. In caso di emergenza medica lo studente viene accompagnato al Jackson North Medical Center o ospedale vicino. Portare sempre il documento assicurativo. Conservare tutta la documentazione medica per il rimborso. Non fornire all ospedale l indirizzo del college, usare l indirizzo di residenza in Italia.",
    criticality: "alta",
    escalationRequired: true,
    contactToShow: "911 (emergenze) + staff TLA",
  },

  // ─── CANADA ──────────────────────────────────────────────────────────────

  {
    id: "canada_emergenza_001",
    source: "OI Juniors Centre Guidebook Canada 2026",
    category: "Emergenze Canada",
    intent: "emergenza Canada 911 numero emergenza Toronto New York Brooklyn Oxford International",
    content: "In caso di emergenza in Canada chiamate il 911. Gli studenti ricevono un lanyard con numero di emergenza da chiamare se si perdono, risponde Oxford International Head Office. I gruppi vengono accolti all aeroporto da Activity Leader con maglietta rossa Oxford International.",
    criticality: "critica",
    escalationRequired: true,
    contactToShow: "911 (Canada) + numero emergenza sul lanyard",
  },
  {
    id: "canada_toronto_001",
    source: "OI Juniors TO Centre Guidebook 2026",
    category: "Centro Toronto",
    intent: "Toronto Canada campus ospedale centro medico universita",
    content: "Centro Toronto, Canada. C'e un centro medico sul campus per problemi minori. Ospedali vicini: St Michael Hospital 30 Bond St, Mount Sinai Hospital 600 University Ave, Toronto General Hospital 190 Elizabeth St. Andare all ospedale solo in caso di vera emergenza.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "911 (emergenze) + staff Oxford International",
  },
  {
    id: "canada_liu_001",
    source: "OI Juniors LIU Centre Guidebook 2026",
    category: "Centro New York Brooklyn",
    intent: "New York Brooklyn LIU Long Island University campus ospedale",
    content: "Centro Long Island University (LIU) a Brooklyn, New York. Ospedali vicini: The Brooklyn Hospital Center, 121 DeKalb Ave, Brooklyn NY 11201. Brooklyn Health Center, 265 Ashland Pl, Brooklyn NY 11217.",
    criticality: "alta",
    escalationRequired: false,
    contactToShow: "911 (emergenze) + staff Oxford International",
  },

];

// ─── FUNZIONE DI RICERCA ─────────────────────────────────────────────────────

export function findRelevantChunks(question: string, limit: number = 4): KnowledgeBlock[] {
  const normalizedQuestion = question.toLowerCase().replace(/[^\w\sàáèéìíòóùú]/g, " ");

  const stopwords = new Set([
    "il","lo","la","i","gli","le","un","uno","una","di","a","da","in","con",
    "su","per","tra","fra","e","o","ma","se","che","chi","cui","non","più",
    "mi","ti","si","ci","vi","ne","ho","ha","ai","del","della","delle","degli",
    "dei","al","alla","devo","fare","cosa","come","dove","quando","quali","quale",
    "questo","questa","questi","queste","mio","mia","deve","posso","sono","stato",
    "stata","nel","nella","all","suo","sua","ho","hai","avete","abbiamo",
  ]);

  const keywords = normalizedQuestion
    .split(/\s+/)
    .filter((w) => w.length > 2 && !stopwords.has(w));

  if (keywords.length === 0) return [];

  const scored = knowledgeBase.map((block) => {
    const searchText = [block.intent, block.content, block.category].join(" ").toLowerCase();
    let score = 0;
    for (const keyword of keywords) {
      if (searchText.includes(keyword)) score += 2;
      const words = searchText.split(/\s+/);
      for (const word of words) {
        if (word.includes(keyword) && word !== keyword) score += 1;
      }
    }
    if (block.criticality === "critica") score += 1;
    return { block, score };
  });

  return scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ block }) => block);
}
