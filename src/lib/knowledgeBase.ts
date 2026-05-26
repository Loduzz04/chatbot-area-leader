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
    intent: "area leader accesso password portale sito",
    content: "L'Area Leader è accessibile su lastrolabio.it dal menu in alto a destra. Password: Lastrolabio2026! Contiene: Guida del Capogruppo, Centre Guide di ogni campus, copertura assicurativa, permessi di uscita, autocertificazioni, video AI della presentazione e FAQ.",
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
    intent: "Italian Coordinator 2026 nomi chi sono dove",
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